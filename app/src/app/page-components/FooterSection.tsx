import React, { MouseEventHandler } from 'react';
import styles from '../stylesheets/page-components/FooterSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
const { withStyles } = funcs;

export default function FooterSection({ toggleAboutDeveloper } : { toggleAboutDeveloper: MouseEventHandler<HTMLAnchorElement> }) {
  const styler = (keys: string | Array<string>) => withStyles(styles, keys);

  return (
    <div className={styler('footer-container container v-space-md')}>
      <div className={styler('inner')}>
        <div className={styler('items')}>
          <div className={styler('item')}>
            <h4>Address</h4>
            <p>Head Office, Rajajinagar H.O ; Contact Address: Postmaster, Bangalore City S.O, Bengaluru, Karnataka, India (IN)</p>
          </div>

          <div className={styler('item')}>
            
          </div>

          <div className={styler('item')}>
            <p>
              <a href="#!" onClick={toggleAboutDeveloper}>About Site & Developer</a>
            </p>
            <p>
              <a href="#">Why Choose Us</a>
            </p>
            <p>
              <a href="#">Testimonials</a>
            </p>
          </div>

          <div className={styler('item')}>
            <h4>Contact</h4>
            <p>+91 88990 88990</p>
            <p>support@parceller.Com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
