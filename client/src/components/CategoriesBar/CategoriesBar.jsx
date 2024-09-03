// CategoriesBar.js
import './CategoriesBar.css';
// import { IoFastFoodOutline } from "react-icons/io5";
// import { LuVegan } from "react-icons/lu";
// import { LuDessert } from "react-icons/lu";
// import { PiBowlFoodDuotone } from "react-icons/pi";
// import { PiStarThin } from "react-icons/pi";





const CategoriesBar = () => {
    return (
        <div className="categories-bar">
            <div className="container">
                <div className="categories-items">
                    <div className="category-item">

                        <span>All Posts</span>
                    </div>
                    <div className="category-item">


                        <span>Vegan</span>
                    </div>
                    
                    <div className="category-item">


                        <span>Desserts</span>
                    </div>
                    <div className="category-item">


                        <span>Quick Meals</span>
                    </div>
                    <div className="category-item">


                        <span>Favorites</span>
                    </div>
                    <button className="create-recipe-button">


                        <span>Create a Recipe</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesBar;
