import React from 'react';
import './SideDrawer.css'
import Items from '../Items/Items'
import Aux from '../../../hoc/Aux'
import Image from '../../../assets/images/myimg.jpg'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <img src={Image} alt=""></img>
                <nav>
                    <Items/>
                </nav>
                <p>© 2020 Shriram Holla</p>
            </div>
        </Aux>
    );

};

export default sideDrawer;