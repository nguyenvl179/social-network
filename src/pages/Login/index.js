import React from 'react'

export default function Login() {

    const changeSignUp = () => {
        document.querySelector('.form .tab-header #signIn').classList.remove('active');
        document.querySelector('.form .tab-header #signUp').classList.add('active');
        
        document.querySelector('.form .tab-content #signIn-body').classList.remove('active');
        document.querySelector('.form .tab-content #signUp-body').classList.add('active');
     }
     const changeSignIn = () => {
        document.querySelector('.form .tab-header #signUp').classList.remove('active');
        document.querySelector('.form .tab-header #signIn').classList.add('active');
        
        document.querySelector('.form .tab-content #signUp-body').classList.remove('active');
        document.querySelector('.form .tab-content #signIn-body').classList.add('active');
     }

    return (
        <div className="wrapper">
            <div className="form">
                <form>
                    <div className="tab-header">
                        <div id="signIn" onclick={changeSignIn} className="active">Sign In</div>
                        <div id="signUp" onclick={changeSignUp}>Sign Up</div>
                    </div>
                    <div className="tab-content">
                        <div id="signIn-body" className="tab-body active">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="check" />
                                <label className="form-check-label" htmlFor="check">Remember me</label>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary">Sign In</button>
                            </div>
                        </div>
                        <div id="signUp-body" className="tab-body">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Re-enter your password..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email..." />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
