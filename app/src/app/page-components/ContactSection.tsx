import React from 'react';
import styles from '../stylesheets/page-components/ContactSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
const { withStyles } = funcs;

export default function ContactSection() {
  return (
    <div id='contact-section' className={withStyles(styles, ['contact-container'])}>
      <div className={withStyles(styles, ['inner'])}>
        <div className={withStyles(styles, ['inner-item', 'map-container'])}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1684989581215!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={withStyles(styles, ['inner-item', 'form-container'])}>
          <div className={withStyles(styles, ['form-containner__wrapper'])}>
            <div>
              <p className={withStyles(styles, ['text-1'])}>CONTACT US</p>
              <h1 className={withStyles(styles, ['text-2'])}>
                Have Questions?
              </h1>
              <h1 className={withStyles(styles, ['text-3'])}>Get in touch!</h1>
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Site backend is under development');
                }}
                method="post"
              >
                <div
                  className={withStyles(styles, [
                    'form-wrapper',
                    'form-wrapper-1',
                  ])}
                >
                  <div className={withStyles(styles, ['form-group'])}>
                    <input
                      type="text"
                      className={withStyles(styles, ['form-control', 'line'])}
                      placeholder="First Name *"
                      required
                    />
                    <span className={withStyles(styles, ['line'])}></span>
                  </div>

                  <div>
                    <input
                      type="text"
                      className={withStyles(styles, ['form-control', 'line'])}
                      placeholder="Last Name"
                    />
                    <span className={withStyles(styles, ['line'])}></span>
                  </div>
                </div>

                <div
                  className={withStyles(styles, [
                    'form-wrapper',
                    'form-wrapper-1',
                  ])}
                >
                  <div>
                    <div className={withStyles(styles, ['form-group'])}>
                      <input
                        type="text"
                        className={withStyles(styles, ['form-control', 'line'])}
                        placeholder="Email *"
                        required
                      />
                      <span className={withStyles(styles, ['line'])}></span>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      className={withStyles(styles, ['form-control', 'line'])}
                      placeholder="Phone *"
                      required
                    />
                    <span className={withStyles(styles, ['line'])}></span>
                  </div>
                </div>

                <div
                  className={withStyles(styles, [
                    'form-wrapper',
                    'form-wrapper-2',
                  ])}
                >
                  <div>
                    <input
                      type="text"
                      className={withStyles(styles, ['form-control', 'line'])}
                      placeholder="Message *"
                      required
                    />
                    <span className={withStyles(styles, ['line'])}></span>
                  </div>
                </div>

                <div className={withStyles(styles, ['form-wrapper-4'])}>
                  <span
                    className={withStyles(styles, [
                      'btn-container',
                      'with-icon',
                    ])}
                  >
                    <i
                      className={withStyles(styles, [
                        'fa-sharp',
                        'fa-solid',
                        'fa-paper-plane',
                      ])}
                    ></i>
                    <input type="submit" value="Get in touch" />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
