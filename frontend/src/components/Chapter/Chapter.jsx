import React from "react";
import { useParams, Link } from "react-router-dom";
import useChapter from "../../hooks/useChapter";
import IdeWrapper from "../IdeWrapper";

import { AiOutlineStar, AiOutlineRocket, AiOutlineWechat, AiOutlineNumber } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsStack, BsSpeedometer2, BsPlay } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { RiArrowGoBackLine } from "react-icons/ri";

import "./Chapter.styles.scss";

const CHAPTERS = ["getlink", "getalttext"];

function Chapter() {
    let { id } = useParams();

    const chapterNum = CHAPTERS.indexOf(id.toLowerCase());
    const prevChapterPath = chapterNum > 0 ? CHAPTERS[chapterNum - 1] : CHAPTERS[0];

    const [data, errors, verify] = useChapter(id);
    return (
        <section className="chapter">
            <div className="top">
                <h1 className="top__title">
                    <AiOutlineNumber />
                    <span>Lesson {chapterNum + 1}</span>
                </h1>
                <div className="controls">
                    <Link
                        to={`/chapter/${prevChapterPath}`}
                        className="controls__link controls__prev"
                    >
                        <RiArrowGoBackLine />
                        <span>Prev</span>
                    </Link>
                    <Link to="/chapter/getalttext" className="controls__link controls__next">
                        <BsPlay />
                        <span>Next Chapter</span>
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
                        <p>{data?.prompt}</p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit
                            voluptate, non voluptates similique cumque omnis totam vel fuga modi?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                            asperiores.
                        </p>
                        <br />
                        IdeWrapper
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
