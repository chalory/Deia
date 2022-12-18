import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// There are some more ideas:
//   1. use cubic-bezier.
//   2. change direction by even and odd.
//   3. change direction clockwise/anti-clockwise.
//   4. set .clone to low opacity and when hovered/focused change opacity to 1.

import "./Menu.styles.scss";

const setProperty = (e, p, v) => e.style.setProperty(p, v);

const generateLetters = letters =>
    letters.map((i, index) => {
        const span = document.createElement("span");

        const id = index + 1;
        const randomArray = ["top", "bottom", "left", "right"];
        const randomNumber = Math.floor(Math.random() * 4);

        let direction;

        if (randomArray[randomNumber] === "top") {
            direction = -100;
        } else if (randomArray[randomNumber] === "right") {
            direction = 70;
        } else if (randomArray[randomNumber] === "bottom") {
            direction = 100;
        } else if (randomArray[randomNumber] === "left") {
            direction = -70;
        }

        const spanRotation = `${id * 3}deg`;
        const spanMoveHorizontal = `${direction + id * 3}px`;
        const spanMoveVertical = `${direction + id * 3}px`;

        if (i === " ") {
            span.innerHTML = "&nbsp;";
        } else {
            span.innerText = i;
        }

        span.classList.add("letter");
        setProperty(span, "--r", spanRotation);
        setProperty(span, "--m-h", spanMoveHorizontal);
        setProperty(span, "--m-v", spanMoveVertical);

        return span;
    });

const Letter = () => {
    const refSpan = useRef();
    const spanEl = refSpan.current;

    const id = 0 + 1;
    const randomArray = ["top", "bottom", "left", "right"];
    const randomNumber = Math.floor(Math.random() * 4);

    let direction;

    if (randomArray[randomNumber] === "top") {
        direction = -100;
    } else if (randomArray[randomNumber] === "right") {
        direction = 70;
    } else if (randomArray[randomNumber] === "bottom") {
        direction = 100;
    } else if (randomArray[randomNumber] === "left") {
        direction = -70;
    }

    const spanRotation = `${id * 3}deg`;
    const spanMoveHorizontal = `${direction + id * 3}px`;
    const spanMoveVertical = `${direction + id * 3}px`;

    // setProperty(spanEl, "--r", spanRotation);
    // setProperty(spanEl, "--m-h", spanMoveHorizontal);
    // setProperty(spanEl, "--m-v", spanMoveVertical);

    return (
        <span ref={refSpan} className="letter">
            x
        </span>
    );
};

const Menu = () => {
    const linkText = "As Button";
    const letters = linkText.split("");

    const letterElements = useMemo(() => generateLetters(letters), []);

    console.log(letterElements);

    return (
        <section className="menu">
            <div className="container">
                <a className="link" href="#" target="_blank">
                    <span className="shadow">{linkText}</span>
                    <span className="clone" hidden>
                        <Letter />
                        {letters.length > 0 &&
                            letterElements.map((el, index) => <div key={index}></div>)}
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Menu;
