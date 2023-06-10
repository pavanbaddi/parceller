"use client";

import React, { MouseEvent, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../stylesheets/NavBar.module.scss';
import overlayStyles from '../stylesheets/page-components/OverlayContainer.module.scss';
import funcs from '../functions';
import Link from './Link';

const { withStyles } = funcs;

export default function NavBar() {
  const mobileMenuWrapper = useRef(null);
  const overlayContainer = useRef(null);
  const menuContainer = useRef(null);
  const activeStyleName = styles["active"];

  useEffect((): void => {
    mobileMenuWrapper.current = document.getElementById("mobile-menu-wrapper");
    overlayContainer.current = document.querySelector("#overlay-container");
    menuContainer.current = document.querySelector("#menu-wrapper");
    attachEvents();
  }, [])
  
  const attachEvents = (): void => {
    mobileMenuWrapper.current.addEventListener("click", function (event) {
        if (isActive()) {
            hide();
        } else {
            show();
        }
    })
  }

  const isActive = (): boolean => {
    return mobileMenuWrapper.current && mobileMenuWrapper.current.classList.contains("active")
  }

  const hide = (): void => {
    mobileMenuWrapper.current.classList.remove(activeStyleName)
    overlayContainer.current.remove(overlayStyles.active)
    menuContainer.current.classList.remove(activeStyleName);
  }

  const show = (): void => {
    mobileMenuWrapper.current.classList.add(activeStyleName);
    overlayContainer.current.classList.add(overlayStyles.active);
    menuContainer.current.classList.add(activeStyleName);
    menuContainer.current.setAttribute("data-init", "opened");
    setTimeout(() => {
        menuContainer.current.setAttribute("data-init", "settled");
    }, 500)
  }

  return (
    <div className={withStyles(styles, ['container', 'nav-container'])}>
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'inner-item')}>
          <div className={withStyles(styles, 'logo-wrapper')}>
            <Image
              fill
              src="/assets/images/logo.png"
              alt="Parcellar Logo"
            />
          </div>
        </div>

        <div id="menu-wrapper" className={withStyles(styles, ['inner-item', 'menu-wrapper'])}>
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
