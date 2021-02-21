import React from 'react';
import ProfileContainer from './components/ProfileContainer';
import VerticalMenu from './components/VerticalMenu';
import Posts from './components/Posts';

const index = () => {
    return (
        <div>
            <div className="main">
                <ProfileContainer />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <VerticalMenu />
                        </div>    
                        <div className="col-md-9">
                            <Posts />
                        </div>
                        <div className="menu-clone-contain d-md-none d-block">
                            <ul className="menu-clone menu">
                                <li>
                                    <a className="border-radius active" href="">
                                        <i className='bx bxs-home'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="border-radius" href="">
                                        <i className='bx bxs-compass' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="border-radius" href="">
                                        <i className='bx bxs-bookmark'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;