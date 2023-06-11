import React from 'react'
import Modal from '../components/Modal';
import styles from "../stylesheets/page-components/AboutDeveloperModal.module.scss";
import func from "../functions"

const { usingStyles } = func;

const getStyles = usingStyles(styles);

function AboutDeveloperModal({isOpen, onDismiss} : {isOpen: boolean, onDismiss: Function}) : React.ReactElement {
  return <Modal isOpen={isOpen} onDismiss={onDismiss} id="about-developer" heading='About Developer' body={<div>Hi</div>} />
}

export default AboutDeveloperModal