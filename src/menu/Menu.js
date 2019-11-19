import React from 'react';
import './Menu.css';

export default () => {
    return (
        <div className="menu-buttons">
            <div className="list-buttons">
                <div className="list-buttons__button">
                    <button>Mine ()</button>
                    <button>To Approve ()</button>
                    <button>All ()</button>
                </div>
                <div className="list-buttons__button">
                    <div>
                        <i className="fas fa-sun"></i>
                        <i className="far fa-moon"></i>
                    </div>
                    <button className="settings-button">
                        <i className="fas fa-bars icons-status menu-icon"></i>
                    </button>
                    {/* <member></member> */}
                </div>
            </div>
        </div>
    );
};
