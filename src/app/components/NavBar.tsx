import React from 'react';
import styles from '../stylesheets/NavBar.module.scss';
const withStyles = (stylesheet: Object, keys: Array | string): string => {
  let text = '';

  if (Array.isArray(keys)) {
    for (let index in keys) {
      const key = keys[index];
      const styleName = stylesheet[key];

      if (styleName) {
        text = `${text} ${styleName}`;
      }
    }
  } else {
    const styleName = stylesheet[keys];
    if (styleName) {
      text = `${styleName}`;
    }
  }

  return text;
};

export default function NavBar() {
  return (
    <div className={withStyles(styles, ['container', 'nav-container'])}>
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'inner-item')}>
          <div className={withStyles(styles, 'logo-wrapper')}>
            <img src="./assets/images/logo.png" alt="" />
          </div>
        </div>

        <div className={withStyles(styles, ['inner-item', 'menu-wrapper'])}>
          <div className={withStyles(styles, 'menus-list')}>
            <div className={withStyles(styles, 'menu-list__item')}>
              <a href="#">Home</a>
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <a href="#">About</a>
            </div>

            <div
              className={withStyles(styles, 'menu-list__item')}
              id="credits-link"
            >
              <a href="javascript:void(0);">Credits</a>
            </div>

            <div className={withStyles(styles, 'menu-list__item')}>
              <a href="#">Services</a>
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
                  <img src="./assets/icons/login.png" alt="" />
                </div>

                <div id="mobile-menu-wrapper">
                  <img src="./assets/icons/menu.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
