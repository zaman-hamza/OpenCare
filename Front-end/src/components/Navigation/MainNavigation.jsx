import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../Elements/Backdrop';

import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';

import './MainNavigation.css';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button
                    className="main-navigation__menu-btn"
                    onClick={openDrawer}
                >
                    <img src={menu} alt="hamburger" />
                </button>
                <div className="main-navigation__container">
                    <img
                        src={logo}
                        alt="logo"
                        className="main-navigation__logo"
                    />
                    <h2 className="main-navigation__title">
                        <Link to="/">OpenCare</Link>
                    </h2>
                </div>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;
