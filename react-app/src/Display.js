/*import React from 'react'
import PropTypes from 'prop-types'
const Display = (props) => {
    const {firstName,lastName,age,strOrNum} = props;
    return(
        <div>
           <p>{firstName}</p>
           <p>{lastName}</p>
           <p>{age}</p>
            <p>{strOrNum}</p>
        </div>
    )
}
Display.propTypes = {
    firstName:PropTypes.string,
    lastName:PropTypes.string,
    age:PropTypes.number,
    strOrNum:PropTypes.oneOfType([PropTypes.number,PropTypes.string])
}
export default Display;*/
import React from 'react'
import PropTypes from 'prop-types'
const Display = (props) => {
    const {empId,name,age,city,designation} = props;
    return(
        <div>
           <p onMouseOver={() => {alert(name)}}>{empId}</p>
           <p>{name}</p>
           <p>{age}</p>
           <p>{city}</p>
           <p>{designation}</p>
        </div>
    )
}
Display.propTypes = {
    empId:PropTypes.number,
    name:PropTypes.string,
    age:PropTypes.number,
    city:PropTypes.string,
    designation:PropTypes.string
}
export default Display;