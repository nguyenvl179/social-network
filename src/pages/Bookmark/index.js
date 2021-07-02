import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MenuClone from '../../components/Main/components/MenuClone';
import Posts from '../../components/Main/components/Posts';
import Post from '../../components/Main/components/Posts/Post';
import VerticalMenu from '../../components/Main/components/VerticalMenu';

const Bookmark = () => {

    useEffect(() => {
        document.title = "Bookmark"
    }, []);


    const posts = [
    {
        idPost: 1,
        status: "Traveling – it leaves you speechless, then turns you into a storyteller.",
        img: [
            {
                urlImage: 'images/post-image-1.jpg'
            },
            {
                urlImage: 'images/post-image-2.jpg'
            },
            {
                urlImage: 'images/post-image-3.jpg'
            },
            {
                urlImage: 'images/post-image-4.jpg'
            },
            {
                urlImage: 'images/post-image-5.jpg'
            },
            {
                urlImage: 'images/post-image-6.jpg'
            }
        ]
    },
    {
        idPost: 2,
        status: "Traveling – it leaves you speechless, then turns you into a storyteller.",
        img: [
            {
                urlImage: 'images/post-image-1.jpg'
            },
            {
                urlImage: 'images/post-image-2.jpg'
            },
            {
                urlImage: 'images/post-image-3.jpg'
            },
            {
                urlImage: 'images/post-image-4.jpg'
            }
        ]
    },
    {
        idPost: 3,
        status: "Status 123.",
        img: [
            {
                urlImage: 'images/post-image-1.jpg'
            },
            {
                urlImage: 'images/post-image-2.jpg'
            },
            {
                urlImage: 'images/post-image-3.jpg'
            }
        ]
    }
    ];

    return (
        <div>
            <Header />
            <div className="main">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <VerticalMenu />
                        </div>    
                        <div className="col-md-9">
                            <div className="post-comment-form post-search-form box-shadow border-radius overflow-hidden d-flex flex-wrap mb-3 align-items-center">
                                <label className="input-group-text" htmlFor="inputGroupFile01"><i className='bx bx-search' ></i></label>
                                <input type="text" className="form-control shadow-none py-3 w-50 flex-fill" placeholder="Search" />
                                <div className="post-search-btn-contain">
                                    <button className="btn btn-border-radius btn-post-form btn-post-search">Search</button> 
                                </div>
                            </div>
                            {
                                posts.map((item, index) => {
                                    return <Post key={index} idx={item.idPost} status={item.status} img={item.img} />
                                })
                            }
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