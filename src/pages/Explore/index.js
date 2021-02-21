import React, {useEffect} from 'react';
import Footer from '../../components/Footer';
import MenuClone from '../../components/Main/components/MenuClone';
import Posts from '../../components/Main/components/Posts';

const Explore = (props) => {

    useEffect(() => {
        document.title = "Explore"
    }, []);

    return (
        <div>
            <div className="main">
                <div className="container mt-4">
                    <div className="row">   
                        <div className="col-md-9 order-md-0 order-1">
                            <div class="post-form border-radius box-shadow mt-md-0 mt-3">
                                <h5 class="color-black">Tweet something</h5>
                                <hr />
                                <div class="post-comment-box d-flex flex-wrap">
                                    <div class="user-img">
                                        <img class="border-radius" src="images/user.jpg" alt="Image of User" />
                                    </div>
                                    <div class="form-group flex-fill w-50 border-radius overflow-hidden">
                                        <div class="input-group">
                                            <textarea class="form-control shadow-none py-3" cols="30" rows="3" placeholder="What's something?"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-form-control d-flex flex-wrap mt-3">
                                    <div class="post-form-control-select d-flex flex-wrap">
                                        <label for="inputFile"><i class='bx bxs-image-alt' ></i></label>
                                        <input id="inputFile" type="file" multiple class="form-control d-none" />
                                        <div class="post-form-control-comunity mx-3">
                                            <span class="border-radius">
                                                <i class='bx bx-globe'></i> Everyone can reply
                                            </span>
                                            <div class="user-panel post-form-panel box-shadow border-radius active">
                                                <h5 class="color-black">Who can reply?</h5>
                                                <h6>Choose who can reply to this Tweet?</h6>
                                                <ul>
                                                    <li>
                                                        <a href=""><i class='bx bx-globe'></i> Everyone</a>
                                                    </li>
                                                    <li>
                                                        <a href=""><i class='bx bxs-group' ></i> People you follow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-form-control-btn flex-fill w- text-end">
                                        <button class="btn btn-post-form btn-border-radius">Tweet</button>
                                    </div>
                                </div>
                            </div>
                            <Posts />
                        </div>
                        <div className="col-md-3 order-md-1 order-0">
                            <div className="vertical-trending border-radius box-shadow mt-3 mt-md-0">
                                <h5 className="color-black">Trends for you</h5>
                                <hr />
                                <ul>
                                    <li>
                                        <a href="">#programming</a>
                                        <h5>213k Tweets</h5>
                                    </li>
                                    <li>
                                        <a href="">#devchallenges</a>
                                        <h5>213k Tweets</h5>
                                    </li>
                                    <li>
                                        <a href="">#frontend</a>
                                        <h5>213k Tweets</h5>
                                    </li>
                                    <li>
                                        <a href="">#helsinki</a>
                                        <h5>213k Tweets</h5>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <MenuClone />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Explore;