import React, {useEffect,useState} from 'react';
import Footer from '../../components/Footer';
import MenuClone from '../../components/Main/components/MenuClone';
import Posts from '../../components/Main/components/Posts';

const Explore = (props) => {

    const [data, setData] = useState({
        value: 1,
        status: 'Everyone can reply'
    })

    const [dataImg, setDataImg] = useState([]);

    // Function change status
    const changeStatus = (value) => {
        if(value === 1){
            setData({
                value: 1,
                status: 'Everyone can reply',
            })
        }else{
            setData({
                value: 2,
                status: 'People can reply',
            })
        }
        document.querySelector('.post-form-panel').classList.remove('active');
    }

    useEffect(() => {
        document.title = "Explore"
    }, []);

    // Function hidden menu status
    const clickHidden = () => {
        document.querySelector('.post-form-panel').classList.toggle('active');
    }

    // Function upload images
    const changeFile = (e) => {
        let images = Array.from(e.target.files)

        setDataImg( dataImg =>
            [
                ...dataImg,
                ...images.map((item,index) => {
                    return {
                        name: item.name,
                        url: URL.createObjectURL(item),
                        file: item,

                    }
                })
            ]
        )

    }

    // Function show images
    const imageShow = () => {
        return dataImg.map((item,index) => {
            return <div key={index} className="image-contaniner d-flex position-relative">
                        <img src={item.url} alt='image' />
                        <span className="position-absolute image-contaniner-remove" onClick={() => {deleteImage(index)}}>X</span>
                    </div>
        })
    }

    // Function delete image
    const deleteImage = (index) => {
        setDataImg(
            dataImg.filter((item, idx) => idx !== index)
        );
    }

    return (
        <div>
            <div className="main">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-9 order-md-0 order-1">
                            <div className="post-form border-radius box-shadow mt-md-0 mt-3">
                                <h5 className="color-black">Tweet something</h5>
                                <hr />
                                <div className="post-comment-box d-flex flex-wrap">
                                    <div className="user-img">
                                        <img className="border-radius" src="images/user.jpg" alt="Image of User" />
                                    </div>
                                    <div className="form-group flex-fill w-50 border-radius overflow-hidden">
                                        <div className="input-group">
                                            <textarea className="form-control shadow-none py-3" cols={30} rows={3} placeholder="What's something?" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="post-form-control d-flex flex-wrap mt-3">
                                    <div className="post-form-control-select d-flex flex-wrap">
                                        <label htmlFor="inputFile"><i className="bx bxs-image-alt" /></label>
                                        <input id="inputFile" type="file" multiple className="form-control d-none" accept="image/*" onChange={changeFile}/>
                                        
                                        <div className="post-form-control-comunity mx-3">
                                            {/* Show status clicked and hidden menu status */}
                                            <span className="status border-radius" onClick={() => clickHidden()}>
                                                <i className="bx bx-globe" /> {data.status}
                                            </span>
                                            <div className="user-panel post-form-panel box-shadow border-radius">
                                                <h5 className="color-black">Who can reply?</h5>
                                                <h6>Choose who can reply to this Tweet?</h6>
                                                {/* Click change status */}
                                                <ul>
                                                    <li>
                                                        <a href='#' onClick={() => {changeStatus(1)}}><i className="bx bx-globe"/> Everyone</a>
                                                    </li>
                                                    <li>
                                                        <a href='#' onClick={() => {changeStatus(2)}}><i className="bx bxs-group" /> People you follow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-form-control-btn flex-fill w- text-end">
                                        <button className="btn btn-post-form btn-border-radius">Tweet</button>
                                    </div>
                                </div>
                                {/* Create images */}
                                <div className="row d-flex mt-3 flex-wrap justify-content-start">
                                    {imageShow()}
                                </div>
                            </div>
                            
                            <Posts /></div>
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