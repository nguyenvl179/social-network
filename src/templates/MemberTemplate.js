import React from 'react'
import { Route } from 'react-router';
import { Redirect, useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';
import Login from '../pages/Login';

export const MemberTemplate = (props) => {

    let {Component,...restRoute} = props;
    const history = useHistory();

    if(localStorage.getItem("loginInfo")){
        return <Route {...restRoute} render={(propsRoute) => {
            return <div>
                <Component {...propsRoute} />
            </div>
        }}/>        
    }else{
        // history.push("/login");
        return <Redirect to="/login" />
    }
}