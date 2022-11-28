import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SignUp = () => {

    const [ createUserWithEmailAndPassword, user,] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        console.log(user);
    }

    return (
        <div>
            <div className="wrapper">
                <div className="text-center mt-4 name">
                    Sign Up
                </div>
                <form onSubmit={handleSignUp} className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="User Name" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password" />
                    </div>
                    <input className="btn mt-3" type="submit" value="Sign Up" />
                </form>
                <div className="text-center fs-6">
                    <a href="/">Forget password?</a> or <Link to='/signIn'>Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;