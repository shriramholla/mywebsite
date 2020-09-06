import React from 'react';
import './Title.css';

const title = (props) => (
    <div className="Title">
        {props.children}
        <div className="border"></div>
    </div>
);

export default title;