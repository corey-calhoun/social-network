import { AddAPhoto, Create, Videocam, VideogameAsset } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import './Feed.css'
import PostAction from './PostAction/PostAction'
import Post from './Post/Post'
import { db } from '../../firebase'
import firebase from 'firebase'

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    //This is what updates your DB when you update posts
    useEffect(() => {
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: "Corey Calhoun",
            description: 'Full Stack JavaScript Developer',
            message: input,
            photoUrl: 'https://image.freepik.com/free-vector/panda-esport-gaming-mascot-logo_1258-29055.jpg',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__postContainer">
                <form>
                    <input 
                        type="text" 
                        className="feed__input" 
                        placeholder="Start a post..."
                        onChange={(e) => setInput(e.target.value)}    
                    />
                    <button 
                        className="feed__searchButton" 
                        onClick={sendPost}
                        type="submit"
                    >
                        <Create 
                            className="feed__searchButtonIcon" 
                            fontSize="small" 
                            color="disabled" 
                        />
                    </button>
                </form>
                <div className="feed__postActions">
                    <PostAction Icon={AddAPhoto} title="Photo" color="#ff2a6d" />
                    <PostAction Icon={Videocam} title="Video" color="#05d9e8" />
                    <PostAction Icon={VideogameAsset} title="Stream" color="#005678" />
                </div>
            </div>
            <div className="feed__postSection">

                {posts.map(({ id, data: { name, description, message, photoUrl} }) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
                
            </div>
            
        </div>
    )
}

export default Feed
