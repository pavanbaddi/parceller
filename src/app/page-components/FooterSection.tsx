import React from 'react';
import styles from '../stylesheets/page-components/FooterSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
const { withStyles } = funcs;

export default function FooterSection() {
  const styler = (keys: string | Array<string>) => withStyles(styles, keys);

  const clients = [
    {
      src: '/assets/images/clients/1.png',
    },
    {
      src: '/assets/images/clients/1.png',
    },
    {
      src: '/assets/images/clients/1.png',
    },
    {
      src: '/assets/images/clients/1.png',
    },
  ];

  return (
    <div className={styler('footer-container container v-space-md')}>
      <div className={styler('inner')}>
        <div className={styler('items')}>
          <div className={styler('item')}>
            <h4>Address</h4>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>

          <div className={styler('item')}>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Get a Quote</a>
            </p>
            <p>
              <a href="#">Testimonials</a>
            </p>
          </div>

          <div className={styler('item')}>
            <p>
              <a href="#">Services</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Conditions</a>
            </p>
            <p>
              <a href="#">Support</a>
            </p>
          </div>

          <div className={styler('item')}>
            <h4>Contact</h4>
            <p>2972</p>
            <p>Hello@Mail.Com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
