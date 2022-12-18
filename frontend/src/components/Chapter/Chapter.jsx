/* eslint-disable */

import React from "react";
import { useParams, Link } from "react-router-dom";
import useChapter from "../../hooks/useChapter";
import IdeWrapper from "../IdeWrapper";
import picture from "../../assets/pour-accessibility.png";
import { AiOutlineStar, AiOutlineRocket, AiOutlineWechat, AiOutlineNumber } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsStack, BsSpeedometer2, BsPlay } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { RiArrowGoBackLine } from "react-icons/ri";

import "./Chapter.styles.scss";
import { useState } from "react";

const CHAPTERS = ["lesson1", "getlink", "lesson2", , "getalttext"];
function Chapter() {
    let { id } = useParams();
    const [isToggle, setIsToggle] = useState(false);

    const toggleDropDown = () => {
        setIsToggle(prevState => !prevState);
    };

    const chapterNum = CHAPTERS.indexOf(id.toLowerCase());
    const prevChapterPath = chapterNum > 0 ? CHAPTERS[chapterNum - 1] : CHAPTERS[0];
    const nextChapterPath =
        chapterNum < CHAPTERS.length - 1 ? CHAPTERS[chapterNum + 1] : CHAPTERS[CHAPTERS.length];

    let [dataBackend, errors, verify] = useChapter(id);
    let data = dataBackend;

    if (data.prompt === "Loading" && data.code === "Loading") {
        if (id === "lesson1") {
            data = {
                prompt: "",
                code: "",
            };
            data.prompt = (
                <div>
                    <div className="pt-10">
                        A person is said to be disabled when they&apos;re faced with a condition -
                        permanent or temporary - that makes it difficult or impossible for them to
                        achieve a desired task. In effect, web accessibility involves removing all
                        barriers that prevent any users from accessing the web equally.
                    </div>
                    <br />
                    <img className="w-9/12 pt-5" src={picture}></img>
                    <div className="pt-5">
                        Most of the barriers to web accessibility faced by people with disabilities
                        can be put into four categories. The WCAG addresses each category to ensure
                        accessibility is achieved.
                        <br />
                        <b>Perceivable</b>: It requires that users can identify content and
                        interface elements using their senses. Most users rely primarily on visual
                        senses, while others rely on sound.
                        <br />
                        <b>Operable</b>: It requires that users can use controls, buttons,
                        navigation, and other interactive elements by themselves. It takes into
                        consideration that disabled users will use assistive technology like voice
                        recognition, keyboards, screen readers, and so on.
                        <br />
                        <b> Understandable</b>: It requires that users can comprehend the content
                        and learn and remember how to use your site. The site should have a
                        consistent format, predictable design and usage patterns, as well as an
                        appropriate tone.
                        <br />
                        <b>Robust</b>: It requires that users of varying abilities and conditions
                        can reliably interpret and interact with content using a technology or
                        device of their choice.
                        <br />
                        <b>
                            Click on the &apos;Next Lesson&apos; button in the upper right to
                            proceed!
                        </b>
                    </div>
                </div>
            );
            verify = undefined;
        } else if (id === "lesson2") {
            data = {
                prompt: "",
                code: "",
            };
            data.prompt = (
                <div className="thumbnails">
                    <header>
                        <h1>Accessible Image Thumbnails</h1>
                    </header>
                    <main>
                        <h2>Gallery of Images: Happy People from Our Company Event</h2>
                        <p>
                            Developer: Put explicit user instructions here, such as: "click a
                            thumbnail to download images" or "click an image thumbnail to view image
                            options."
                        </p>
                        <ul className="list-unstyled" role="group">
                            <li>
                                <a href="#">
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images.jpg"
                                        alt="thumbnail of photo 001 from Our Company Event"
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="thumbnail of photo 002 from Our Company Event"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(8).jpg"
                                        alt=""
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="thumbnail of photo 003 from Our Company Event"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(2).jpg"
                                        alt=""
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="group photo from Our Company Event, click to download"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(3).jpg"
                                        alt=""
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="group photo from Our Company Event, click to download"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(4).jpg"
                                        alt=""
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="group photo from Our Company Event, click to download"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(5).jpg"
                                        alt=""
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="group photo from Our Company Event, click to download"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(6).jpg"
                                        alt=""
                                        role="presentation"
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="group photo from Our Company Event, click to download"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(7).jpg"
                                        alt=""
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-label="group photo from Our Company Event, click to download"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/images%20(1).jpg"
                                        alt=""
                                        className="thumbnail"
                                    />
                                </a>
                            </li>
                        </ul>
                        <section>
                            <h3>developer notes</h3>
                            <ol>
                                <li>
                                    by using the UL/LI html structure, these items have been grouped
                                    properly. If another HTML structure was used, additional roles
                                    would need to be added.
                                </li>
                                <li>
                                    I have not used the 'title' attribute here, because 'title' has
                                    spotty support with assistive technology(AT).
                                </li>
                                <li>
                                    While testing with NVDA + Firefox on Windows, I see that two
                                    different methods seem to mostly convey the same information:
                                    <ul>
                                        <li>
                                            Method One:
                                            <ul>
                                                <li>
                                                    Add <code>aria-label</code> on the link, leaving
                                                    the image alt blank and adding{" "}
                                                    <code>role="presentation"</code> to the img
                                                    element.
                                                </li>
                                                <li>
                                                    Screenshot of how this reads out on NVDA +
                                                    Firefox (Windows) for the first image:
                                                    <img
                                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/graphic-link.png"
                                                        alt="thumbnail of photo 001 from our company event graphic link"
                                                        className="img-devSample"
                                                    />
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Method Two:
                                            <ul>
                                                <li>
                                                    Add all of the information to the image's alt
                                                    tag.
                                                </li>
                                                <li>
                                                    Screenshot of this method on the second image:
                                                    <img
                                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/just-link.png"
                                                        alt="thumbnail of photo 002 from our company event link"
                                                        className="img-devSample"
                                                    />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    This example assumes the following:
                                    <ul>
                                        <li>
                                            The aria-label/alt text will be dynamically generated
                                            and added with some sort of concatenated string.
                                        </li>
                                        <li>
                                            the images will have been batch processed for
                                            consistency
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </section>
                    </main>
                    <footer>
                        <p>
                            <small>
                                Images found by searching Google for "happy people" and filtering
                                for medium images, labeled for reuse. More Questions? Comment here
                                or ask me{" "}
                                <a href="https://twitter.com/melaniersumner"> on Twitter!</a>
                            </small>
                        </p>
                    </footer>
                </div>
            );
            verify = undefined;
        }
    }

    return (
        <section className="chapter">
            <div className="top">
                <div className="relative">
                    <button
                        onClick={toggleDropDown}
                        id="dropdownDividerButton"
                        data-dropdown-toggle="dropdownDivider"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        Lessons{" "}
                        <svg
                            className="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>

                    <div
                        id="dropdownDivider"
                        className={`${
                            isToggle ? "block" : "hidden"
                        } absolute  w-full z-10 w-30 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                    >
                        <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDividerButton"
                        >
                            {CHAPTERS.map((chapter, index) => (
                                <li key={chapter}>
                                    <Link
                                        to={`/chapters/${chapter}`}
                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {chapter}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="controls">
                    <Link
                        to={`/chapters/${prevChapterPath}`}
                        className="controls__link controls__prev"
                    >
                        <RiArrowGoBackLine />
                        <span>Prev</span>
                    </Link>
                    <Link
                        to={`/chapters/${nextChapterPath}`}
                        className="controls__link controls__next"
                    >
                        <BsPlay />
                        <span>Next Lesson</span>
                    </Link>
                </div>
            </div>

            <div className="heading">
                <div>
                    <h2 className="problem-title">
                        <GiCrossedSwords />
                        <span>{id}</span>
                    </h2>

                    <div className="stats">
                        <div className="stats__stat">
                            {/* <AiOutlineStar /> */}
                            {/* <span>2913</span> */}
                            <AiOutlineRocket />
                            <span>Difficulty: </span>
                            <span className="stats__value">Easy</span>
                        </div>

                        <div className="stats__stat">
                            <AiOutlineStar />
                            <span>Saved: </span>
                            <span className="stats__value">3,514</span>
                        </div>

                        <div className="stats__stat">
                            <HiOutlineChatAlt2 />
                            <span>Positive Feedback: </span>
                            <span className="stats__value">4,742 of 5,623</span>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li>
                                <button className="nav__item active">Instructions</button>
                            </li>
                            <li>
                                <button className="nav__item">Hints</button>
                            </li>
                            <li>
                                <button className="nav__item">Report</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="links">
                    <a href="#" className="links__link">
                        <AiOutlineWechat />
                        <span>View Discussions</span>
                    </a>
                    <a href="#" className="links__link">
                        <MdPeopleAlt />
                        <span>Submissions</span>
                    </a>
                    <a href="#" className="links__link">
                        <BsStack />
                        <span>Resources</span>
                    </a>
                </div>
            </div>

            <div className="layout">
                <div className="left">
                    <div className="instructions">
                        {data?.prompt}
                        <br />
                        {/* <p>{chapterInstructions}</p> */}
                        <br />

                        <hr />
                        <br />
                        <div className="tags">
                            <FaTags />
                            <ul>
                                <li className="tags__tag">Accessibility</li>
                                <li className="tags__tag">Rules</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <IdeWrapper errors={errors} updateErrors={verify} initialCode={data?.code} />
                </div>
            </div>
        </section>
    );
}

export default Chapter;

{
    /* <Link to="/chapter/getlink">Chapter 1 (Get Link)</Link>
                <Link to="/chapter/getalttext">Chapter 2 (Get alt text)</Link> */
}
