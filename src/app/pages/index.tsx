import React from 'react';
import NavBar from '../components/NavBar';
import LandingSection from '../page-components/LandingSection';
import TrackingSection from '../page-components/TrackingSection';
import ClientsSection from '../page-components/ClientsSection';
import WhyChooseUsSection from '../page-components/WhyChooseUsSection';
import styles from '../stylesheets/index/Index.module.scss';
import funcs from '../functions';

const { withStyles } = funcs;

export default function index() {
  return (
    <div className={withStyles(styles, 'site-container')}>
      <NavBar />
      <LandingSection />
      <TrackingSection />
      <ClientsSection />
      <WhyChooseUsSection />
    </div>
  );
}
