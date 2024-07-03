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
        { icon: null, label: "NBA Rosters" },
        { icon: null, label: "Standings" },
        { icon: null, label: "Headlines" },
        { icon: null, label: "Glossary" },
        {
            icon: null, label: (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cone-striped" viewBox="0 0 16 16">
                        <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z" />
                    </svg>
                    <span style={{}}>WNBA</span>
                </span>
            )
        },
    ]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            updateMainItems(window.innerWidth);
            updateUserItems(window.innerWidth);
        };

        updateMainItems(window.innerWidth);
        updateUserItems(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);

    const updateMainItems = (width) => {
        const items = [
            { icon: null, label: "NBA Rosters" },
            { icon: null, label: "Standings" },
            { icon: null, label: "Headlines" },
            { icon: null, label: "Glossary" },
            {
                icon: null, label: (
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cone-striped" viewBox="0 0 16 16">
                            <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z" />
                        </svg>
                        <span style={{}}>WNBA</span>
                    </span>
                )
            },
        ];

        if (width >= 1136) {
            items.unshift({ icon: null, label: "Search", id: "search" });
        }

        setMainItems(items);
    };

    const updateUserItems = (width) => {
        if (width <= 1135) {
            const items = [
                { icon: null, label: "Home" },
                { icon: null, label: "User" },
                { icon: null, label: "NBA Rosters" },
                { icon: null, label: "Standings" },
                { icon: null, label: "Headlines" },
                { icon: null, label: "Glossary" },
                {
                    icon: null, label: (
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cone-striped" viewBox="0 0 16 16">
                                <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z" />
                            </svg>
                            <span style={{}}>WNBA</span>
                        </span>
                    )
                },
            ];
            setUserItems(items);
        } else {
            const items = [
                { icon: null, label: "Home" },
                { icon: null, label: "User" },
            ];
            setUserItems(items);
        }
    };

    const [userItems, setUserItems] = useState([
        { icon: null, label: "Home" },
        { icon: null, label: "User" },
        { icon: null, label: "NBA Rosters" },
        { icon: null, label: "Standings" },
        { icon: null, label: "Headlines" },
        { icon: null, label: "Glossary" },
        {
            icon: null, label: (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cone-striped" viewBox="0 0 16 16">
                        <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z" />
                    </svg>
                    <span style={{}}>WNBA</span>
                </span>
            )
        },
    ])


    function handleItemSelect(item) {
        switch (typeof item.label === 'string' ? item.label : item.label.props.children[1].props.children) {
            case "User":
                setIsGlossaryVisible(false);
                navigate("/loggedInPage");
                break;
            case "Home":
                setIsGlossaryVisible(false);
                navigate("/");
                break;
            case "NBA Rosters":
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
            case "Headlines":
                setIsGlossaryVisible(false);
                navigate("/Headlines");
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
                onMainItemSelect={handleItemSelect}
                onUserItemSelect={handleItemSelect}
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
                    UserMenuProfileListItem: {
                        style: ({ $theme }) => ({
                            marginTop: window.innerWidth > 1135 ? "5px" : window.innerWidth > 600 ? "78px" : "57px",
                        }),
                    }
                }}
                username={currentUser ? currentUser.displayName : "User"}
                usernameSubtitle={
                    <span
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
                    </span>
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
