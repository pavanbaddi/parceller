'use client';
import React, { MouseEventHandler, useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import LandingSection from '../page-components/LandingSection';
import TrackingSection from '../page-components/TrackingSection';
import ClientsSection from '../page-components/ClientsSection';
import WhyChooseUsSection from '../page-components/WhyChooseUsSection';
import ContactSection from '../page-components/ContactSection';
import TestimonialSection from '../page-components/TestimonialSection';
import SocialMediaSection from '../page-components/SocialMediaSection';
import FooterSection from '../page-components/FooterSection';
import OverlayContainer from '../page-components/OverlayContainer';
import LoginModal from '../page-components/LoginModal';
import AboutDeveloperModal from '../page-components/AboutDeveloperModal';
import styles from '../stylesheets/index/Index.module.scss';
import modelStyles from '../stylesheets/components/Modal.module.scss';
import funcs from '../functions';
import BookingModal from '../page-components/BookingModal';
import {TrackingFormType} from "../lib/Types";

const { isMobileView } = funcs;

export default function Index() {
  const [loginModalState, setLoginModalState] = useState('closed');
  const [aboutDeveloperModalState, setAboutDeveloperModalState] = useState('closed');
  const [bookingModalState, setBookingModalState] = useState('closed');
  const [visibleModals, setVisibleModals] = useState([]); 
  const [trackingForm, setTrackingForm] = useState<TrackingFormType>({
    "pickupAddress": "",
    "destinationAddress": "",
    "weight": "",
    "weightUnit": "",
  }); 

  const isAnyModalVisible = () => [loginModalState, aboutDeveloperModalState].some(e => e === "open")

  const toggleAboutDeveloper: MouseEventHandler<HTMLAnchorElement> = (): void  => {
    setAboutDeveloperModalState(aboutDeveloperModalState === 'open' ? 'closed' : 'open')
  }

  useEffect(() => { 
    
  }, [])
  
  return (
    <>
      <div
        id="site-container"
        className={[
          styles['site-container'],
          modelStyles['site-container'],
          isAnyModalVisible() ? modelStyles['modal-active'] : '',
        ].join(' ')}
      >
        <NavBar
          toggleLogin={() => {
            setLoginModalState(loginModalState === 'open' ? 'closed' : 'open');
          }}
          toggleAboutDeveloper={toggleAboutDeveloper}
          />
        <LandingSection />
        <TrackingSection toggleBookingModal={(form:Object) => {
          setBookingModalState(bookingModalState === 'open' ? 'closed' : 'open');
          setTrackingForm(form)
        }} />
        <ClientsSection />
        <WhyChooseUsSection />
        <ContactSection />
        <TestimonialSection />
        <SocialMediaSection />
        <FooterSection toggleAboutDeveloper={toggleAboutDeveloper} />
      </div>
      <LoginModal
        isOpen={loginModalState === 'open'}
        onDismiss={() => setLoginModalState('closed')}
      />

      <AboutDeveloperModal
        isOpen={aboutDeveloperModalState === 'open'}
        onDismiss={() => setAboutDeveloperModalState('closed')}
      />

      <BookingModal
        trackingForm={trackingForm}
        isOpen={bookingModalState === 'open'}
        onDismiss={() => setBookingModalState('closed')}
      />
      <OverlayContainer />
    </>
  );
}
