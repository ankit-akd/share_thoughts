import React, {useState} from 'react';
import './styles.css';


function SharePostPage() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = () => {
        if(newPost){
            setPosts([...posts, {content: newPost, comments: [], likes:0, timestamp: Date.now()}]);
            setNewPost('');
        }
    };

    const handleComment = (index,comment) => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(comment);
        setPosts(updatedPosts);
    };

    const handleLike = (index) => {
        const updatedPosts = [...posts];
        updatedPosts[index].likes++;
        setPosts(updatedPosts);
    }

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
            <h2>How are you doing today?  Would you like to share something with the community? </h2>
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
                    <p>{post.content}</p>
                    <p className='time-ago'>{getTimeAgo(post.timestamp)}</p>
                    <button onClick={() => handleLike(index)}>Like ({post.likes})</button>
                    <input
                        type='text'
                        placeholder='comment'
                        onKeyDown={(e) =>{
                            if(e.key === 'Enter'){
                                handleComment(index, e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                    <ul>
                        {post.comments.map((comment, commentIndex) => (
                            <li key = {commentIndex}>{comment}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
    
}

export default SharePostPage;