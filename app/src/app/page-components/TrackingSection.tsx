import React,{ChangeEvent, useState} from 'react';
import styles from '../stylesheets/page-components/TrackingSection.module.scss';
import funcs from '../functions';
import _ from "lodash";

const { withStyles } = funcs;

export default function TrackingSection({ toggleBookingModal }: {
  toggleBookingModal: Function
}) {

  const [form, setForm] = useState({
    "pickupAddress": "",
    "destinationAddress": "",
    "weight": "0",
    "weightUnit": "wg",
  });

  const onPressCheck = (event: MouseEvent) => {
    let errors = [];
    if (_.isEmpty(form.pickupAddress)) {
      errors.push("Please enter origin shipment");
    }

    if (_.isEmpty(form.destinationAddress)) {
      errors.push("Please enter destination shipment");
    }

    if (_.isEmpty(form.weight)) {
      errors.push("Please enter weight");
    } else if (isNaN(Number(form.weight))) {
      errors.push("Weight must be a number");
    } else if (Number(form.weight) <= 0) {
      errors.push("Weight greater than zero");
    }

    if (_.isEmpty(form.weightUnit) || form.weightUnit === "wg") {
      errors.push("Please choose weight unit");
    } 

    if (errors.length > 0) {
      let temp = errors.join("\n");
      return alert(temp);
    }

    toggleBookingModal(form);
  }

  return (
    <div
      className={withStyles(styles, [
        'container',
        'tracking-section',
        'hidden-sm',
      ])}
    >
      <div className={withStyles(styles, ['inner'])}>
        <div
          className={withStyles(styles, [
            'tracking-and-pricing-calculator-form-container',
          ])}
        >
          <div className={withStyles(styles, ['tracking-wrapper'])}>
            <div className={withStyles(styles, ['inner'])}>
              <p>Track Shipment</p>
              <div className={withStyles(styles, ['row-form'])}>
                <div className={withStyles(styles, ['row-form-item'])}>
                  <div>
                    <input
                      type="text"
                      id="tracking_no"
                      className={withStyles(styles, ['form-control'])}
                    />
                  </div>
                  <div>
                    <p className={withStyles(styles, ['help-text'])}>
                      Tracking ID
                    </p>
                  </div>
                </div>

                <div
                  className={withStyles(styles, [
                    'row-form-item',
                    'btn-wrapper',
                  ])}
                >
                  <button
                    type="button"
                    className={withStyles(styles, ['btn', 'btn-primary'])}
                    onClick={(e) => {
                      alert("Site backend is under development");
                    }}
                  >
                    Tracking
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={withStyles(styles, ['shipment-rate-wrapper'])}>
            <div className={withStyles(styles, ['inner'])}>
              <p>Track Shipment</p>
              <div className={withStyles(styles, ['row-form'])}>
                <div className={withStyles(styles, ['row-form-item'])}>
                  <div>
                    <input
                      type="text"
                      className={withStyles(styles, [
                        'form-control',
                        'bg-light__grey',
                      ])}

                      onChange={(e) => setForm({ ...form, pickupAddress: e.target.value })}
                      value={form.pickupAddress}
                    />
                  </div>
                  <div>
                    <p>Origin Shipment</p>
                  </div>
                </div>

                <div className={withStyles(styles, ['row-form-item'])}>
                  <div>
                    <input
                      type="text"
                      className={withStyles(styles, [
                        'form-control',
                        'bg-light__grey',
                      ])}
                      onChange={(e) => setForm({ ...form, destinationAddress: e.target.value })}
                      value={form.destinationAddress}
                    />
                  </div>
                  <div>
                    <p>Destination Shipment</p>
                  </div>
                </div>

                <div
                  className={withStyles(styles, [
                    'row-form-item',
                    'weight-wrapper',
                  ])}
                >
                  <input
                    type="text"
                    className={withStyles(styles, [
                      'form-control',
                      'bg-light__grey',
                    ])}
                    onChange={(e) => setForm({ ...form, weight: e.target.value })}
                    value={form.weight}
                  />
                  <div>
                    <p>Weight</p>
                  </div>
                </div>

                <div
                  className={withStyles(styles, [
                    'row-form-item',
                    'weight-select-wrapper',
                  ])}
                >
                  <select onChange={(event: ChangeEvent) => {
                    setForm({...form, weightUnit: _.get(event, "target.value", "wg")})
                  }} className={withStyles(styles, ['form-control'])}>
                    <option value="wg" selected={form.weightUnit === "wg"} >Wg</option>
                    <option value="grams" selected={form.weightUnit === "grams"} >Gms</option>
                    <option value="kg" selected={form.weightUnit === "kg"} >KG</option>
                  </select>
                </div>

                <div className={withStyles(styles, ['row-form-item'])}>
                  <button
                    type="button"
                    className={withStyles(styles, ['btn', 'btn-primary'])}
                    onClick={onPressCheck}
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
