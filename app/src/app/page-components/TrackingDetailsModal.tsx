import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import Modal from '../components/Modal';
import styles from '../stylesheets/page-components/TrackingDetailsModal.module.scss';
import inputStyles from '../stylesheets/components/Input.module.scss';
import helperStyles from '../stylesheets/components/Helper.module.scss';
import buttonsStyles from '../stylesheets/components/Buttons.module.scss';
import func from '../functions';
import _ from 'lodash';
const { usingStyles } = func;

const getStyles = usingStyles(styles);
const getInputStyles = usingStyles(inputStyles);
const getHelperStyles = usingStyles(helperStyles);
const getButtonsStyles = usingStyles(buttonsStyles);

export default function TrackingDetailsModal({
  trackingForm,
  isOpen,
  onDismiss,
}: {
  trackingForm: {
    pickupAddress: string;
    destinationAddress: string;
    weight: string;
    weightUnit: string;
  };
  isOpen: boolean;
  onDismiss: MouseEventHandler<HTMLButtonElement>;
}): React.ReactElement {
  const [form, setForm] = useState({
    contactNo: '',
    specialInstructions: '',
  });

  function hasWords(str:string) {
    return /[a-zA-Z]/.test(str);
  }

  function hasSpecialCharacters(str:string) {
    return /[!@#$%^&*()_\=\[\]{};':"\\|,.<>\/?]+/.test(str);
  }

  const onCompleteBooking = (event: MouseEventHandler) => {
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
  };

  return (
    <Modal
      modalBodyClasses={[
        getHelperStyles('overflow-none'),
        getStyles('modal-body'),
      ]}
      isOpen={isOpen}
      onDismiss={onDismiss}
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
                Complete Booking
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}
