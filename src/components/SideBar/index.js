import React from "react";
import ProfileItem from "../ProfileItem"
import { CgProfile } from "react-icons/cg";
import { FaPlusCircle} from "react-icons/fa";
import { MdOutlinePersonAddAlt} from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import "./index.css"

const SideBar = () => {
    const dataModel = [
        {
            testName : "u1",
            isMessaged : "...typing",
            lastSeen : "online"

        },

        {
            testName : "u2",
            isMessaged : "...typing",
            lastSeen : "10 min ago"

        },

        {
            testName : "u3",
            isMessaged : "Where are you?",
            lastSeen : "20 min ago"

        },

        {
            testName : "u4",
            isMessaged : "get this work by today EOD",
            lastSeen : "40 min ago"

        },

        {
            testName : "u5",
            isMessaged : "...Typing",
            lastSeen : "online"

        },

        {
            testName : "u6",
            isMessaged : "Today's Plan?",
            lastSeen : "1 day ago"

        }
    ]
    return (
        <div className="main-sidebar-container">
            <div className="side-header-container">
                <div className="profile-button-container">
                    <button type="button" className="buttonItem">
                        <CgProfile />
                     </button>
                </div>
                <div className="theme-container">
                    <button type="button" className="buttonItem">
                        <FaPlusCircle />
                    </button>
                    
                    <button type="button" className="buttonItem">
                        <MdOutlinePersonAddAlt />
                    </button>
                </div>
            </div>
            <div className="input-container-temp">
                <input type="text" placeholder="Search" className="search-input"/>
                <button type="button" className="search-button">
                    <IoMdSearch />
                </button>
            </div>
            <div className="profile-container-identical">
                {dataModel.map((eachItem) => (<ProfileItem userDetails = {eachItem} key={eachItem.testName} />))}
            </div>
        </div>
    )
}

export default SideBar