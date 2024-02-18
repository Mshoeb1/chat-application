import React from "react";
import SideBar from "../SideBar"
import ChatConversation from "../ChatConversation"
import "./index.css"

const Home = () => {
    return (
        <div className="main-home-container">
            <SideBar/>
            <ChatConversation/>
        </div>
    )
}

export default Home