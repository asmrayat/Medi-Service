import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Image } from 'react-bootstrap';
import './Login.css'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hook/useAuth';



const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const { signInUsinggoogle, user, logout } = useAuth();

    const handleemail = e => {

        setEmail(e.target.value);

        // e.preventDefault();
    }
    const handlepass = e => {
        setPass(e.target.value);
    }
    const handlelogin = e => {
        e.preventDefault();
    }

    signInWithEmailAndPassword(auth, email, pass)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            setError("Password Wrong,try again!!!")
        })

    return (
        <div >
            {user.email ?
                <div className="fstcom">
                    <div className="d-flex justify-content-center mb-5">
                        <h1>User Profile</h1>
                    </div>
                    <div className="d-flex justify-content-center">

                        <Image className="imge" src={user.photoURL} fluid />
                        <div className="mx-5 mt-5">
                            <h1 >{user.displayName}</h1>
                            <h3>Email: {user.email}</h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={logout}>logout</button>
                    </div>
                </div>

                :

                // onSubmit={handlelogin}
                <div className="container overflow-hidden">
                    <div className="row gx-5">
                        <div className="col-md-6 col-12">
                            <div className="p-3  "><Image className=" loginImg d-flex align-items-center img-fluid" src="TaeAugust19.jpg" /> </div>
                        </div>
                        <div className="col-md-6 col-12 loginFrm">
                            <div className="p-3 ">
                                <form >
                                    <div className="mb-3">

                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onBlur={handleemail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input onBlur={handlepass} type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <p>New to Medi-Service? <Link to="/registration">Sign Up</Link></p>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </form>
                            </div>
                            <div>
                                <h4 className="d-flex justify-content-center">OR</h4>
                            </div>
                            <div className="d-flex justify-content-center" >

                                <button onClick={signInUsinggoogle} type="button" className="btn btn-outline-dark btn-lg mt-5 "> <FontAwesomeIcon icon={faGoogle} /> Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Login;