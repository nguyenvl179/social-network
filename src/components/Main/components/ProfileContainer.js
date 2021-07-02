import React, { useState } from 'react';

const ProfileContainer = () => {

    const [avatarImg, setAvatarImg] = useState({
        name: 'user',
        url: "images/user.jpg",
        urlAva: ''
    });

    // Functions update avatar new
    const changeFile= (e) => {
        setAvatarImg({
            name: e.target.files[0].name,
            url: avatarImg.url,
            urlAva: URL.createObjectURL(e.target.files[0])
        })
    }

    const showAvatar = () => {
        if(avatarImg.urlAva !== ''){
            return <img className="position-absolute" src={avatarImg.urlAva} style={{top:'0',left:'0'}}/>
        }
    }

    const saveUpdate = () => {
        let avatarUpdate = avatarImg.urlAva
        setAvatarImg({
            name: '',
            url: avatarUpdate,
            urlAva: ''
        })
    }

    const closeUpdate = () => {
        setAvatarImg({
            name: '',
            url: avatarImg.url,
            urlAva: ''
        })
    }

    return (
        <div>
            <div className="image-bg-profile">
                <img src="images/background.jpg" alt="Image background" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="box-my-profile box-shadow">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="box-image-profile border-radius">
                                        <img className="border-radius" src={avatarImg.url} alt="Image of User" />
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
                                                            <label htmlFor="ImagePhoto" className="ImagePhotoSelect border-radius position-relative">
                                                                <i className='bx bxs-image-add'></i>
                                                                {/* Show update avatar */}
                                                                {showAvatar()}
                                                            </label>
                                                            <input id="ImagePhoto" type="file" className="form-control d-none" onChange={changeFile}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeUpdate}>Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={saveUpdate}>Save changes</button>
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