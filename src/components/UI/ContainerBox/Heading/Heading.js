import React from 'react';
import './Heading.css'

const Heading = (props) => (
    <div>
        <div className="Heading">
                <p className="TopicTitle">{props.title}</p>
                <p className="Date">{props.children}</p>
            </div>
    </div>
)

export default Heading