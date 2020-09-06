import React, { Component } from 'react';
import './GIF.css'

class gif extends Component {
    render() {
        return (
             <img className="Gif" src={this.props.source} alt=""></img>
        );
    }
};

export default gif;