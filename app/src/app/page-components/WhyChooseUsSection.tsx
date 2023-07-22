import React from 'react';
import styles from '../stylesheets/page-components/WhyChooseUsSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';

const { withStyles } = funcs;

export default function WhyChooseUsSection() {
  const list = [
    {
      path: '/assets/images/drone.png',
      text: 'Fast Delivery',
      subText: 'Helps you move items faster',
    },
    {
      path: '/assets/images/warehouse.png',
      text: 'Warehouse',
      subText: 'Safety of your belonging is on our top priority',
    },
    {
      path: '/assets/images/pricing.png',
      text: 'Cost Effective',
      subText: 'Best pricing comparitive to others',
    },
    {
      path: '/assets/images/customer-support.png',
      text: 'Customer Support',
      subText: 'Reach us with a press of a button',
    },
  ];

  return (
    <div
      id="why_choose_us"
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
        {list.map((item, index) => {
          return (
            <div key={index} className={withStyles(styles, ['item'])}>
              <div className={withStyles(styles, ['image-wrapper'])}>
                <Image src={item.path} width={80} height={84} alt="" />
              </div>

              <div className={withStyles(styles, ['animated-text-container'])}>
                <h4>{item.text}</h4>
                <p>{item.subText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
