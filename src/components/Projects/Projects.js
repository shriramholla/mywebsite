import React from 'react';
import Project from './Project/Project';
import './Projects.css';
import Title from '../UI/Title/Title'
import Button from '../UI/Button/Button'
import Bullet from '../UI/ContainerBox/Description/Bullets/Bullets'
import Connected from '../../assets/gifs/ted.gif'
import Ardor from '../../assets/gifs/ardor.gif'
import SafeCrowds from '../../assets/gifs/SDD.gif'
import Convey from '../../assets/gifs/convey.gif'
import ToDoList from '../../assets/gifs/daily.gif'
import ThermalFencing from '../../assets/gifs/thermal.gif'
import Sudoku from '../../assets/gifs/sudoku.gif'
import Coronah from '../../assets/gifs/coronah.gif'
import Titanic from '../../assets/gifs/titanic.jpg'


const projects = (props) => {
    return (
        <div id="Projects">
            <Title>Projects</Title>
            <Project title="Connec-ted" source={Connected} date="March 2020">
                <Bullet>A <span>SMS-Enabled Chatbot</span> that gives direction and 
                    news <span>without</span> the need for an internet connection</Bullet>
                <Bullet>🏆 <span className="Gradient">Winner - People's Choice Award - WinHacks</span></Bullet>
                <Button class="Links" href="https://github.com/shriramholla/connec-ted">GitHub</Button>
                <Button class="Links" href="https://youtu.be/fl96X8ol_u0">Youtube</Button>
            </Project>
            <Project title="Ardour" source={Ardor} date="February 2020">
                <Bullet>A <span>Web Application</span> that gives feedback and suggestions to movies and songs by capturing emotions <span>in real time</span> and 
                        interpreting them using <span>sentiment analysis</span>.</Bullet>
                <Bullet>🎖️ <span className="Gradient">Top 10 - Hack the Valley IV</span></Bullet>
                <Button class="Links" href="https://github.com/shriramholla/Ardor">GitHub</Button>
            </Project>
            <Project title="Safe Crowds" source={SafeCrowds} date="April 2020">
                <Bullet>A program that checks social distancing and creates <span>Dynamic Social Fences</span> and 
                        classifies densely populated zones using <span>Machine Learning Algorithms</span>.</Bullet>
                <Button class="Links" href="https://github.com/shriramholla/Safe-Crowds">GitHub</Button>
            </Project>
            <Project title="Convey" source={Convey} date="January 2020">
                <Bullet>An accessibility <span>Web Application</span> for the physically challenged which enables them to consume information from mediums
                        which they otherwise may not be able to.</Bullet>
                <Button class="Links" href="https://github.com/shriramholla/convey">GitHub</Button>
            </Project>
            <Project title="To Do List" source={ToDoList} date="December 2019">
                <Bullet>A simple To Do List <span>extra customizable</span> with different lists for each situation.</Bullet>
                <Button class="Links" href="https://github.com/shriramholla/dailySched">GitHub</Button>
                <Button class="Links" href="https://bit.ly/2G4wZyR">Website</Button>
            </Project>
            <Project title="Thermal Fencing" source={ThermalFencing} date="April 2020">
                <Bullet>A Concept to help identify positive cases of COVID-19 in public areas.</Bullet>
                <Button class="Links">GitHub</Button>
            </Project>
            <Project title="Sudoku Solver" source={Sudoku} date="November 2019">
                <Bullet>A program that solves any valid combination of a 9x9 Sudoku within a 
                    fraction of a second using recursion and backtracking algorithms</Bullet>
            </Project>
            <Project title="Coro-nah" source={Coronah} date="March 2020">
                <Bullet>A <span>"Visual"</span> cough detector.</Bullet>
                <Button class="Links" href="https://github.com/shriramholla/coroNAH">GitHub</Button>
            </Project>
            <Project title="Kaggle - Titanic Dataset" source={Titanic} date="April 2020">
                <Bullet>Using <span>Support Vector Models</span> and <span>Linear Regression</span> to predict the 
                    survival of passengers on the Titanic</Bullet>
                <Button class="Links">GitHub</Button>
            </Project>

                
        </div>
    )
}

export default projects;