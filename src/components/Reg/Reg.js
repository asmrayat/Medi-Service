import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Image } from 'react-bootstrap';
import './Reg.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hook/useAuth';

const Reg = () => {

    const auth = getAuth();
    const { signInUsinggoogle, user, logout } = useAuth();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [successful, setSuccessful] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleReg = e => {
        e.preventDefault();
        console.log(email, pass);
        if (pass.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        isLogin ? processlogin(email, pass) : creatNewUser(email, pass);

    }
    const processlogin = (email, pass) => {

        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError({})
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const handleemail = e => {

        setEmail(e.target.value);

        // e.preventDefault();
    }
    const handlepass = e => {
        setPass(e.target.value);
    }
    const toggoleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const creatNewUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                setSuccessful('successfully registered,Go to Sign in page')

            })
            .catch(error => {
                setError("User already exists,Please Sign In");
            })

    }

    return (
        <div onSubmit={handleReg}>
            {
                user.email ?
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
                    <div className="container overflow-hidden">
                        <div className="row gx-5">
                            <div className="col-md-6 col-12">
                                <div className="p-3  "><Image className=" loginImg d-flex align-items-center img-fluid" src="TaeAugust19.jpg" /> </div>
                            </div>
                            <div className="col-md-6 col-12 loginFrm">
                                <div className="p-3 ">
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input onBlur={handleemail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input onBlur={handlepass} type="password" className="form-control" id="exampleInputPassword1" required />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input onChange={toggoleLogin} className="form-ckeck-input" type="checkbox" id="gridChech1" /><label className="form-check-label" htmlFor="gridCheck1">Already Registered?</label>
                                        </div>
                                        <div className="row mb-3 text-danger">
                                            {error}
                                        </div>
                                        <div className="row mb-3 text-success">
                                            {successful}
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign {isLogin ? "In" : "Up"}</button>
                                    </form>
                                </div>
                                <div>
                                    <h4 className="d-flex justify-content-center">OR</h4>
                                </div>
                                <div className="d-flex justify-content-center" >

                                    <button onClick={signInUsinggoogle} type="button" className="btn btn-outline-dark btn-lg mt-5 "> <FontAwesomeIcon icon={faGoogle} /> Sign {isLogin ? "In" : "Up"}</button>
                                </div>
                            </div>
                        </div>
                    </div>}
        </div>
    );
};

export default Reg;