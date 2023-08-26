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
import {TrackingDetailsType, TrackingFormType} from "../lib/Types";
import TrackingDetailsModal from '../page-components/TrackingDetailsModal';

export default function Index() {
  const [loginModalState, setLoginModalState] = useState('closed');
  const [aboutDeveloperModalState, setAboutDeveloperModalState] = useState('closed');
  const [bookingModalState, setBookingModalState] = useState('closed');
  const [trackingDetailsModalState, setTrackingDetailsModalState] = useState('closed');
  const [trackingForm, setTrackingForm] = useState<TrackingFormType>({
    "pickupAddress": "",
    "destinationAddress": "",
    "weight": "",
    "weightUnit": "",
  }); 

  const [trackingDetails, setTrackingDetails] = useState<TrackingDetailsType>({
    "originShipment": "",
    "destinationShipment": "",
    "weight": "",
    "weightUnit": "",
  }); 

  const isAnyModalVisible = () => [loginModalState, aboutDeveloperModalState].some(e => e === "open")

  const toggleAboutDeveloper: MouseEventHandler<HTMLAnchorElement> = (): void  => {
    setAboutDeveloperModalState(aboutDeveloperModalState === 'open' ? 'closed' : 'open')
  }
  
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
        <TrackingSection
          toggleBookingModal={(form: TrackingFormType) => {
            setBookingModalState(bookingModalState === 'open' ? 'closed' : 'open');
            setTrackingForm(form)
          }}
          setTrackingDetailsModalState={setTrackingDetailsModalState}
          setTrackingDetails={setTrackingDetails}
        />
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
        setTrackingDetails={setTrackingDetails}
        setTrackingDetailsModalState={setTrackingDetailsModalState}
        trackingForm={trackingForm}
        setTrackingForm={setTrackingForm}
        isOpen={bookingModalState === 'open'}
        onDismiss={() => setBookingModalState('closed')}
      />

      <TrackingDetailsModal
        trackingForm={trackingDetails}
        isOpen={trackingDetailsModalState === 'open'}
        onDismiss={() => setTrackingDetailsModalState('closed')}
      />

      <OverlayContainer />
    </>
  );
}
