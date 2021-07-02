import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import './style.css';

export default function Page404() {
    return (
        <div>
            <div className="container page-404">
                <div className="page-404-content">
                    <p className="text">404 Not Found</p>
                    <NavLink className="btn btn-warning border-radius" to="/home">Back</NavLink>
                </div>
            </div>
        </div>
    )
}
