import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import MenuClone from '../../components/Main/components/MenuClone';
import Posts from '../../components/Main/components/Posts';
import VerticalMenu from '../../components/Main/components/VerticalMenu';

const Bookmark = () => {

    useEffect(() => {
        document.title = "Bookmark"
    }, []);

    return (
        <div>
            <div className="main">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <VerticalMenu />
                        </div>    
                        <div className="col-md-9">
                            <div className="post-comment-form post-search-form box-shadow border-radius overflow-hidden d-flex flex-wrap mt-md-0 mt-4 align-items-center">
                                <label className="input-group-text" for="inputGroupFile01"><i class='bx bx-search' ></i></label>
                                <input type="text" className="form-control shadow-none py-3 w-50 flex-fill" placeholder="Search" />
                                <input type="file" className="form-control d-none" id="inputGroupFile01" />
                                <div className="post-search-btn-contain">
                                    <button className="btn btn-border-radius btn-post-form btn-post-search">Search</button> 
                                </div>
                            </div>
                            <Posts />
                        </div>
                        <MenuClone />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Bookmark;