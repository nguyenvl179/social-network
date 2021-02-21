import React from 'react';

const ImagePost = ({urlImage, idx, total}) => {
    return (
        <div className="post-img-contain">
            <div className="post-media w-100 h-100">
                <img src={urlImage} alt="Image of Post" />
            </div>
            {
                (idx == 4) 
                ? <div className="post-img-more">{total - 5}+</div>
                : ""
            }
        </div>
    );
};

export default ImagePost;