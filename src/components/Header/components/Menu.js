import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {

    var html = null;

    useEffect(() => {
        html = document.querySelector("html");       
    }, []);

    const scrollTop = () => {
        if(html) html.scrollTop = 0;             
    }

    return (
        <div className="col-md-6 d-none d-md-block">
            <ul className="menu">
                <li>
                    <NavLink onClick={() => scrollTop()} to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => scrollTop()} to="/explore" activeClassName="active">Explore</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => scrollTop()} to="/bookmark" activeClassName="active">Bookmark</NavLink>
                </li>
            </ul>                 
        </div>
    );
};

export default Menu;