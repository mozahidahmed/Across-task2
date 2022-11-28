import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const SignIn = () => {

    const navigate = useNavigate()
    const [resetEmail, setEmail] = useState();
    const [ signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/')
    }
    return (
        <div>
             <div className="wrapper">
                <div className="text-center mt-4 name">
                    Sign In
                </div>
                <form onSubmit={handleSignIn} className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="userName" placeholder="Email"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password"/>
                    </div>
                    <input className="btn mt-3" type="submit" value="Login" />
                </form>
                <div className="text-center fs-6">
                    <p onClick={async() => await sendPasswordResetEmail(resetEmail)} className='text-primary'>Forget password?</p> 
                    <p>Create a new account. Please <Link to='/signUp' >Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;