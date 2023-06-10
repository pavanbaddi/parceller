import React from 'react';
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
import styles from '../stylesheets/index/Index.module.scss';
import funcs from '../functions';

const { withStyles } = funcs;

export default function index() {
  return (
    <div id='site-container' className={withStyles(styles, 'site-container')}>
      <NavBar />
      <LandingSection />
      <TrackingSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <TestimonialSection />
      <SocialMediaSection />
      <FooterSection />
      <OverlayContainer />
    </div>
  );
}
