import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { history } from '../../App';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MenuClone from '../../components/Main/components/MenuClone';
import Posts from '../../components/Main/components/Posts';
import Post from '../../components/Main/components/Posts/Post';
import ProfileContainer from '../../components/Main/components/ProfileContainer';
import VerticalMenu from '../../components/Main/components/VerticalMenu';

function Home(props) {

    useEffect(() => {
        document.title = "Home"
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
                <ProfileContainer />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                           <VerticalMenu />
                        </div>    
                        <div className="col-md-9">
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
}

export default Home;
