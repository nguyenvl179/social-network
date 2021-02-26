import React, {useState} from 'react';
import Post from './Post';

const Posts = () => {

    const [img, setImg] = useState({
        name: '',
        url: ''
    });

    const changeFile = (e) => {
        
        setImg({
            name: e.target.files[0].name,
            url: URL.createObjectURL(e.target.files[0])
        })
        console.log('run')
        document.querySelector('.img-comment').classList.add('img-show');
    }

    const deleteImage = () => {
        document.querySelector('.img-comment').classList.remove('img-show');
    }

    const showImage = () => {
        return <div className="image-contaniner d-flex position-relative img-comment">
                    <img src={img.url} alt={img.name} />
                    <span className="position-absolute image-contaniner-remove" onClick={() => {deleteImage()}}>X</span>
            </div>
    }

    return (
        <div>
            <Post img={img} changeFile={changeFile} showImage={showImage}/>
        </div>
    );
};

export default Posts;