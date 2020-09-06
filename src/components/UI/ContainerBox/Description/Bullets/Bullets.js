import React from 'react'
import './Bullets.css'

const bullet = (props) => {
    let classes = ["Bullet"]
    if (props.class) {
        classes.push(props.class)
    }
    return(
    <p className={classes.join(' ')}>{props.children}</p>
    );
}

export default bullet;