import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import PostModal from './PostModal';

const CreatePost = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className='d-flex justify-content-center m-4'>
                <h3>Write a Post</h3>
                <button onClick={user ? () => setShow(true) : navigate('/signIn')} className='btn btn-info text-white ms-4'> Create a post</button>
            </div>
            {show && <PostModal show={show} setShow={setShow}/>}
        </div>
    );
};

export default CreatePost;