import React, { Component } from 'react';
import { connect } from 'react-redux';
class movieData extends Component {
    render() {
        return(
            <div>
            {this.props.}
            </div>
        )
}
}
const mapStateToProps = state => {
    return{
        counter: counterSelect(state)
    }
}
export default connect(mapStateToProps)(movieData);