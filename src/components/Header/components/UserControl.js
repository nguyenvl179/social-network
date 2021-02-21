import React, { useState } from 'react';

const UserControl = () => {

    const [isActivePanel, setActivePanel] = useState(false);

    const toggleUserPanel = () => {
        setActivePanel(!isActivePanel);
    }

    return (
        <div className="col-md-3 col-9 d-flex justify-content-end">
            <div className="user user-info" onClick={toggleUserPanel}>
                <div className="user-img">
                    <img className="border-radius" src="/images/user.jpg" alt="Image of User" />
                </div>
                <span className="user-name d-none d-md-block color-black">Xanhthe Neal</span>
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
                            <a href="">
                                <i className='bx bx-cog'></i> Settings
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a href="">
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