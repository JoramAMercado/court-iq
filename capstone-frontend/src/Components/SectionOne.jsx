import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./SectionOne.scss"

const SectionOne = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const ref = useRef(null);
    const [divWidth, setDivWidth] = useState(0);
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
            x: screenWidth - divWidth,
        },
        offscreen: {
            x: screenWidth - 100,
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

    return (
        <section id="one" className="main style2 right dark fullscreen">

            <MoveInWhenVisible>

                <div className="content box style2" ref={ref} style={{ backgroundColor: "#faf7f2", borderRadius:"8px" }}>
                    <header>
                        <h2>What We Do</h2>
                    </header>
                    <h5>We're revolutionizing the way basketball enthusiasts, teams, and analysts experience the game. <br></br> <br></br>
                        <span style={{ color: "#EA6607" }}>
                            Click on any player from Rosters to see their stats graphically rendered for quick analysis.
                        </span>
                    </h5>

                </div>
            </MoveInWhenVisible>

            <a href="#three" className="button style2 down anchored">Next</a>
        </section>
    );
};

export default SectionOne;
