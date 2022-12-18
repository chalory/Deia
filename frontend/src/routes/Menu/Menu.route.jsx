import React, { useRef } from "react";
import { Link } from "react-router-dom";
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

const Letter = ({ value }) => {
    const refSpan = useRef();

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

    useEffect(() => {
        const spanEl = refSpan.current;
        setProperty(spanEl, "--r", spanRotation);
        setProperty(spanEl, "--m-h", spanMoveHorizontal);
        setProperty(spanEl, "--m-v", spanMoveVertical);
    }, [refSpan.current]);

    return (
        <span
            className="letter"
            ref={refSpan}
            // style={{
            //     transform: `rotate(3deg)  translate(${spanMoveHorizontal}, ${spanMoveVertical})`,
            // }}
        >
            {value}
        </span>
    );
};

const Menu = () => {
    const linkText1 = "Basic Accessibility";
    const letters1 = linkText1.split("");

    const linkText2 = "Dyslexia-Friendly Accessibility";
    const letters2 = linkText2.split("");

    // const letterElements = useMemo(() => generateLetters(letters), []);

    return (
        <section className="menu">
            <div className="menu__link">
                <Link to="/chapters/lesson1" className="button">
                    <span className="shadow">{linkText1}</span>
                    <span className="clone" hidden>
                        <Letter />
                        {letters1.length > 0 &&
                            letters1.map((letter, index) => (
                                <Letter key={letter + index} value={letter} />
                            ))}
                    </span>
                </Link>
            </div>
            <div className="menu__link">
                <Link to="/dyslexia/dyslexia1" className="button">
                    <span className="shadow">{linkText2}</span>
                    <span className="clone" hidden>
                        <Letter />
                        {letters2.length > 0 &&
                            letters2.map((letter, index) => (
                                <Letter key={letter + index} value={letter} />
                            ))}
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default Menu;
