import "./NavBar.scss";
import { useNavigate, Link } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import { useStyletron } from "baseui";
import { AppNavBar } from "baseui/app-nav-bar";
import logo3 from "../assets/logo3.png";
import ball from "../assets/BALL.svg";
import ChatApp from "./ChatApp";
import Glossary from "../Components/Glossary";


export default function NavBar({
    currentUser,
    photoURL,
    isGlossaryVisible,
    setIsGlossaryVisible,
}) {
    const [css] = useStyletron();
    const navigate = useNavigate();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [mainItems, setMainItems] = useState([
        { icon: null, label: "NBA" },
        { icon: null, label: "WNBA" },
        { icon: null, label: "Standings" },
        { icon: null, label: "Headlines" },
        { icon: null, label: "Glossary" },
    ]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            updateMainItems(window.innerWidth);
        };

        updateMainItems(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);

    const updateMainItems = (width) => {
        const items = [
            { icon: null, label: "NBA" },
            { icon: null, label: "WNBA" },
            { icon: null, label: "Standings" },
            { icon: null, label: "Headlines" },
            { icon: null, label: "Glossary" },
        ];

        if (width >= 1136) {
            items.unshift({ icon: null, label: "Search", id: "search" });
        }

        setMainItems(items);
    };

    const userItems = [
        { icon: null, label: "Home" },
        { icon: null, label: "User" },
    ]


    function handleMainItemSelect(item) {
        switch (item.label) {
            case "NBA":
                setIsGlossaryVisible(false);
                navigate("/rostersNBA");
                break;
            case "WNBA":
                setIsGlossaryVisible(false);
                navigate("/rostersWNBA");
                break;
            case "Standings":
                setIsGlossaryVisible(false);
                navigate("/teamstandings");
                break;
            case "Schedule":
                setIsGlossaryVisible(false);
                navigate("/GamesSchedule");
                break;
            case "Compare":
                setIsGlossaryVisible(false);
                navigate("/playerComparison");
                break;
            case "Headlines":
                setIsGlossaryVisible(false);
                navigate("/Headlines");
                break;
            case "Search":
                setIsGlossaryVisible(false);
                break;
            case "Glossary":
                setIsGlossaryVisible(!isGlossaryVisible);
                break;
            default:
                setIsGlossaryVisible(false);
                break;
        }
    }

    function handleUserItemSelect(item) {
        switch (item.label) {
            case "User":
                setIsGlossaryVisible(false);
                navigate("/loggedInPage");
                break;
            case "Home":
                setIsGlossaryVisible(false);
                navigate("/");
                break;
            case "Glossary":
                setIsGlossaryVisible(!isGlossaryVisible);
                break;
            default:
                setIsGlossaryVisible(false);
                break;
        }
    }

    const handleLogoClick = () => {
        setIsGlossaryVisible(false);
        navigate("/");
    };

    const handleLogoUserClick = () => {
        setIsGlossaryVisible(false);
        navigate("/loggedInPage");
    };

    return (
        <div style={{ position: 'relative', zIndex: 10 }}>
            <AppNavBar
                title={
                    <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                        <img src={logo3} alt="logo" height="35px" />
                        Court-IQ
                    </div>
                }
                mainItems={mainItems}
                userItems={userItems}
                mapItemToNode={(item) => {
                    if (item.id === "search" && screenWidth >= 1136) {
                        return (
                            <div className="above-chatt">
                                <ChatApp />
                            </div>
                        );
                    }
                    else if (item.id === "search") return ""
                    return item.label;
                }}
                onMainItemSelect={handleMainItemSelect}
                onUserItemSelect={handleUserItemSelect}
                overrides={{
                    Root: {
                        style: ({ $theme }) => ({
                            // backgroundColor: "#EA6607"
                        })
                    },
                    MainMenuItem: {
                        style: ({ $theme }) => ({
                            outline: `none`
                        })
                    },
                }}
                username={currentUser ? currentUser.displayName : "User"}
                usernameSubtitle={
                    <Link
                        to="/loggedInPage"
                        onClick={handleLogoUserClick}
                        style={{
                            display: "inline-block",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                        }}
                    >
                        <span
                            aria-hidden="true"
                            style={{
                                visibility: "hidden",
                                height: 0,
                            }}
                        >
                            Invisible Link
                        </span>
                    </Link>
                }
                userImgUrl={!/[<>]/.test(photoURL) && currentUser ? photoURL : ball}
            />
            {isGlossaryVisible && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: "1000",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={() => setIsGlossaryVisible(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxHeight: "89%",
                            overflowY: "auto",
                            width: "55%",
                            backgroundColor: "#faf7f2",
                            padding: "25px",
                            borderRadius: "3px",
                        }}
                    >
                        <Glossary />
                    </div>
                </div>
            )}
        </div>

    );
}
