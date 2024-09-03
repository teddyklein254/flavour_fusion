// Posts.js
import React, { useState } from 'react';
import './Posts.css';
import { FaRegComment, FaHeart, FaShareAlt } from 'react-icons/fa';
import recipe from "../../assets/images/fission.jpg"; // Import the recipe image

const postsData = [
    { id: 1, title: "Recipe 1", description: "A delicious recipe for a savory dish. This description is quite long and should demonstrate how the 'Read More' link will work if there are many words.", image: recipe },
    { id: 2, title: "Recipe 2", description: "A sweet recipe perfect for dessert.", image: recipe },
    { id: 3, title: "Recipe 3", description: "Quick and easy meal for busy days. This description also needs to be long enough to trigger the 'Read More' link.", image: recipe },
    { id: 4, title: "Recipe 4", description: "A favorite recipe among many.", image: recipe },
];

const Posts = () => {
    const [showMore, setShowMore] = useState({});

    const handleReadMore = (id) => {
        setShowMore(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="posts-container">
            {postsData.map(post => (
                <div className="post-card" key={post.id}>
                    <img src={post.image} alt={post.title} className="post-image" />
                    <div className="post-content">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-description">
                            {showMore[post.id] ? post.description : `${post.description.substring(0, 100)}...`}
                            {post.description.length > 100 && (
                                <button className="read-more" onClick={() => handleReadMore(post.id)}>
                                    {showMore[post.id] ? 'Read Less' : 'Read More'}
                                </button>
                            )}
                        </p>
                        <div className="post-actions">
                            <button className="action-button">
                                <FaRegComment className="action-icon" />
                                <span>Comment</span>
                            </button>
                            <button className="action-button">
                                <FaHeart className="action-icon" />
                                <span>Like</span>
                            </button>
                            <button className="action-button">
                                <FaShareAlt className="action-icon" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;
