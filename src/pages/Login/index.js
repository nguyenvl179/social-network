import React, { useEffect } from 'react'
import './style.css'
import firebase from '../../firebase/config'
import { auth, db } from '../../firebase/config'
import { message } from 'antd';
import { addDocument } from '../../firebase/services/servicesCommon';
import { Redirect, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const history = useHistory();

    let headerSignIn = null;
    let headerSignUp = null;
    let contentSignIn = null;
    let contentSignUp = null;

    useEffect(() => {
        headerSignIn = document.querySelector('.form .tab-header #signIn');
        headerSignUp = document.querySelector('.form .tab-header #signUp');

        contentSignIn = document.querySelector('.form .tab-content #signIn-body');
        contentSignUp = document.querySelector('.form .tab-content #signUp-body');

    }, [])

    if(localStorage.getItem("loginInfo")){
        history.push("/home");
    }

    const changeSignUp = () => {
        if (headerSignIn && headerSignUp && contentSignIn && contentSignUp) {
            headerSignIn.classList.remove('active');
            headerSignUp.classList.add('active');

            contentSignIn.classList.remove('active');
            contentSignUp.classList.add('active');
        }
    }
    const changeSignIn = () => {
        if (headerSignIn && headerSignUp && contentSignIn && contentSignUp) {
            headerSignUp.classList.remove('active');
            headerSignIn.classList.add('active');

            contentSignUp.classList.remove('active');
            contentSignIn.classList.add('active');
        }
    }

    const signInGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        auth
            .signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                let additionalUserInfo = result.additionalUserInfo;

                let userObj = {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }

                localStorage.setItem("loginInfo", JSON.stringify(userObj))

                if(additionalUserInfo?.isNewUser){
                    addDocument("users", userObj)
                }

                message.success("Đăng nhập thành công")

                setTimeout(() => {
                    history.push("/home"); 
                 }, 2000);

            }).catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

                message.error(errorMessage)
            });
    }

    const signIn = (e) => {
        e.preventDefault();
        
        let email = e.target[0].value;
        let password = e.target[1].value;

        if(email == "" || password == ""){
            message.error("Chưa nhập tài khoản và mật khẩu");
            return;
        }

        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;

                let userObj = {
                    uid: user.uid,
                    name: (user.displayName) ? user.displayName : user.email.charAt(0),
                    email: user.email,
                    image: (user.photoURL) ? user.photoURL : "/images/user.jpg"
                }

                localStorage.setItem("loginInfo", JSON.stringify(userObj))
                message.success("Đăng nhập thành công");

                setTimeout(() => {
                   history.push("/home"); 
                }, 2000);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

                message.error(errorMessage)
            });
    }

    const signUp = (e) => {
        e.preventDefault();

        let email = e.target[0].value;
        let password = e.target[1].value;
        let rePassword = e.target[2].value

        if(email == "" || password == "" || rePassword == ""){
            message.error("Chưa nhập tài khoản và mật khẩu");
            return;
        }
        if(password !== rePassword) {
            message.error("Password không trùng nhau");
            return;
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                let additionalUserInfo = userCredential.additionalUserInfo;

                let userObj = {
                    uid: user.uid,
                    name: (user.displayName) ? user.displayName : user.email.charAt(0),
                    email: user.email,
                    image: (user.photoURL) ? user.photoURL : "/images/user.jpg"
                }

                localStorage.setItem("loginInfo", JSON.stringify(userObj))

                if(additionalUserInfo?.isNewUser){
                    addDocument("users", userObj);
                }

                message.success("Đăng ky thành công");

                setTimeout(() => {
                    history.push("/home"); 
                 }, 2000);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

                message.error(errorMessage)
            });
    }

    return (
        <div className="wrapper">
            <div className="form">
                <div className="tab-header">
                    <div id="signIn" onClick={() => changeSignIn()} className="active">Sign In</div>
                    <div id="signUp" onClick={() => changeSignUp()}>Sign Up</div>
                </div>
                <div className="tab-content">
                    <form onSubmit={signIn}>
                        <div id="signIn-body" className="tab-body active">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="username" className="form-control mt-2" id="email" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control mt-2" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group form-check mt-3">
                                <input type="checkbox" className="form-check-input" id="check" />
                                <label className="form-check-label p-2" htmlFor="check">Remember me</label>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-secondary">Sign In</button>
                            </div>
                            <hr className="mt-4" />
                            <h4 className="text-center">Sign in with</h4>
                            <div className="signIn-Other">
                                <div className="form-group mt-4">
                                    <button type="button" className="btn btn-danger" onClick={() => signInGoogle()}>Google</button>
                                </div>
                                <div className="form-group mt-4">
                                    <button type="button" className="btn btn-primary">Facebook</button>
                                </div>
                            </div>
                        </div>    
                    </form>
                    
                    <form onSubmit={signUp}>
                        <div id="signUp-body" className="tab-body">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Re-Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Re-enter your password..." />
                            </div>
                            <div className="form-group mt-4">
                                <button type="submit" className="btn btn-secondary">Sign Up</button>
                            </div>
                        </div>    
                    </form>
                </div>
            </div>
        </div>    
    )
}
