import React from 'react';
import Item from './Item/Item'
import './Items.css'

const items = (props) => {

    const scroll = (location) => {
        const anchor = document.querySelector(location)
        if (!anchor) return;
        anchor.scrollIntoView({ behavior: 'smooth'})
    }

    return(
        <ul className="Items">
            <Item clicked={() => scroll('#About')}>About me</Item>
            <Item clicked={() => scroll('#Experiences')}>Experience</Item>
            <Item clicked={() => scroll('#Projects')}>Projects</Item>
        </ul>
    );
};

export default items;