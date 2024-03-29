'use client';

import React, { MouseEvent, MouseEventHandler, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../stylesheets/NavBar.module.scss';
import overlayStyles from '../stylesheets/page-components/OverlayContainer.module.scss';
import funcs from '../functions';
import Link from './Link';

const { withStyles, isMobileView, didClickedInside } = funcs;

export default function NavBar({
  toggleLogin,
  toggleAboutDeveloper,
}: {
  toggleLogin: Function;
  toggleAboutDeveloper: Function;
}) {
  const mobileMenuWrapper = useRef<HTMLElement | null>(null);
  const overlayContainer = useRef<HTMLElement | null>(null);
  const menuContainer = useRef<HTMLElement | null>(null);
  const activeStyleName = styles['active'];

  useEffect((): void => {
    mobileMenuWrapper.current = document.getElementById('mobile-menu-wrapper');
    overlayContainer.current = document.querySelector('#overlay-container');
    menuContainer.current = document.querySelector('#menu-wrapper');
    attachEvents();
  }, []);

  const attachEvents = (): void => {
    if (mobileMenuWrapper?.current) {
      mobileMenuWrapper.current.addEventListener(
        'click',
        function (event: Event) {
          if (isActive()) {
            hide();
          } else {
            show();
          }
        },
      );
    }

    if (menuContainer.current) {
      menuContainer.current.addEventListener("click", function (event) {
        if (isMobileView()) {
          hide();
        }
      })
    }

    let body = document.body;
    if (body) {
      body.addEventListener("click", function (event) {
        if (isMobileView()) {
          const has = didClickedInside(event, menuContainer.current as HTMLElement);
          if (!has && isSettled()) {
            hide();
          }
        }
      });
    }

    let mobileLoginIcon = document.querySelector("#login-btn-mobile");
    if (mobileLoginIcon) {
      mobileLoginIcon.addEventListener("click", (event: Event) => {
        toggleLogin();
      });
    }
  };



  const isActive = (): boolean => {
    return mobileMenuWrapper.current &&
      mobileMenuWrapper.current.classList.contains('active')
      ? true
      : false;
  };

  const hide = (): void => {
    if (mobileMenuWrapper.current) {
      mobileMenuWrapper.current.classList.remove(activeStyleName);
    }
    if (overlayContainer.current) {
      overlayContainer.current.classList.remove(overlayStyles.active);
    }
    if (menuContainer.current) {
      menuContainer.current.classList.remove(activeStyleName);
    }
  };

  const show = (): void => {
    if (mobileMenuWrapper.current) {
      mobileMenuWrapper.current.classList.add(activeStyleName);
    }
    if (overlayContainer.current) {
      overlayContainer.current.classList.add(overlayStyles.active);
    }

    if (menuContainer.current) {
      menuContainer.current.classList.add(activeStyleName);
      menuContainer.current.setAttribute('data-init', 'opened');
      setTimeout(() => {
        if (menuContainer.current) {
          menuContainer.current.setAttribute('data-init', 'settled');
        }
      }, 500);
    }
  };

  const isSettled = () => {
    return menuContainer.current && menuContainer.current.getAttribute("data-init") === "settled";
  }

  return (
    <div className={withStyles(styles, ['container', 'nav-container'])}>
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'inner-item')}>
          <div className={withStyles(styles, 'logo-wrapper')}>
            <Image fill src="/assets/images/logo.png" alt="Parcellar Logo" />
          </div>
        </div>

        <div
          id="menu-wrapper"
          className={withStyles(styles, ['inner-item', 'menu-wrapper'])}
        >
          <div className={withStyles(styles, 'menus-list')}>
            <div className={withStyles(styles, 'menu-list__item')}>
              <Link text="Home" />
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <Link
                text="About Site & Developer"
                onClick={toggleAboutDeveloper}
              /> 
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <Link text="Why Choose Us" url="#why_choose_us" />
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <Link text="Testimonials" url="#testimonials" />
            </div>
          </div>
        </div>

        <div className={withStyles(styles, 'inner-item')}>
          <div className={withStyles(styles, 'action-wrapper')}>
            <a
              href="#contact-section"
              className={withStyles(styles, [
                'btn',
                'btn-primary',
                'hidden-sm',
              ])}
              id="login-btn"
            >
              <span></span>
              <span>Contact Us</span>
            </a>

            <div className={withStyles(styles, 'hidden-md-lg')}>
              <div className={withStyles(styles, 'flex-inner')}>
                <div id="login-btn-mobile" >
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
