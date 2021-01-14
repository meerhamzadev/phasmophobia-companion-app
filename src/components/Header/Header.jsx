import React from 'react';
import './Header.css';
import logo from '../../images/logos/logo.png';

export default function Header(){
    return(
        <div className={"app-header"}>
            <div className={"logo"}>
                <img src={logo} className={"phasmophobia-logo"} alt={"Phasmophobia logo"} />
            </div>
            <div className={"description"}>
                Unofficial Phasmophobia Companion App (Journal)
            </div>
        </div>
    )
}
