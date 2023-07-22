"use client";
import React from 'react';
import styles from '../stylesheets/page-components/ClientsSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

const { withStyles } = funcs;

export default function ClientsSection() {
  const clients = [
    {
      src: '/assets/images/clients/2.png',
    },
    {
      src: '/assets/images/clients/3.png',
    },
    {
      src: '/assets/images/clients/4.png',
    },
    {
      src: '/assets/images/clients/5.png',
    },
    {
      src: '/assets/images/clients/6.png',
    },
    {
      src: '/assets/images/clients/7.png',
    },
  ]; 

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 4 },
  })

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
          <h2>Over 93 Clients All Over The World</h2>
        </div>
        <div ref={sliderRef} className={`${withStyles(styles, ['inner-list'])} keen-slider`}>
          {clients.map((item: Object, index: number) => {
            return (
              <div key={index.toString()} className='keen-slider__slide'  >
                <Image
                  src={item.src}
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
