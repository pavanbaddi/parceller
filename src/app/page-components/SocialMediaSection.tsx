import React from 'react';
import styles from '../stylesheets/page-components/SocialMediaSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
const { withStyles } = funcs;

export default function SocialMediaSection() {
  return (
    <div
      className={withStyles(
        styles,
        'container v-space-xs social-media-container',
      )}
    >
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'logo-wrapper')}>
          <Image src="/assets/images/logo.png" width={155} height={52} alt="" />
        </div>

        <div>
          <div className={withStyles(styles, 'items')}>
            <div className={withStyles(styles, 'item')}>
              <Image
                src="/assets/icons/facebook.png"
                width={30}
                height={30}
                alt=""
              />
            </div>

            <div className={withStyles(styles, 'item')}>
              <Image
                src="/assets/icons/twitter.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
