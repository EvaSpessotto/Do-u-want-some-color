import React, { Component } from 'react';
import '../styles/style.css';

class Circle extends Component {
    render() {
        return (
            <div>
                <svg width="100vh" height="99vh">
                    <circle className="circle" cx="50%" cy="50%" r="80"/>
                </svg>
            </div>
        );
    }
}

export default Circle;