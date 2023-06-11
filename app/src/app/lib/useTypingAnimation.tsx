import React, {useState, useRef, useEffect} from 'react'

export default function useTypingAnimation() {
    const typingData = useRef({
        "texts": [],
        "currentIndex": 0,
        "currentTextIndex": 0,
        "speed": 500,
        "pauseSpeed" : 200,
        "eraseSpeed" : 100,
        "element": null,
        "actionAfterEnd" : "stop" // choices: repeat,stop
    });

    const getSpeed = () => typingData.current.speed;
    const getPauseSpeed = () => typingData.current.pauseSpeed;
    const getEraseSpeed = () => typingData.current.eraseSpeed;

    const setSpeed = (val:number) => {
        typingData.current.speed = val;
    }
    const setPauseSpeed = (val:number) => {
        typingData.current.pauseSpeed = val;
    }
    const setEraseSpeed = (val:number) => {
        typingData.current.eraseSpeed = val;
    }


    const isLastTextTyping = () => typingData.current.currentIndex === (typingData.current.texts.length-1);

    const setElement = (element: HTMLElement): void => {
        typingData.current.element = element
    }

    const setTexts = (texts: Array<string>):  void =>{
        typingData.current.texts = texts
    }

    const start = (): void  => {
        if (typingData.current.currentIndex < typingData.current.texts.length) {
            runForwardAnimation();
        }
    }

    const getCurrentText = () => typingData.current.texts[typingData.current.currentIndex]

    const runForwardAnimation = () => {
        let index = typingData.current.currentTextIndex;
        if (typingData.current.currentIndex < typingData.current.texts.length && index < getCurrentText().length) {
            let char = getCurrentText()[index]
            typingData.current.element.innerHTML += char;
            typingData.current.currentTextIndex++;
            setTimeout(runForwardAnimation, getSpeed());
        } else {
            let can = true;
            if (isLastTextTyping()) {
                if (typingData.current.actionAfterEnd === "stop") {
                    can = false 
                } else {
                    repeatTyping();
                }
            } else {
                typingData.current.currentIndex += 1;
            }
            if (can) {
                setTimeout(clearTextAnimation, getPauseSpeed())
            }
        }
    }

    const clearTextAnimation = () => {
        let text = typingData.current.element.innerHTML;
        if (text.length > 0) {
            let len = text.length - 1;
            text = text.slice(0, len);
            typingData.current.element.innerHTML = text;
            setTimeout(clearTextAnimation, getEraseSpeed());
        } else {
            typingData.current.currentTextIndex = 0;
            if (typingData.current.currentIndex < typingData.current.texts.length) {
                setTimeout(runForwardAnimation, getPauseSpeed())
            }
        }
    }

    const repeatTyping = () => {
        typingData.current.currentIndex = 0;
        typingData.current.currentTextIndex = 0;
    }
    
    return {
        start,
        setElement,
        setTexts,
        setSpeed,
        setPauseSpeed,
        setEraseSpeed,
    }
}
