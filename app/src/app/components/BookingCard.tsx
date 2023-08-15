import React from 'react';
import styles from '../stylesheets/components/BookingCard.module.scss';
import func from '../functions';
import _ from 'lodash';
import { BookingCardType } from '../lib/Types';
const { usingStyles } = func;

const getStyles = usingStyles(styles);

export default function BookingCard({
  originShipment,
  destinationShipment,
  weight,
  weightUnit,
}: BookingCardType): React.ReactElement {
  return (
    <div className={getStyles('card')}>
      <div>
        <p>Origin Shipment</p>
        <p>
          <small>{originShipment}</small>
        </p>
      </div>
      <div>
        <p>Destination Shipment</p>
        <p>
          <small>{destinationShipment}</small>
        </p>
      </div>
      <div>
        <p>Weight:</p>
        <p>
          <strong>
            {weight} {weightUnit}
          </strong>
        </p>
      </div>
    </div>
  );
}
