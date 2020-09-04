import React from 'react';
import TitleImg from './타이틀5.PNG';
import Menu from './Menu.js';
import './Header.css';


class Header extends React.Component {
    render() {
        return(
            <header>
                <img src={TitleImg} alt="titleImg" id="titleImg"/>
                <Menu />
            </header>
        );
    }
}

export default Header;