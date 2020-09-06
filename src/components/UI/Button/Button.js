import React from 'react';
import './Button.css'

const button = (props) => {
    let classes = [ "Button" ]
    if (props.class) {
        classes.push(props.class)
    }
    return(
    <a href={props.href}><button className={classes.join(' ')}>{props.children}</button></a>
    );
};

export default button