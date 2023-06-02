import React from 'react';
import styles from '../stylesheets/page-components/ClientsSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
const { withStyles } = funcs;

export default function ClientsSection() {
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
    <div
      className={withStyles(styles, [
        'container',
        'clients-list-container',
        'v-space-md',
      ])}
    >
      <div className={withStyles(styles, ['inner'])}>
        <div className={withStyles(styles, ['header-wrapper'])}>
          <h2>Over 17,000 Clients All Over The World</h2>
        </div>
        <div className={withStyles(styles, ['inner-list'])}>
          {clients.map((item: Object, index: number) => {
            return (
              <div key={index.toString()}>
                <Image
                  src="/assets/images/clients/1.png"
                  width={128}
                  height={46}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
