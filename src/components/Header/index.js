import React from 'react';
import Logo from './components/Logo';
import Menu from './components/Menu';
import UserControl from './components/UserControl';

function Header(props) {
    return (
        <nav className="box-shadow">
            <div className="container">
                <div className="row navigation p-md-0 pt-3 pb-3">
                    <Logo />
                    <Menu />
                    <UserControl />
                </div>
            </div>
        </nav>
    );
}

export default Header;
