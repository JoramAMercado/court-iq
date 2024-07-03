import React, { useRef } from "react";
import image01 from "../Pages/images/thumbs/1.png"
import image02 from "../Pages/images/thumbs/2.png"
import image03 from "../Pages/images/thumbs/3.png"
import image04 from "../Pages/images/thumbs/4.png"
import image05 from "../Pages/images/thumbs/5.png"
import image06 from "../Pages/images/thumbs/6.png"
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./MyWork.scss"

const MyWork = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const ref = useRef(null);
    const [divWidth, setDivWidth] = useState(0);
    // console.log(divWidth)
    useEffect(() => {
        if (ref.current) {
            setDivWidth(ref.current.getBoundingClientRect().width);
        }

        const handleResize = () => {
            if (ref.current) {
                setDivWidth(ref.current.getBoundingClientRect().width);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const variants = {
        onscreen: {
            x: 0,
        },
        offscreen: {
            x: screenWidth >= 1252 ? - 2 * divWidth : -divWidth,
        },
    };

    const variantsRight = {
        onscreen: {
            x: 0,
        },
        offscreen: {
            x: 0 + (.20 * divWidth) + divWidth,
        },
    };

    function MoveInWhenVisible({ children }) {
        return (
            <motion.div

                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                transition={{ duration: 1.25 }}
                variants={variants}
                style={{ marginRight: 0, padding: 0, width: "100%" }}
            >
                {children}
            </motion.div>
        );
    }

    function MoveInWhenVisibleRight({ children }) {
        return (
            <motion.div

                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                transition={{ duration: 1.25 }}
                variants={variantsRight}
                style={{ marginRight: 0, padding: 0, width: "100%" }}
            >
                {children}
            </motion.div>
        );
    }



    return (
        <section id="work" className="main style3 primary" style={{ backgroundColor: "#faf7f2" }}>
            <div className="content" style={{ backgroundColor: "#faf7f2", boxShadow: "none", borderStyle: "none" }}>
                <header>
                    <h2>Comparison of Propositional and Head-to-Head Bets Across Different Bookmakers</h2>
                    <h5 className="deep-dive-message">
                        By exploring a multitude of <span style={{ color: "#EA6607" }}>different bookmakers odds for the same event or prop, we </span><span style={{ color: "#EA6607" }}>enable users to</span> make more informed assumptions and <span style={{ color: "#EA6607" }}>obtain better outcomes</span>.
                    </h5>
                </header>
                <div className="gallery" >
                    <article className="from-left">
                        {screenWidth >= 480 ?
                            <MoveInWhenVisible>
                                <div className="image fit">
                                    <img src={image06} ref={ref} title="The Anonymous Red" alt="" />
                                </div>
                            </MoveInWhenVisible> :
                            <div className="image fit">
                                <img src={image06} ref={ref} title="The Anonymous Red" alt="" />
                            </div>}
                    </article>
                    <article className="from-right">
                        {screenWidth >= 480 ?
                            <MoveInWhenVisibleRight>
                                <div className="image fit">
                                    <img src={image02} title="Airchitecture II" alt="" />
                                </div>
                            </MoveInWhenVisibleRight> :
                            <div className="image fit">
                                <img src={image02} title="Airchitecture II" alt="" />
                            </div>}
                    </article>
                    <article className="from-left">
                        {screenWidth >= 480 ?
                            <MoveInWhenVisible>
                                <div className="image fit">
                                    <img src={image03} title="Air Lounge" alt="" />
                                </div>
                            </MoveInWhenVisible> :
                            <div className="image fit">
                                <img src={image03} title="Air Lounge" alt="" />
                            </div>}
                    </article>
                    <article className="from-right">
                        {screenWidth >= 480 ? <MoveInWhenVisibleRight>
                            <div className="image fit">
                                <img src={image04} title="Carry on" alt="" />
                            </div>
                        </MoveInWhenVisibleRight> :
                            <div className="image fit">
                                <img src={image04} title="Carry on" alt="" />
                            </div>}
                    </article>
                    <article className="from-left">
                        {screenWidth >= 480 ?
                            <MoveInWhenVisible>
                                <div className="image fit">
                                    <img src={image05} title="The sparkling shell" alt="" />
                                </div>
                            </MoveInWhenVisible> :
                            <div className="image fit">
                                <img src={image05} title="The sparkling shell" alt="" />
                            </div>}
                    </article>
                    <article className="from-right">
                        {screenWidth >= 480 ?
                            <MoveInWhenVisibleRight>
                                <div className="image fit">
                                    <img src={image01} title="Bent IX" alt="" />
                                </div>
                            </MoveInWhenVisibleRight> :
                            <div className="image fit">
                                <img src={image01} title="Bent IX" alt="" />
                            </div>}
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MyWork;