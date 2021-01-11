import { Avatar } from '@material-ui/core'
import { Comment, Send, Share, FavoriteBorder } from '@material-ui/icons';
import React, { forwardRef } from 'react'
import PostAction from '../PostAction/PostAction'
import './Post.css'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {


    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <PostAction Icon={FavoriteBorder} title="Like" color="#ff2a6d" />
                <PostAction Icon={Comment} title="Comment" color="gray" />
                <PostAction Icon={Share} title="Share" color="orange" />
                <PostAction Icon={Send} title="Send" color="#005678" />
            </div>
        </div>
    )
})

export default Post
