import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Discover Delicious Recipes</h1>
                <p className="hero-subtitle">Share and explore recipes with a community of food enthusiasts.</p>
                <a href="#explore" className="hero-button">Explore Now</a>
            </div>
        </div>
    );
};

export default HeroSection;
