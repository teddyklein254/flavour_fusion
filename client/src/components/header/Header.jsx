import './Header.css';

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="header-left">
                <div className="header-logo">
                    <a href="/">RecipeShare</a>
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Search recipes..." />
                </div>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-buttons">
                <button className="btn btn-signin">Sign In</button>
                <button className="btn btn-signup">Sign Up</button>
            </div>
        </header>
        <hr className="horizontal-line" />

        </>
    );
}

export default Header;
