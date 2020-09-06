import React from 'react';
import "./Item.css"

const Item = (props) => (
    <li className="Item">
        <p onClick={props.clicked}>{props.children}</p>
    </li>
)

export default Item;