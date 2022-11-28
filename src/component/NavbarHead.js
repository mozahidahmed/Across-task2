import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const NavbarHead = () => {

    const [user] = useAuthState(auth);
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand fw-bold" to="/">MindBook</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           {
                            user ?  <span className='fw-bold' onClick={() => signOut(auth)}>Logout</span>:  <Link to='/signIn'
                            className="nav-link active" aria-current="page" >Log In</Link>
                           }
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarHead;