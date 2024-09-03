// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Create and import your CSS file

const Sidebar = () => {
    const categories = [
        "Thai Food",
        "Latest Foods",
        "Foodologist",
        "Italian Cuisine",
        "Mexican Delights",
        "Vegetarian",
        "Desserts",
        "Quick Meals",
        "Healthy Eats",
        "Seasonal Specials",
    ];

    return (
        <div className="sidebar">
            <h3 className="sidebar-heading">Categories</h3>
            <ul className="sidebar-list">
                {categories.map((category, index) => (
                    <li key={index} className="sidebar-item">
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
