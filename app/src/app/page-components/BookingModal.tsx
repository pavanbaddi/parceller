import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import Modal from '../components/Modal';
import styles from '../stylesheets/page-components/BookingModal.module.scss';
import inputStyles from '../stylesheets/components/Input.module.scss';
import helperStyles from '../stylesheets/components/Helper.module.scss';
import buttonsStyles from '../stylesheets/components/Buttons.module.scss';
import func from '../functions';
import _ from 'lodash';
import { TrackingFormType } from "../lib/Types";
import { doPost } from "../lib/Datasource";
import Image from "next/image";

const { usingStyles } = func;

const getStyles = usingStyles(styles);
const getInputStyles = usingStyles(inputStyles);
const getHelperStyles = usingStyles(helperStyles);
const getButtonsStyles = usingStyles(buttonsStyles);

export default function BookingModal({
  trackingForm,
  isOpen,
  onDismiss,
  setTrackingForm,
  setTrackingDetails,
  setTrackingDetailsModalState
}: {
  trackingForm: TrackingFormType,
  isOpen: boolean,
  onDismiss: Function,
  setTrackingForm: Function,
  setTrackingDetails:Function,
  setTrackingDetailsModalState:Function
}): React.ReactElement {
  const [form, setForm] = useState({
    contactNo: '',
    specialInstructions: '',
  });
  const [loading, setLoading] = useState<Boolean>(false)

  function hasWords(str:string) {
    return /[a-zA-Z]/.test(str);
  }

  function hasSpecialCharacters(str:string) {
    return /[!@#$%^&*()_\=\[\]{};':"\\|,.<>\/?]+/.test(str);
  }

  const onCompleteBooking: MouseEventHandler<HTMLButtonElement> = () => {

    if (loading) {
      return;
    }

    let errors = [];
    if (_.isEmpty(form.contactNo)) {
      errors.push('Please enter contact number');
    } else if (
      hasWords(form.contactNo) ||
      hasSpecialCharacters(form.contactNo)
    ) {
      errors.push('Please enter valid contact number');
    }

    if (errors.length) {
      return alert(errors.join("\n"));
    }

    const formData = new FormData();
    const body = JSON.stringify({
      "origin_address" : trackingForm.pickupAddress,
      "destination_address" : trackingForm.destinationAddress,
      "weight" : trackingForm.weight,
      "weight_unit": trackingForm.weightUnit,
      "contact_no" : form.contactNo,
      "special_instructions" : form.specialInstructions,
    })
    setLoading(true)
    const endpoint = "/bookings/";
    doPost(endpoint, body)
      .then((response: any) => {
        setLoading(false)
        if (_.has(response, "error")) {
          let errors = _.flatMap(_.values(response.error))
          alert(_.join(errors, "\n"))
        } else { 
          onDismiss()
          response = response.obj;
          setTrackingDetails({
            id: _.get(response,"id", ""),
            originShipment: _.get(response,"origin_address", ""),
            destinationShipment: _.get(response,"destination_address", ""),
            price: _.get(response,"price", ""),
            remarks: _.get(response,"remarks", ""),
            status: _.get(response,"status", ""),
            trackingId: _.get(response,"tracking_id", ""),
            createdAt: _.get(response,"created_at", ""),
            weight: _.get(response,"weight", ""),
            weightUnit: _.get(response,"weight_unit", ""),
            contactNo: _.get(response,"contact_no", ""),
            specialInstructions: _.get(response,"special_instructions", "")
          });
          setTrackingDetailsModalState("open");
          setTrackingForm({
            "pickupAddress": "",
            "destinationAddress": "",
            "weight": "",
            "weightUnit": "",
          });
          setForm({
            contactNo: '',
            specialInstructions: '',
          });
        }
    }).catch((e: { msg: any; }) => {
      alert(e.msg)
      setLoading(false)
    })

  };

  const onModalDismiss: MouseEventHandler<HTMLButtonElement> = () => {
    onDismiss();
  }

  return (
    <Modal
      modalBodyClasses={[
        getHelperStyles('overflow-none'),
        getStyles('modal-body'),
      ]}
      isOpen={isOpen}
      onDismiss={onModalDismiss}
      id="booking-modal"
      heading="Booking Detail"
      body={
        <div className={getStyles('container')}>
          <div className={getStyles('card')}>
            <div>
              <p>Origin Shipment</p>
              <p>
                <small>{trackingForm.pickupAddress}</small>
              </p>
            </div>
            <div>
              <p>Destination Shipment</p>
              <p>
                <small>{trackingForm.destinationAddress}</small>
              </p>
            </div>
            <div>
              <p>Weight:</p>
              <p>
                <strong>
                  {trackingForm.weight} {trackingForm.weightUnit}
                </strong>
              </p>
            </div>
          </div>

          <div className={getHelperStyles('mt-25')}>
            <div>
              <label htmlFor="contact_no">
                Contact No{' '}
                <span className={getHelperStyles('text-danger')}>*</span>
              </label>
              <input
                type="text"
                id="contact_no"
                className={[
                  getInputStyles('mt-5'),
                  getInputStyles('form-control'),
                  getHelperStyles('bg-light__grey'),
                ].join(' ')}
                onChange={(e: ChangeEvent) => {
                  setForm({ ...form, contactNo: _.get(e, 'target.value', '') });
                }}
                value={form.contactNo}
              />
            </div>

            <div className={getHelperStyles('mt-10')}>
              <label htmlFor="special_instructions">
                Special Instructions (if any)
              </label>
              <input
                type="text"
                id="special_instructions"
                className={[
                  getInputStyles('mt-5'),
                  getInputStyles('form-control'),
                  getHelperStyles('bg-light__grey'),
                ].join(' ')}
                onChange={(e: ChangeEvent) => {
                  setForm({
                    ...form,
                    specialInstructions: _.get(e, 'target.value', ''),
                  });
                }}
                value={form.specialInstructions}
              />
            </div>

            {form.contactNo ? (
              <div className={getHelperStyles('mt-10')}>
                <div className={getHelperStyles('alert')}>
                  Our delivery executives will call you at this `
                  {form.contactNo}` number for pickup soon.
                </div>
              </div>
            ) : null}

            <div className={getHelperStyles('mt-25')}>
              <button
                type="button"
                className={getButtonsStyles('btn btn-primary btn-block')}
                onClick={onCompleteBooking}
              >
                {
                  loading ? <Image src="/assets/icons/loading.gif" alt="Loading" width={15} height={15} /> : "Complete Booking"
                }
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}
