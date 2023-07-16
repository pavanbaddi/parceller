"use client";

import React, { useRef, useEffect } from 'react'
import Image from "next/image";
import styles from "../stylesheets/components/Modal.module.scss";
import func from "../functions"
import ModalElement from "../lib/ModalElement"

const { usingStyles } = func;

const getStyles = usingStyles(styles)

export default function Modal({
    id,
    heading,
    body,
    isOpen,
    onDismiss,
    modalBodyClasses=[]
}: {
    id:string,
    heading:string,
    body: React.ReactNode,
    isOpen: boolean,
    onDismiss: Function,
    modalBodyClasses?: Array<string>
    }): React.ReactElement {
    const mountRef = useRef(false);
    const modelRef = useRef<HTMLElement|null>(null);
    const overlayContainerRef = useRef<HTMLElement|null>(null);
    const siteContainerRef = useRef<HTMLElement|null>(null);
    const bodyRef = useRef<HTMLElement|null>(null);

    useEffect(() => {
        modelRef.current = document.getElementById(id);
        overlayContainerRef.current = document.querySelector("#overlay-container");
        siteContainerRef.current = document.querySelector("#site-container");
        bodyRef.current = document.body;
        mountRef.current = true;
        init();
    }, []);

    useEffect((): void => {
        if (isMounted()) {
            const modalElement = new ModalElement({
                element: modelRef.current,
                overlayContainer: overlayContainerRef.current,
                siteContainer: siteContainerRef.current,
                body: bodyRef.current
            });
            if (isOpen) {
                modalElement.show();
            } else {
                modalElement.hide();
            }
        }
    }, [isOpen, mountRef]);

    const isMounted = (): boolean => mountRef.current
    
    const init = () => {
        document.addEventListener("click", function (event) {
            closeVisibleModals(event);
            // closeMenuOnClickedOutside(event);
        })
    }

    const closeVisibleModals = (event: Event) => {
        let visibleModals = document.querySelectorAll(".modal-container.visible");
        let anyModalOpen = visibleModals.length > 0;
        if (anyModalOpen) {
            for (let modal of visibleModals) {
                console.log('visibleModals', visibleModals)
                const has = didClickedOutside(event, modal);
                const obj = new ModalElement({
                    element: modal,
                    overlayContainer: overlayContainerRef.current,
                    siteContainer: siteContainerRef.current,
                    body: bodyRef.current
                });
                if (!has && !obj.isOpened()) {
                    obj.hide();
                }
            }
        }
    }

    const didClickedOutside = (event: Event, targetElement: HTMLElement) : boolean => {
        const has = event.composedPath().includes(targetElement);
        console.log("didClickedOutside has", has)
        return has;
    }
    
    return (
        <div id={id} className={getStyles(`modal-container modal-md ${isOpen ? 'visible' : '' }`)}>
            <div className={getStyles("modal-heading")}>
                <div>
                    <h3>{heading}</h3>
                </div>

                <div>
                    <button data-button="close" type="button" className={getStyles("btn btn-plain")} onClick={onDismiss} >
                        <Image src="/assets/icons/close.png" alt="" width={15} height={15} />
                    </button>
                </div>
            </div>
            <div className={[getStyles("modal-body"), ...modalBodyClasses].join(" ")}>
                {body}
            </div>
        </div>
    )
}