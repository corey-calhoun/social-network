import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../helpers/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div className="headerOption" onClick={onClick} >
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className="headerOption__icon" src={avatar} />}
            <h4 className="headerOption__title">{title}</h4>
        </div>
    )
}

export default HeaderOption
