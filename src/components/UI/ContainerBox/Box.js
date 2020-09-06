import React from 'react';
import './Box.css'

const box = (props) => (
    <div className="Box">
        {props.children}
    </div>
);

export default box;