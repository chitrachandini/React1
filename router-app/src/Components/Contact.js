import React from 'react';

const Contact = (props) =>{
    console.log(props);

    setTimeout(() => {
        props.history.push('./about')
    }, 4000);

    return(
        <div>
         Contact Us: movie_latest@gmail.com
        </div>
    )
}

export default Contact;