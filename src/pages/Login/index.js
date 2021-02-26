import React, {useEffect} from 'react'
import './style.css'

export default function Login() {

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

    const changeSignUp = () => {
        console.log("Hello")
        if(headerSignIn && headerSignUp && contentSignIn && contentSignUp){
            headerSignIn.classList.remove('active');
            headerSignUp.classList.add('active');
            
            contentSignIn.classList.remove('active');
            contentSignUp.classList.add('active');            
        }
     }
     const changeSignIn = () => {
        if(headerSignIn && headerSignUp && contentSignIn && contentSignUp){
            headerSignUp.classList.remove('active');
            headerSignIn.classList.add('active');
            
            contentSignUp.classList.remove('active');
            contentSignIn.classList.add('active');          
        }
        console.log("Helo")
     }

    return (
        <div className="wrapper">
            <div className="form">
                <form>
                    <div className="tab-header">
                        <div id="signIn" onClick={() => changeSignIn()} className="active">Sign In</div>
                        <div id="signUp" onClick={() => changeSignUp()}>Sign Up</div>
                    </div>
                    <div className="tab-content">
                        <div id="signIn-body" className="tab-body active">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control mt-2" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control mt-2" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group form-check mt-3">
                                <input type="checkbox" className="form-check-input" id="check" />
                                <label className="form-check-label" htmlFor="check">Remember me</label>
                            </div>
                            <div className="form-group mt-4">
                                <button type="button" className="btn btn-primary">Sign In</button>
                            </div>
                        </div>
                        <div id="signUp-body" className="tab-body">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Re-enter your password..." />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email..." />
                            </div>
                            <div className="form-group mt-4">
                                <button type="button" className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
