import React, { MouseEvent, MouseEventHandler } from 'react';
import Image from 'next/image';
import styles from '../stylesheets/NavBar.module.scss';
import funcs from '../functions';

const { withStyles } = funcs;

export default function NavBar() {
  const handleVoid = (e: MouseEvent<HTMLAnchorElement>): void =>
    e.preventDefault();

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
              <a href="#">Home</a>
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <a href="#" onClick={handleVoid}>
                About
              </a>
            </div>

            <div
              className={withStyles(styles, 'menu-list__item')}
              id="credits-link"
            >
              <a href="#" onClick={handleVoid}>
                Credits
              </a>
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <a href="#" onClick={handleVoid}>
                Services
              </a>
            </div>
          </div>
        </div>

        <div className={withStyles(styles, 'inner-item')}>
          <div className={withStyles(styles, 'action-wrapper')}>
            <a
              href="javascript:void(0);"
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
