import React from 'react';
import { Router, Route, Link } from 'react-router-dom';


class Notify extends React.Component {
    render() {
        return (
                <div className="container text-center">
                    <Link to="/" className="btn btn-link">Single Alert</Link>
                </div>

            
        );
    }
}

export default Notify;