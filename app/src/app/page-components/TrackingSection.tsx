import React from 'react';
import styles from '../stylesheets/page-components/TrackingSection.module.scss';
import funcs from '../functions';

const { withStyles } = funcs;

export default function TrackingSection() {
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
                  <select className={withStyles(styles, ['form-control'])}>
                    <option value="">Wg</option>
                    <option value="grams">Gms</option>
                    <option value="kg">KG</option>
                  </select>
                </div>

                <div className={withStyles(styles, ['row-form-item'])}>
                  <button
                    type="button"
                    className={withStyles(styles, ['btn', 'btn-primary'])}
                    onClick={(e) => {
                      alert("Site backend is under development");
                    }}
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
