import React from 'react';

const ProfileContainer = () => {
    return (
        <div>
            <div className="image-bg-profile">
                <img src="images/background.jpg" alt="Image background" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="box-my-profile">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="box-image-profile border-radius">
                                        <img className="border-radius" src="images/user.jpg" alt="Image of User" />
                                        <div className="box-image-profile-overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className='bx bxs-camera' ></i>
                                        </div>
                                        
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                            <div className="modal-content border-radius">
                                                <div className="modal-header">
                                                    <h5 className="modal-title color-black" id="exampleModalLabel">Upload Image Profile</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <label htmlFor="ImagePhoto" className="ImagePhotoSelect border-radius">
                                                                <i className='bx bxs-image-add'></i>
                                                            </label>
                                                            <input id="ImagePhoto" type="file" className="form-control d-none" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-5 text-center text-md-start box-info-profile">
                                    <div className="box-info-name">
                                        <span className="info-name d-md-inline-block d-block bold color-black">Daniel Jensen</span>
                                        <span className="info-following">
                                            <span className="bold">2,569</span> Following
                                        </span>
                                        <span className="info-follower">
                                            <span className="bold">10,8K</span> Followers
                                        </span>
                                    </div>
                                    <p className="box-info-description">
                                        Photographer & Filmmaker based in Copenhagen, Denmark
                                    </p>
                                </div>
                                <div className="col-md-5 text-center text-md-end box-info-btn-follow">
                                    <button className="btn btn-follow btn-border-radius"><i className='bx bxs-user-plus'></i> Follow</button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;