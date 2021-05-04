import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import '../App.css'
const ContactUs = () =>{
    return(
        <div className="container cards">
            <Card className="cardStyles">
                <CardContent>
                    <Typography className="cardTitle">
                        <p><b>Location</b></p>
                    </Typography>
                    <Typography><p>Chennai</p>Tamilnadu state</Typography>
                </CardContent>
            </Card>
            <Card className="cardStyles">
                <CardContent>
                    <Typography className="cardTitle">
                        <p><b>Contact Number</b></p>
                    </Typography>
                    <Typography><b>9849033552</b></Typography>
                    <Typography><p>If you have any queries please contact to this number</p></Typography>
                </CardContent>
                <Button variant="contained" color="primary">Call Now</Button>
            </Card>
            <Card className="cardStyles">
                <CardContent>
                    <Typography className="cardTitle">
                        <p><b>Email</b></p>
                    </Typography>
                    <Typography><b>aadhya01@xyz.com</b></Typography>
                    <Typography><p>If you have any queries please contact  above given mail</p></Typography>
                    <Button variant="contained" color="primary">Send Email</Button>
                </CardContent>
            </Card>
        </div>
    )
}
export default ContactUs;