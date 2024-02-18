import React from "react";
import SentMessage from "../SentMessage"
import ReceivedMessage from "../ReceivedMessage"
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import "./index.css"

const ChatArea = () => {
    return (
        <div className="chat-main-cntainer">
            <div className="chat-heeader-container">
                <div className="active-profile-container">
                    <h1 className="online-heading">u1</h1>
                    <div className="chat-details">
                        <h1 className="name-heading">#Test User</h1>
                        <p className="status">Online</p>
                    </div>
                </div>
                <div className="delete-button-container">
                    <button type="button" className="delete-button">
                        <MdOutlineDelete />
                    </button>
                </div>
            </div>
            <div className="chat-body-container-temp">
                <SentMessage />
                <ReceivedMessage/>
            </div>
            <div className="chat-footer-container">
                <input type="text" placeholder="Type Here" className="text-input" />
                <button className="send-button" type="button">
                    <BsFillSendFill />
                </button>
            </div>
        </div>
    )
}

export default ChatArea