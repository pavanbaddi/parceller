import React, { MouseEvent } from 'react';
import Image from 'next/image';
import styles from '../stylesheets/NavBar.module.scss';
import funcs from '../functions';
import Link from './Link';

const { withStyles } = funcs;

export default function NavBar() {
  return (
    <div className={withStyles(styles, ['container', 'nav-container'])}>
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'inner-item')}>
          <div className={withStyles(styles, 'logo-wrapper')}>
            <Image
              src="/assets/images/logo.png"
              width={155}
              height={52}
              alt=""
            />
          </div>
        </div>

        <div className={withStyles(styles, ['inner-item', 'menu-wrapper'])}>
          <div className={withStyles(styles, 'menus-list')}>
            <div className={withStyles(styles, 'menu-list__item')}>
              <Link text="Home" />
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <Link text="About" />
            </div>

            <div
              className={withStyles(styles, 'menu-list__item')}
              id="credits-link"
            >
              <Link text="Credits" />
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <Link text="Services" />
            </div>
          </div>
        </div>

        <div className={withStyles(styles, 'inner-item')}>
          <div className={withStyles(styles, 'action-wrapper')}>
            <a
              href="#"
              className={withStyles(styles, [
                'btn',
                'btn-primary',
                'hidden-sm',
              ])}
              id="login-btn"
            >
              <span></span>
              <span>Login</span>
            </a>

            <div className={withStyles(styles, 'hidden-md-lg')}>
              <div className={withStyles(styles, 'flex-inner')}>
                <div id="login-btn-mobile">
                  <Image
                    src="/assets/icons/login.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>

                <div id="mobile-menu-wrapper">
                  <Image
                    src="/assets/icons/menu.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
