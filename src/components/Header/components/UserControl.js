import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const UserControl = () => {
    
    const history = useHistory();

    const [isActivePanel, setActivePanel] = useState(false);

    const {image, name} = (localStorage.getItem("loginInfo")) ? JSON.parse(localStorage.getItem("loginInfo")) : {image: "/images/user.jpg", displayName: "no name"}

    const toggleUserPanel = () => {
        setActivePanel(!isActivePanel);
    }

    const signOut = () => {
        if(localStorage.getItem("loginInfo")){
            localStorage.removeItem("loginInfo");
        }
        history.push("/login");
    }

    return (
        <div className="col-md-3 col-9 d-flex justify-content-end">
            <div className="user user-info" onClick={toggleUserPanel}>
                <div className="user-img">
                    <img className="border-radius" src={image} alt="Image of User" />
                </div>
                <span className="user-name d-none d-md-block color-black">{name}</span>
                <span className="user-control d-none d-md-block">
                    <i className='bx bxs-down-arrow'></i>
                </span>
                <div 
                    className={isActivePanel ? "user-panel box-shadow border-radius active" : "user-panel box-shadow border-radius"}
                >
                    <ul>
                        <li>
                            <a href="">
                                <i className='bx bx-user-circle' ></i> My Profile
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className='bx bx-group' ></i> Group Chat
                            </a>
                        </li>
                        <li>
                            <NavLink to="/setting">
                                <i className='bx bx-cog'></i> Settings
                            </NavLink>
                        </li>
                        <hr />
                        <li>
                            <a onClick={signOut}>
                                <i className='bx bx-exit' ></i> Log out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>                    
        </div>
    );
};

export default UserControl;