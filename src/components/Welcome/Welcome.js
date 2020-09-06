import React, { Component } from 'react';
import './Welcome.css'
import Button from '../UI/Button/Button'

class welcome extends Component {
    
    state = {
        tags: ['🧠 AI Enthusiast', 
                '💻 Software Developer', 
                '🤖 Passionate Programmer', 
                '🏀 Basketball Lover'],
        index: 0
    }

    componentDidMount() {
        this.tagToggler();
    }

    tagToggler = () => {
        const run = setInterval(() => {
            let i = this.state.index + 1
            if (i >= this.state.tags.length) {
                i = 0;
            }
            this.setState({index: i})
        }, 2000);
    }
    

    render() {
        return (
            <div id="Welcome">
                <p className="Hey"><span className="Emoji">&#128075;</span>Hey There!</p>
                <p className="Name"><span>I'm</span> Shriram Holla.</p>
                <p className="Tag">{this.state.tags[this.state.index]}</p>
                <Button class="Hire" href="mailto:sholla@uwaterloo.ca">Let's Talk</Button>
                <div className="Logos">
                    <a href="mailto:sholla@uwaterloo.ca"><i className="fas fa-envelope fa-3x Logo"></i></a>
                    <a href="https://github.com/shriramholla"><i className="fab fa-github fa-3x Logo"></i></a>
                    <a href="https://linkedin.com/in/shriramholla"><i className="fab fa-linkedin fa-3x Logo"></i></a>
                    <a href="https://medium.com/@bab.shriram"><i className="fab fa-medium-m fa-3x Logo"></i></a>
                </div>
            </div>
        )
    }
}

export default welcome;