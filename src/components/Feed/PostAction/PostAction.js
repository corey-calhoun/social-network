import React from 'react'
import './PostAction.css'

function PostAction({ Icon, title, color} ) {
    return (
        <div className="postAction">
            <Icon style={{ color: color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default PostAction
