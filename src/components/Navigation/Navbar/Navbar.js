import React from 'react';
import './Navbar.css';
import Items from '../Items/Items';
import ToggleDrawer from '../SideDrawer/ToggleDrawer/ToggleDrawer';

const toolbar = (props) => {

    const scroll = () => {
        const anchor = document.querySelector('#Welcome')
        if (!anchor) return;
        anchor.scrollIntoView({ behavior: 'smooth'})
    }
    return(
    <header className="Navbar">
        <ToggleDrawer clicked={props.toggleDrawer}/>
        <p onClick={scroll}>shriram holla</p>

        <nav className="DesktopOnly">
            <Items/>
        </nav>
    </header>
    );
};

export default toolbar;