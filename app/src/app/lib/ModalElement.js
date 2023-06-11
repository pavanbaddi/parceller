import React from "react";
import overlayStyles from "../stylesheets/page-components/OverlayContainer.module.scss";
import modalStyles from "../stylesheets/components/Modal.module.scss";
import helperStyles from "../stylesheets/components/Helper.module.scss";
import func from "../functions"

const { withStyles, usingStyles } = func;

const getOverlayStyles = usingStyles(overlayStyles);
const getModalStyles = usingStyles(modalStyles);
const getHelperStyles = usingStyles(helperStyles);

export default function ModalElement({ element, overlayContainer, siteContainer, body }) {
    this.element = element;
    this.overlayContainer = overlayContainer;
    this.siteContainer = siteContainer;
    this.body = body;
    this.cls = this.element.classList;

    this.hide = function () {
        this.overlayContainer.classList.remove(getOverlayStyles("active"));
        this.siteContainer.classList.remove(getModalStyles("modal-active"));
        this.cls.remove(getModalStyles("visible"));
        this.element.removeAttribute("data-init");
        this.body.classList.remove(getHelperStyles("overflow-x-hidden"));
    }

    this.show = function () {
        this.overlayContainer.classList.add(getOverlayStyles("active"));
        this.siteContainer.classList.add(getModalStyles("modal-active"));
        this.cls.add(getModalStyles("visible"));
        this.element.setAttribute("data-init", "opened");
        this.body.classList.add(getHelperStyles("overflow-x-hidden"));
        this.attachEventListners();
        setTimeout(() => {
            this.settled();
        }, 500)
    }

    this.isOpened = function () {
        let val = this.element.getAttribute("data-init");
        return val === "opened";
    }

    this.settled = function () {
        this.element.setAttribute("data-init", "settled");
    }

    this.isVisible = function () {
        return this.cls.contains(modalStyles("visible"))
    }

    this.attachEventListners = function () {
        const element = this.element.querySelector("[data-button='close']")
        element.addEventListener("click", (event) => {
            this.hide();
        });
    }

    this.detachEventListners = function () {
        const element = this.element.querySelector("[data-button='close']")
        element.removeEventListner("click");
    }
}