import React from 'react';
import styles from '../stylesheets/page-components/TestimonialSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
const { withStyles } = funcs;

export default function TestimonialSection() {
  return (
    <div
      className={withStyles(
        styles,
        'container testimonial-container v-space-md',
      )}
    >
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'header-wrapper')}>
          <h2>Testimonials</h2>
        </div>
        <div className={withStyles(styles, 'items')}>
          <div className={withStyles(styles, 'item')}>
            <div className={withStyles(styles, 'item__img-wrapper')}>
              <Image
                src="/assets/images/testimonials/1.jpg"
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
                    Employees of the company showed a high level of
                    professionalism in the choice of vehicles and the
                    preparation of financial documentation. I was also pleased
                    with the free approach in taking into account the various
                    wishes of the client.
                  </p>
                </div>
              </div>
              <div className={withStyles(styles, 'name-group')}>
                <h4>Pavan Baddi</h4>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
