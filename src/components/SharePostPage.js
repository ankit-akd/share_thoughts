import React, {useState} from 'react';
import './styles.css';
import { faComment, faPerson, faHandPaper, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SharePostPage() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = () => {
        if(newPost){
            setPosts([...posts, {content: newPost, comments: [], likes:0, timestamp: Date.now()}]);
            setNewPost('');
        }
    };

    const handleAddComment = (index,comment) => {
        if(comment){
            const updatedPosts = [...posts];
            updatedPosts[index].comments.push(comment);
            setPosts(updatedPosts);
        }
    };


    const getTimeAgo = (timestamp) => {
        const now = new Date();
        const postTime = new Date(timestamp);
        const secondsAgo = Math.floor((now - postTime)/1000);

        if(secondsAgo < 60){
            return `${secondsAgo} seconds ago`; 
        } else if(secondsAgo < 3600){
            return `${Math.floor(secondsAgo/60)} minutes ago`;
        }else {
            return `${Math.floor(secondsAgo/3600)} hours ago`;
        }
    };

    return(
        <div className='post-page'>
            <div className="text-above-post-box">
            <h2>Hello</h2>
            <h2>How are you doing today?  Would you like to share something with the community? 
            <FontAwesomeIcon icon={faSmile} />
            </h2>
            </div>
            <div className='post-input'>
                <h1 style={{textAlign:'left'}}>Create Post</h1>
            <input 
                type="text"
                placeholder='How are you feeling today?'
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className='custom-input'
            />
            <button onClick={handlePostSubmit} className='btn-primary' style={{marginTop: '10px', float:'right'}}>Post</button>
            </div>
            
            {posts.map((post,index) => (
                <div key={index} className='post'>
                    <span className='time-ago'>{getTimeAgo(post.timestamp)}</span>
                    <div className='hand-icon'>
                    <FontAwesomeIcon icon={faHandPaper} /> 
                    <p className='post-content'>{post.content}</p>
                    </div>
                  
                    <div className='comment-section'>
                        <div className='comment-icon'>
                        <div className='comment-icon' onClick={() => handleAddComment(index, prompt('Add a comment'))} >
                            <FontAwesomeIcon icon={faComment} />
                        </div>
                        </div>
                        <p className='comment-count'>{post.comments.length} Comments</p>
                    </div>
                   
                </div>
            ))}
        </div>
    )
    
}

export default SharePostPage;