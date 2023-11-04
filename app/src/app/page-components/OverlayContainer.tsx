import React from 'react';
import styles from '../stylesheets/page-components/OverlayContainer.module.scss';
import funcs from '../functions';
const { withStyles } = funcs;

export default function OverlayContainer() {

  return (
      <div
        id="overlay-container"
        className={withStyles(styles, [
            'overlay-container',
        ])}

      onClick={(e) => {
        let target = e.target;
      }}
    >
    </div>
  );
}
