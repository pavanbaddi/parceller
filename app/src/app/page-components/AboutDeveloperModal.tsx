import React from 'react'
import Modal from '../components/Modal';
import styles from "../stylesheets/page-components/AboutDeveloperModal.module.scss";
import func from "../functions"
import Image from  "next/image"

const { usingStyles } = func;

const getStyles = usingStyles(styles);

function AboutDeveloperModal({isOpen, onDismiss} : {isOpen: boolean, onDismiss: Function}) : React.ReactElement {
  return <Modal isOpen={isOpen} onDismiss={onDismiss} id="about-developer" heading='About Site & Developer' body={
    <div>
      <div>
        <h4>About Site</h4>
        <p>The <strong>Parcellar</strong> is a landing page theme for transportation and logistic sites. This site is developed using Next JS (Version 13.3.1).</p>
        <br />
        <hr />
        <br />
        <h4>About Developer</h4>
        <p>Hi, I&apos;m <strong>Pavan</strong>,</p>
        <br />
        <p>I&apos;m a Software Engineer and from time to time I keep on learning and developing portfolio projects for sake of learning and broadening my knowledge.</p>
        <br />
        <p>In this case, it is to learn about Typescript in Next JS (using its Advance features) and also deploy this app using Docker on Amazon Ec2.</p>
        <br />
        <p>You are free to use this theme on your other project. I have provided github link</p>
        <p>
          <a href="https://github.com/pavanbaddi/parceller" target="_blank" rel="noopener noreferrer" >Github</a> &nbsp;
          <a href="https://pavanbaddi.github.io/portfolios/" target="_blank" rel="noopener noreferrer">My Portfolio</a>
        </p>
      </div>
    </div>
  } />
}

export default AboutDeveloperModal