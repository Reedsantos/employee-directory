import React, { Component } from 'react';
import "../styles/Header.css";

// header is a standalone component
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Click the header "Name" to sort by name and use the search bar to filter employees.</p>
            </div>
        )
    }
}
