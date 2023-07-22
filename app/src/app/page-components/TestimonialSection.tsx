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
      "path": "/assets/images/testimonials/1.png",
      "name": "Pavan Baddi",
      "designation": "Software Engineer",
      "desc" : "Absolutely delighted with the service. My package was delivered quickly and without any issues. The tracking feature was helpful, and I knew exactly when to expect my delivery."
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
