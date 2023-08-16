import React, { useState, ChangeEvent } from 'react';
import styles from '../stylesheets/page-components/ContactSection.module.scss';
import funcs from '../functions';
import Image from 'next/image';
import { doPost } from '../lib/Datasource';
import _ from 'lodash';
import { FormEventHandler } from 'react';

const { withStyles } = funcs;

interface ContactFormType {
  firstName: string,
  lastName: string,
  email: string,
  phoneNo: string,
  message: string,
}

export default function ContactSection() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [form, setForm] = useState<ContactFormType>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    message: '',
  });

  function hasWords(str:string) {
    return /[a-zA-Z]/.test(str);
  }

  function hasSpecialCharacters(str:string) {
    return /[!@#$%^&*()_\=\[\]{};':"\\|,.<>\/?]+/.test(str);
  }

  function isValidEmail(str: string) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(str);
  }

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (loading) {
      return
    }

    let errors = [];
    if (_.isEmpty(form.firstName)) {
      errors.push('Please enter contact number');
    }
    
    if (
      hasWords(form.phoneNo) ||
      hasSpecialCharacters(form.phoneNo)
    ) {
      errors.push('Please enter valid contact number');
    }

    if (_.isEmpty(form.email)) {
      errors.push('Please enter email');
    } else if (!isValidEmail(form.email)) {
      errors.push('Please enter valid email');
    }

    if (_.isEmpty(form.message)) {
      errors.push('Please enter message');
    } 

    console.log('form', form)
    if (errors.length) {
      return alert(errors.join("\n"));
    }

    const query = JSON.stringify({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone_no: form.phoneNo,
      message: form.message,
    });

    setLoading(true)
    const endpoint = "/contact/"
    doPost(endpoint, query).then((response: any) => {
      setLoading(false)
      if (_.has(response, "error")) {
        let errors = _.flatMap(_.values(response.error))
        alert(_.join(errors, "\n"))
      } else {
        alert(response.msg)
        resetForm()
      }
    }).catch((error:any) => {
      setLoading(false)
      alert("Something went wrong.")
      console.log("Error in onSubmit", error)
    })
  }

  const resetForm = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      message: '',
    })
  }

  return (
    <div
      id="contact-section"
      className={withStyles(styles, ['contact-container'])}
    >
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
                onSubmit={onSubmit}
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
                      value={form.firstName}
                      onChange={(e: ChangeEvent) => {
                        setForm({
                          ...form,
                          firstName: _.get(e, 'target.value', ""),
                        });
                      }}
                      required
                    />
                    <span className={withStyles(styles, ['line'])}></span>
                  </div>

                  <div>
                    <input
                      type="text"
                      className={withStyles(styles, ['form-control', 'line'])}
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={(e: ChangeEvent) => {
                        setForm({
                          ...form,
                          lastName: _.get(e, 'target.value', ""),
                        });
                      }}
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
                        type="email"
                        className={withStyles(styles, ['form-control', 'line'])}
                        placeholder="Email *"
                        value={form.email}
                        onChange={(e: ChangeEvent) => {
                          setForm({ ...form, email: _.get(e, 'target.value', "") });
                        }}
                        required
                      />
                      <span className={withStyles(styles, ['line'])}></span>
                    </div>
                  </div>

                  <div>
                    <input
                      type="number"
                      className={withStyles(styles, ['form-control', 'line'])}
                      placeholder="Phone *"
                      value={form.phoneNo}
                      onChange={(e: ChangeEvent) => {
                        setForm({ ...form, phoneNo: _.get(e, 'target.value', "") });
                      }}
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
                      value={form.message}
                      onChange={(e: ChangeEvent) => {
                        setForm({ ...form, message: _.get(e, 'target.value', "") });
                      }}
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
                    {loading ? (
                      <Image
                        src="/assets/icons/loading.gif"
                        alt="Loading"
                        width={15}
                        height={15}
                      />
                    ) : (
                      <>
                        <i
                          className={withStyles(styles, [
                            'fa-sharp',
                            'fa-solid',
                            'fa-paper-plane',
                          ])}
                        ></i>
                        <input type="submit" value="Get in touch" />
                      </>
                    )}
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
