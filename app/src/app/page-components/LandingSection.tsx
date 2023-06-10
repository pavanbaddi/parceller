import React from 'react';
import styles from '../stylesheets/page-components/LandingSection.module.scss';
import funcs from '../functions';

const { withStyles } = funcs;

export default function LandingSection() {
  return (
    <div
      className={withStyles(styles, ['container', 'landing-page-container'])}
    >
      <div className={withStyles(styles, 'bg-image')}></div>
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'wrapper')}>
          <div>
            <p>International Logistics</p>
            <h1>Full Suppor</h1>
            <p>
              We know everything about the safest and the fastest shipping. We
              help you build your successful business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
