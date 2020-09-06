import React from 'react';
import GIF from '../../GIF/GIF';
import Box from '../../UI/ContainerBox/Box'
import './Project.css'
import Heading from '../../UI/ContainerBox/Heading/Heading'
import Description from '../../UI/ContainerBox/Description/Description'

const project = (props) => {
    return (
        <div className="Project">
            <Box>
            <Heading title={props.title}><span>{props.date}</span></Heading>
            <Description>{props.children}</Description>     
            <GIF id="image" source={props.source}/>
            </Box>
        </div>
    )
}

export default project;