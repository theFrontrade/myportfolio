import React from "react";

const AppHeader = () => {
    return(
        <header>
            <div className="app-logo flex centralized-v">
                <img 
                    src="icons/coding.png" 
                    alt="Code Icon"
                />
                <h4>TheFrontrade</h4>
            </div>
            <div className="navigations flex centralized-v">
                <h5 className='active-nav'>Home</h5>
                <h5>My Blog</h5>
                <h5>About Me</h5>
                <h5>Projects</h5>
                <h5>Contact Me</h5>
            </div>
        </header>
    )
}

export default AppHeader;