import React from 'react'
import logo from '../../img/LinkedIn_logo.svg'
import './Header.css'
import { BusinessCenter, Home, Message, Notifications, People, Search } from '@material-ui/icons'
import HeaderOption from '../HeaderOption/HeaderOption'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    className="header__logo"
                    src={logo}
                    alt=""
                />
                <div className="header__search">
                   <input
                        className="header__searchInput"
                        placeholder="Search..."
                        variant="outlined"
                    />
                    <Search 
                        className="header__searchButton"
                    /> 
                </div>
                
            </div>
            <div className="header__right">
                <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={People} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Message} title="Messages"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption avatar='https://placeimg.com/300/300/people'  title="me"/>
            </div>
        </div>
    )
}

export default Header
