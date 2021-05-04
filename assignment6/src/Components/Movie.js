import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';

class Movie extends Component
{
    render(){
        return(
            <div>
                {this.props.movie}
                length: {this.props.movie.length}
                <MovieList />
            </div>
        )

    }
}

const mapStateToProps = state =>{
    return{
        movie: state.movieData.map(eachMovie =>{
            return(
                <p >
                    <b>Name: </b> <span>{eachMovie.name}</span>
                    <br/>
                    <b>Year: </b> <span>{eachMovie.year}</span>  
                </p>
                
            )
        })
    }
}

const mapDispatchToProps = dispatch =>{
    
}

export default connect(mapStateToProps)(Movie);