import React from 'react';

const VerticalMenu = () => {
    return (
        <div className="vertical-menu py-3 border-radius">
            <ul>
                <li>
                    <a href="">Tweet</a>
                </li>
                <li>
                    <a href="">Tweets & replies</a>
                </li>
                <li>
                    <a href="">Media</a>
                </li>
                <li>
                    <a href="">Likes</a>
                </li>
            </ul>
        </div>
    );
};

export default VerticalMenu;