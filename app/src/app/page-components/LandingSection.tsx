"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from '../stylesheets/page-components/LandingSection.module.scss';
import funcs from '../functions';
import useTypingAnimation from '../lib/useTypingAnimation';

const { withStyles } = funcs;

export default function LandingSection() {
  const typingAnimationHook = useTypingAnimation();

  useEffect(() => {
    typingAnimationHook.setTexts(["Full Support", "Sample Text"]);
    const element = document.getElementById("text-animation");
    if (element !== null) {
      typingAnimationHook.setElement(element);
    }
    typingAnimationHook.setSpeed(100);
    typingAnimationHook.setPauseSpeed(300);
    typingAnimationHook.setEraseSpeed(50);
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
            <p>We know everything about the safest and the fastest shipping. We help you build your successful business.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
