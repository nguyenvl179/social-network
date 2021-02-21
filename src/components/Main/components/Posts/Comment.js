import React from 'react';

const Comment = ({cmtId, userImg, userName, cmtContent, isLike, cmtDate}) => {
    return (
        <div>
            <div className="post-comment-box d-flex flex-wrap pt-3">
                <div className="post-user-img user-img">
                    <img className="border-radius" src={userImg} alt="Image of User" />
                </div>                                        
                <div className="post-comment-contain w-75 flex-grow-1 pt-3 pt-md-0">
                    <div className="form-group post-comment-content p-3 border-radius overflow-hidden">
                        <div className="post-comment-author">
                            <a href="" className="post-comment-author-name color-black">
                                {userName}
                            </a>
                            <span className="post-comment-author-time d-md-inline-block d-block mx-md-2">
                                {new Intl.DateTimeFormat('en-GB', { 
                                    month: 'long', 
                                    day: '2-digit',
                                    year: 'numeric', 
                                }).format(new Date(cmtDate))}
                            </span>
                        </div>
                        <p className="post-comment-text mt-3">
                            {cmtContent}
                        </p>
                    </div>                                    
                    <div className="post-comment-status pt-2">
                        <span
                            className={isLike ? "txtLiked" : ""}
                        >
                            <i className='bx bx-heart' ></i> {isLike ? "Liked" : "Like"}
                        </span>
                        <span className="post-comment-status-dot mx-3"></span>
                        <span>12k Likes</span>
                    </div>                                       
                </div>
            </div>
        </div>
    );
};

export default Comment;