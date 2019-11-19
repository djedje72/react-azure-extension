import React from 'react';
import './Settings.css';

export default () => {
    return (
        <div className="settings">
            <div>
                <div className="title">Domain VSTS</div>
                <span>http(s)://dev.azure.com/</span>
                <input type="text" name="name" placeholder="my domain"/>
            </div>
            <button type="button">
                <span>Login</span>
            </button>
            <span className="error">Bad domain URL</span>
        </div>
    );
};
