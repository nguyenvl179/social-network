import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

export default function index() {
    return (
        <div>
            <Header />
            <div className="main">
                <div className="container">
                    <h3 className="mt-5">User Infomation</h3> 
                    <div className="setting-contain border-radius box-shadow mt-2">
                        <ul className="menu-setting-contain">
                            <li className="border-radius">
                                <i class='bx bxs-user'></i> Change password
                            </li>
                            <li className="border-radius">
                                <i class='bx bxs-chevron-right'></i> Change password
                            </li>
                            <li className="border-radius">
                                <i class='bx bxs-chevron-right'></i> Change password
                            </li>
                            <li className="border-radius">
                                <i class='bx bxs-chevron-right'></i> Change password
                            </li>
                        </ul>
                    </div>
                    <h3 className="mt-5">Setting Account</h3> 
                    <div className="setting-contain border-radius box-shadow mt-2">
                        <ul className="menu-setting-contain">
                            <li className="border-radius">
                                <i class='bx bxs-chevron-right'></i> Change password
                            </li>
                            <li className="border-radius">
                                <i class='bx bxs-chevron-right'></i> Change password
                            </li>
                            <li className="border-radius">
                                <i class='bx bxs-chevron-right'></i> Change password
                            </li>
                            <li className="border-radius">
                                <i class='bx bxs-chevron-right'></i> Change password
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
