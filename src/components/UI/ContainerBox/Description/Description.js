import React from 'react';
import './Description.css'

const description = (props) => (
    <div className="Description">
        {props.children}
    </div>
);

export default description;