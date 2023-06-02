import React from 'react';
import styles from '../stylesheets/page-components/WhyChooseUsSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';

const { withStyles } = funcs;

export default function WhyChooseUsSection() {
  return (
    <div
      className={withStyles(styles, ['container', 'why-choose-us-container'])}
    >
      <div className={withStyles(styles, ['inner'])}>
        <div className={withStyles(styles, ['header-wrapper'])}>
          <h2>Why choose us for your service</h2>
          <p>
            Cursus congue tortor turpis faucibus ollicitudin diam massa accumsan
            egestas habitant ut placerat nascetur sed
          </p>
        </div>
      </div>

      <div className={withStyles(styles, ['items'])}>
        <div className={withStyles(styles, ['item'])}>
          <div className={withStyles(styles, ['image-wrapper'])}>
            <Image
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009bdff26411a67191d3_why%20choose-1.svg"
              width={80}
              height={84}
              alt=""
            />
          </div>

          <div className={withStyles(styles, ['animated-text-container'])}>
            <h4>Text</h4>
            <p>sub text</p>
          </div>
        </div>
      </div>
    </div>
  );
}
