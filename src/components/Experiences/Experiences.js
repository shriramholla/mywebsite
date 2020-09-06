import React from 'react';
import Title from '../UI/Title/Title'
import './Experiences.css'
import GIF from '../GIF/GIF'
import inventory from "../../assets/gifs/inventory.gif"
import autonet from '../../assets/gifs/autonet.gif'
import Box from '../UI/ContainerBox/Box'
import Heading from '../UI/ContainerBox/Heading/Heading'
import Description from '../UI/ContainerBox/Description/Description'
import Bullet from '../UI/ContainerBox/Description/Bullets/Bullets'

const experience = (props) => (
    <div id="Experiences">
        <Title>Experience</Title>
        <Box>
            <Heading title="Freelance Software Developer">
                April 2020 - <span className="Current">Current</span>
            </Heading>
            <Description>
                <Bullet>Worked closely with clients to collect requirements 
                                    and <span>ensure project quality.</span></Bullet>
                <Bullet>Modified existing software to fix coding errors, <span>improve interfaces</span> and <span>overall efficiency</span>.</Bullet>
                <Bullet>Implemented Machine Learning algorithms like <span>Linear 
                                        Regression</span> and <span>K Nearest Neighbours</span> along 
                                        with <span>computer vision</span> models for advanced and accurate 
                                        object detection with analytics.</Bullet>
            </Description>

            <p className="DemoTitle">Demos</p>
            <div className="Demo">
                <p className="Date">Inventory Management</p>
                <div className="DescBox">
                    <Bullet>A program that uses <span>Computer Vision algorithms</span> to identify and count shoes moving rapidly on a conveyor belt.</Bullet>
                    <Bullet>Improved <span>speed</span> of inventory management by <span>300%.</span></Bullet>
                    <Bullet>Decreased dependency on labour and <span>reduced client's monthly expenses</span> by <span>60%.</span></Bullet>
                </div>
                <GIF source={inventory}/>
            </div>

            <div className="Demo">
                <p className="Date">AutoNET</p>
                <div className="DescBox">
                    <Bullet>An automated <span>AI-as-a-Service</span> that provides end to end <span>Annotation</span>, <span>Training</span>, <span>Validation</span> and <span>Detection</span> of custom objects.</Bullet>
                </div>
                <GIF source={autonet}/>
            </div>
        
        </Box>
    </div>
);

export default experience;