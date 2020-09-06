import React from 'react';
import './About.css';
import Image from '../../assets/images/face.jpg';
import Title from '../UI/Title/Title'
import Button from '../UI/Button/Button'
import Resume from '../../assets/pdfs/myresume.pdf'

const about = (props) => (
    <div id="About">
        <Title>About Me</Title>
        <div className="Outer">
            <div className="Inner">
                <img className="Image" src={Image} alt=""/>

                <div className="Info">
                    
                    <p className="Text">I'm a <span>Second Year Computer Science </span> 
                        Student at the <span>University of Waterloo</span>. 
                        I am a Passionate Programmer who enjoys messing around and discovering
                        new stuff in the coding world! I am fascinated by <span>AI</span> and <span>Machine Learning</span> and 
                        love getting my hands dirty with random datasets. Looking for Internship 
                        Opportunities for <span>Winter 2021</span>.</p>
                    <Button class="Resume" href={Resume}>View My Resume</Button>
                </div>
                
            </div>
        </div>
        
    </div>
)

export default about;