import * as React from 'react';
import './Logo.css';

const logo = require('../../assets/img/logo.png');

export default () => {
    return (
        <div className="loader">
            <img className="p92-logo" src={logo} alt="P92 logo" title="Loading..."/>
        </div>
    );
};
