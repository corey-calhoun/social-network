import { Avatar } from "@material-ui/core"
import React from "react"
import "./Sidebar.css"

function Sidebar({ avatar }) {

    const recentItem = (topic) => (  
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://placeimg.com/640/480/nature" alt="" />
                <Avatar className="sidebar__avatar" src={avatar} />
                <h3>John Doe</h3>
                <h4>johndoe@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">24</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">4</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent Topics</p>
                {recentItem("reactjs")}
                {recentItem("javascript")}
                {recentItem("softwareengineering")}
                {recentItem("uidesign")}
            </div>
        </div>
    )
}

export default Sidebar
