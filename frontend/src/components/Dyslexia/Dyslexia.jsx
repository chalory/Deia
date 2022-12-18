/* eslint-disable */

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import font1 from "../../assets/font1.jpg";
import font2 from "../../assets/font2.jpg";
import font3 from "../../assets/font3.jpg";

import useChapter from "../../hooks/useChapter";
import IdeWrapper from "../IdeWrapper";

import picture from "../../assets/dyslexia.gif";

import { AiOutlineStar, AiOutlineRocket, AiOutlineWechat, AiOutlineNumber } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsStack, BsSpeedometer2, BsPlay } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { RiArrowGoBackLine } from "react-icons/ri";

import "./Dyslexia.styles.scss";

const CHAPTERS = ["introduction", "spacing", "fonts"];

function Dyslexia() {
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
        if (id === "introduction") {
            data = {
                prompt: "",
                code: "",
            };
            data.prompt = (
                <div>
                    <div className="pt-10">
                        Dyslexia is perhaps the most common learning disorder in the world,
                        affecting somewhere between 10 to 20% of the world&apos;s population. It can
                        cause difficulties with reading, writing, and spelling, though the degree of
                        impairment varies widely, some people are barely affected while others
                        require a great deal of extra support. Existing best practices and guidance,
                        such as the Web Content Accessibility Guidelines (WCAG), give us a solid
                        foundation for inclusive design and already incorporate many details that
                        affect dyslexic readers. For example, WCAG guidance around line length and
                        spacing match the recommendations I found doing my research. In fact, some
                        of those resources are linked in the Understanding WCAG 2.1 document which
                        provides extended commentary on the guidelines. We can build upon those
                        foundations to offer more focused support for different communities, making
                        it easier to engage with our websites on their own terms. In this article,
                        we&apos;ll look at ways to make an existing design dyslexia-friendly.
                    </div>
                    <br />
                    <img className="w-9/12 pt-5" src={picture}></img>
                </div>
            );
            data.code = `
* {
    box-sizing: border-box;
}
                
body {
    background-color: #333;             
}
                
.tim {
    background-color: #BADA55;
    
    height: 150px;
    width: 150px;
    
    margin: 5px auto;
    padding: 10px;
}
                
                `;

            verify = undefined;
        } else if (id === "spacing") {
            data = {
                prompt: "",
                code: "",
            };
            data.prompt = (
                <div>
                    <div className="pt-10">
                        The WCAG guidelines suggest a minimum line height of 1.5, with a paragraph
                        setting at least 1.5 times larger than the line spacing. Following this
                        guidance is already quite helpful for your dyslexic readers, but that
                        minimum value is based on the standard word spacing. Since we&apos;re
                        increasing the word spacing, we should increase the line height
                        proportionally. I find a line-height of 2.0 works quite well. It&apos;s a
                        little more than the BDA guidance of 1.5x the word spacing, unitless as
                        suggested by MDN documentation, and easy to sync up to a design&apos;s
                        vertical rhythm. To achieve the recommended amount of paragraph spacing, in
                        this example we apply a top margin on our p elements. In a larger project,
                        you might want to use Heydon Pickering&apos;s famous owl selector,
                        especially if you have nested content. Following the WCAG suggestion, that
                        top margin should be a minimum of 3em to get the desired paragraph spacing.
                        After feedback from my dyslexic reader, I increased this to 3.5em which was
                        more comfortable for them.
                    </div>
                    <br />
                    {/* <img className="w-9/12 pt-5" src={picture}></img> */}
                </div>
            );

            data.code = `
            .dyslexia-mode main {
                line-height: 2.0;
             }
             
             .dyslexia-mode main p {
                margin-top: 3.5em;
             }
                            
                            `;
            verify = undefined;
        } else if (id === "fonts") {
            console.log("in");
            data = {
                prompt: "",
                code: "",
            };
            data.prompt = (
                <div>
                    <div className="pt-10">
                        According to the International Dyslexia Association, as much as 15 to 20
                        percent of the U.S. population may have symptoms of dyslexia. Those include
                        slow or inaccurate reading, weak spelling, and poor writing. While not all
                        reading problems are caused by dyslexia, some of the same accommodations can
                        help many struggling students. Using the best fonts for dyslexia is one way
                        you can help.
                        <br />
                        According to research, the best fonts for dyslexia (and other learning
                        disorders) share these characteristics:
                        <br />
                        <b>Sans Serif</b>
                        <img className="w-9/12 pt-5" src={font1}></img>
                        This term literally means without serif. Serifs are those little projections
                        at the ends of letters some fonts use to make them look a little fancier.
                        Times New Roman is a classic example of a serif font, while Arial is a
                        common sans serif option.
                        <br />
                        <b>Non-Italic, Non-Oblique</b>
                        <img className="w-9/12 pt-5" src={font2}></img>
                        <br />
                        Oblique fonts are a slanted version of a font, while italic fonts have a
                        slanted and more stylized appearance. Either way, this style significantly
                        reduces readability, so stick to upright fonts, also known as roman style.
                        <br />
                        <b>Monospace</b>
                        <img className="w-9/12 pt-5" src={font3}></img>
                        <br />
                        In a monospace font, each letter (and space) takes up the same amount of
                        horizontal space on a line. The opposite is proportional or variable-width
                        fonts. Monospace fonts are harder to find these days, but there are some
                        good options out there. Specially designed fonts like Dyslexie and
                        OpenDyslexic add one more feature. They strive to make the differences in
                        mirrored letters like &apos;d&apos; and &apos;b&apos; more obvious, with
                        subtle changes to their appearance. Some researchers feel that special fonts
                        like Dyslexie don&apos;t offer any true benefits at all. But they also say
                        there&apos;s no harm in trying them out.
                    </div>
                    <br />
                    {/* <img className="w-9/12 pt-5" src={picture}></img> */}
                </div>
            );

            data.code = `
            .dyslexia-mode main {
                line-height: 2.0;
             }
             
             .dyslexia-mode main p {
                margin-top: 3.5em;
             }
                            
                            `;
            verify = undefined;
        }
    }

    return (
        <section className="dyslexia">
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

export default Dyslexia;
