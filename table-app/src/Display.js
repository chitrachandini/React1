import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
const styles ={
    card:{
        backgroundColor: 'lightblue',
        width:400,
        height:200
    }
}
const Display = (props) => {
    const {displayData} = props;
    const {classes} = props;
    const displayInfo = displayData.map(info=> {
        return(
            <div>
            <p>{info.title}</p>
            <p>{info.body}</p>
            <p>{info.userId}</p>
            <p>{info.id}</p>
            </div>
        )
    })
    return(
        <div>
        <Card className= {classes.card} > 
        <CardContent>
            <Typography>{displayInfo}</Typography>
         </CardContent>
     </Card>
        </div>
    )
}
export default withStyles(styles)(Display);
