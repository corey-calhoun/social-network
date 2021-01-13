import { Avatar } from "@material-ui/core"
import React from "react"
import { useSelector } from "react-redux";
import { selectUser } from "../../helpers/userSlice";
import "./Sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (  
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXAhfsN1JhTAHF0l2t_0RrEs-JqvxJzqdrQ&usqp=CAU" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl}>
                    ?
                </Avatar>
                <h3>{user.displayName}</h3>
                <h4>{user.email}</h4>
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
