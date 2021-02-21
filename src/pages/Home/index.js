import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import MenuClone from '../../components/Main/components/MenuClone';
import Posts from '../../components/Main/components/Posts';
import ProfileContainer from '../../components/Main/components/ProfileContainer';
import VerticalMenu from '../../components/Main/components/VerticalMenu';

function Home(props) {
    useEffect(() => {
        document.title = "Home"
    }, []);

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
                        <MenuClone />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
