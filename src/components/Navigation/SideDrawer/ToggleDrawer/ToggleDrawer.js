import React from 'react';
import './ToggleDrawer.css';

const ToggleDrawer = (props) => (
    <div onClick={props.clicked} className="ToggleDrawer">
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default ToggleDrawer;