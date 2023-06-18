"use client";

import React from 'react';
import styles from '../stylesheets/page-components/TestimonialSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

const { withStyles } = funcs;

export default function TestimonialSection() {
  const slides = [
    {
      "path": "/assets/images/testimonials/1.jpg",
      "name": "Pavan Baddi",
      "designation": "Software Engineer",
      "desc" : "Employees of the company showed a high level of professionalism in the choice of vehicles and the preparation of financial documentation. I was also pleased with the free approach in taking into account the various wishes of the client."
    }, 
  ];
  const [sliderRef, instanceRef] = useKeenSlider()

  return (
    <div
      id="testimonials"
      className={withStyles(
        styles,
        'container testimonial-container v-space-md',
      )}
    >
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'header-wrapper')}>
          <h2>Testimonials</h2>
        </div>
        <div ref={sliderRef} className={`${withStyles(styles, 'items')} keen-slider`}>
          {
            slides.map((item, index) => {
              return (
                <div key={index} className={`${withStyles(styles, 'item')} keen-slider__slide`}>
                    <div className={withStyles(styles, 'item__img-wrapper')}>
                      <Image
                        src={item.path}
                        width={150}
                        height={150}
                        alt=""
                      />
                    </div>

                    <div className={withStyles(styles, 'item__text-wrapper')}>
                      <div className={withStyles(styles, 'text-group')}>
                        <div>
                          <p>
                            {' '}
                            <span>
                              <Image
                                src="/assets/icons/quote.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </span>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className={withStyles(styles, 'name-group')}>
                        <h4>{item.name}</h4>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
