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

export default function TrackingDetailsModal({
  trackingForm,
  isOpen,
  onDismiss,
}: {
  trackingForm: TrackingDetailsType;
  isOpen: boolean;
  onDismiss: MouseEventHandler<HTMLButtonElement>;
}): React.ReactElement {
  
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
              <p>Tracking Id: </p>
              <p>Status: </p>
            </div>
          </div>
        </div>
      }
    />
  );
}
