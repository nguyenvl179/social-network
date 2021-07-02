import React from 'react'
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';

export const AdminTemplate = (props) => {

    let {Component,...restRoute} = props;
    const history = useHistory();

    if(auth.currentUser && auth.currentUser != null){
        return <Route {...restRoute} render={(propsRoute) => {
            return <div>
                <Component {...propsRoute} />
            </div>
        }}/>        
    }else{
        history.push("/login");
    }
}