'use client';
import React, { useEffect, useState } from 'react';
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

const { withStyles } = funcs;

export default function Index() {
  const [loginModalState, setLoginModalState] = useState('closed');
  const [aboutDeveloperModalState, setAboutDeveloperModalState] = useState('closed');
  const [visibleModals, setVisibleModals] = useState([]);

  const isAnyModalVisible = () => [loginModalState, aboutDeveloperModalState].some(e => e === "open")
  
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
          toggleAboutDeveloper={() => {
            setAboutDeveloperModalState(aboutDeveloperModalState === 'open' ? 'closed' : 'open');
          }}
        />
        <LandingSection />
        <TrackingSection />
        <ClientsSection />
        <WhyChooseUsSection />
        <ContactSection />
        <TestimonialSection />
        <SocialMediaSection />
        <FooterSection />
      </div>
      <LoginModal
        isOpen={loginModalState === 'open'}
        onDismiss={() => setLoginModalState('closed')}
      />

      <AboutDeveloperModal
        isOpen={aboutDeveloperModalState === 'open'}
        onDismiss={() => setAboutDeveloperModalState('closed')}
      />
      <OverlayContainer />
    </>
  );
}
