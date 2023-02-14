import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import './MainNav.css';

const MainNavigatio = props => {
    return <MainHeader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
            Lemurian
        </h1>
        <nav>
            ...
        </nav>
    </MainHeader>
}
