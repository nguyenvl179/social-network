import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const MenuClone = () => {

    var html = null;

    useEffect(() => {
        html = document.querySelector("html");       
    }, []);

    const scrollTop = () => {
        if(html) html.scrollTop = 0;            
    }

    return (
        <div className="menu-clone-contain d-md-none d-block">
            <ul className="menu-clone menu">
                <li>
                    <NavLink onClick={() => scrollTop()} className="border-radius" activeClassName="active" to="/home">
                        <i className='bx bxs-home'></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => scrollTop()} className="border-radius" activeClassName="active" to="/explore">
                        <i className='bx bxs-compass' ></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => scrollTop()} className="border-radius" activeClassName="active" to="/bookmark">
                        <i className='bx bxs-bookmark'></i>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuClone;