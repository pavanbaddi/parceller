"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from '../stylesheets/page-components/LandingSection.module.scss';
import funcs from '../functions';
import useTypingAnimation from '../lib/useTypingAnimation';

const { withStyles } = funcs;

export default function LandingSection() {
  const typingAnimationHook = useTypingAnimation();

  useEffect(() => {
    typingAnimationHook.setTexts(["Lightning-Fast Deliveries", "Transparent Tracking", "Customer-Centric Support"]);
    const element = document.getElementById("text-animation");
    if (element !== null) {
      typingAnimationHook.setElement(element);
    }
    typingAnimationHook.setSpeed(200);
    typingAnimationHook.setPauseSpeed(500);
    typingAnimationHook.setEraseSpeed(200);
    typingAnimationHook.start();
  }, []);

  return (
    <div className={withStyles(styles, ['container', 'landing-page-container'])}>
      <div className={withStyles(styles, 'bg-image')}></div>
      <div className={withStyles(styles, 'inner')}>
        <div className={withStyles(styles, 'wrapper')}>
          <div>
            <p>International Logistics</p>
            <h1 id="text-animation" ></h1>
            <p>Swift, Secure, and Reliable. Our Courier Services Exceed Expectations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
