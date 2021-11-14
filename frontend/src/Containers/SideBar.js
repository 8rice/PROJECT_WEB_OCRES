import React from 'react';

export default class Sidebar extends React.Component {

    render() {
        return (
            <div className="SideBar">
                <i className="fas fa-bars"></i>
                <i className="fas fa-home selected"></i>
                <i className="fas fa-chart-bar"></i>
                <i className="fas fa-user"></i>
                <i className="fas fa-cog"></i>
            </div>
        );
    }
}
