import React, { MouseEventHandler, useState } from 'react';
import Modal from '../components/Modal';
import styles from '../stylesheets/page-components/TrackingDetailsModal.module.scss';
import helperStyles from '../stylesheets/components/Helper.module.scss';
import func from '../functions';
import _ from 'lodash';
import BookingCard from '../components/BookingCard';
import { TrackingDetailsType } from '../lib/Types';
const { usingStyles } = func;

const getStyles = usingStyles(styles);
const getHelperStyles = usingStyles(helperStyles);

interface StatusChoices {
  [key: string]: string;
}

export default function TrackingDetailsModal({
  trackingForm,
  isOpen,
  onDismiss,
}: {
  trackingForm: TrackingDetailsType;
  isOpen: boolean;
  onDismiss: MouseEventHandler<HTMLButtonElement>;
  }): React.ReactElement {
  const getStatus = () => {
    let val = _.get(trackingForm, 'status', '');
    const statusChoices: StatusChoices = {
      pending: 'Pending',
      payment_completed: 'Payment Completed',
      delivered: 'Delivered',
      rejected: 'Rejected',
    };

    if (val && _.has(statusChoices, val)) {
      val = statusChoices[val];
    }

    return val;
  };

  return (
    <Modal
      modalBodyClasses={[
        getHelperStyles('overflow-none'),
        getStyles('modal-body'),
      ]}
      isOpen={isOpen}
      onDismiss={onDismiss}
      id="booking--details-modal"
      heading="Tracking Details"
      body={
        <div className={getStyles('container')}>
          <BookingCard
            originShipment={trackingForm.originShipment}
            destinationShipment={trackingForm.destinationShipment}
            weight={trackingForm.weight}
            weightUnit={trackingForm.weightUnit}
          />
          <div className={getHelperStyles('mt-25')}>
            <div className={getHelperStyles('alert')}>
              <p>Tracking Id: {trackingForm?.trackingId || ''}</p>
              <hr />
              {trackingForm?.price ? (
                <>
                  <p>Price: {trackingForm?.price || ''} </p>
                  <hr />
                </>
              ) : null}

              <p>Status: {getStatus()}</p>
              {trackingForm.specialInstructions ? (
                <>
                  <hr />
                  <p>Special Instructions from Customer:</p>
                  <p>{trackingForm.specialInstructions}</p>
                </>
              ) : null}
              <hr />
              <p>Remarks:</p>
              {trackingForm.remarks ? <p>{trackingForm.remarks}</p> : null}
            </div>
          </div>
        </div>
      }
    />
  );
}
