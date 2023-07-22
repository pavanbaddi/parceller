import React, { ChangeEvent, useState } from 'react';
import Modal from '../components/Modal';
import styles from '../stylesheets/page-components/LoginModal.module.scss';
import helperStyles from '../stylesheets/components/Helper.module.scss';
import buttonsStyles from '../stylesheets/components/Buttons.module.scss';
import inputStyles from '../stylesheets/components/Input.module.scss';
import func from '../functions';

const { withStyles, usingStyles } = func;

const getStyles = usingStyles(styles);
const getHelperStyles = usingStyles(helperStyles);
const getButtonsStyles = usingStyles(buttonsStyles);
const getInputStyles = usingStyles(inputStyles);

export default function LoginModal({
  isOpen,
  onDismiss,
}: {
  isOpen: boolean;
  onDismiss: React.MouseEventHandler<HTMLButtonElement>;
    }): React.ReactElement {
    
    const [form, setForm] = useState({
        "email": "",
        "password": "",
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) : void => {
        const element = event.target;
        const name = element.name;
        const value = element.value;
        setForm({...form, [name] : value})
    }

  return (
    <Modal
      isOpen={isOpen}
      onDismiss={onDismiss}
      id={getStyles('login-modal')}
      heading="Login"
      modalBodyClasses={[getStyles('modal-body')]}
      body={
        <>
          <div className={getStyles('form-container')}>
            <form action="" method="post">
              <div className={getHelperStyles('mb-15')}>
                <label>
                  Email{' '}
                  <span className={getHelperStyles('text-danger')}>*</span>{' '}
                </label>
                <div className={getHelperStyles('mt-5')}>
                  <input
                    type="text"
                    name="email"
                    className={[
                      getInputStyles('form-control'),
                      getHelperStyles('bg-light__grey'),
                                  ].join(' ')}
                    onChange={onChange}
                    value={form.email}
                    required
                  />
                </div>
              </div>

              <div className={getHelperStyles('mb-15')}>
                <label>
                  Password{' '}
                  <span className={getHelperStyles('text-danger')}>*</span>
                </label>
                <div className={getHelperStyles('mt-5')}>
                  <input
                    type="password"
                    name="password"
                    className={[
                      getInputStyles('form-control'),
                      getHelperStyles('bg-light__grey'),
                    ].join(' ')}
                    onChange={onChange}
                    value={form.password}
                    required
                  />
                </div>
              </div>

              <div className={getHelperStyles('mb-15')}>
                <div>
                  <button
                    type="button"
                    className={getButtonsStyles('btn btn-primary btn-block')}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className={getStyles('social-media-container')}>
            <div className={getStyles('items')}>
              <div className={getStyles('item')}>
                <button
                  type="button"
                  className={getButtonsStyles('btn btn-secondary btn-block')}
                >
                  <span>Login via</span>
                  <span>
                    <img src="/assets/icons/google.png" alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
