import { Typography } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
const Download = ()=>{
    return(
        <div className = "container">
            <Card >
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">Downloads</Typography>
                    <Typography ><b>Special Note</b></Typography><br/>
                    <Typography>Due to changes on the sites that MoviePoster uses to collect data, all versions 1.0.1.8 and below are no longer able to reliably download poster data. These versions are now considered legacy and will no longer be supported. You can still download them if you wish from the <a href="https://www.movieposterapp.com/archive.html"> Archieve Page</a></Typography><br/>
                    <Typography><a href = "MoviePoster (Version 2.2.0.1 - April 7, 2016)">MoviePoster(Version 2.2.0.1 - April 7, 2016)</a></Typography>
                    <Typography >This is the lastest 'stable' build. However for best compatibility, see the dev builds below.</Typography>
                    <Typography>New Features Include</Typography>
                    <Typography><li>Option to render posters internally at 4k resolution</li><li>Ability to change default fonts and colors</li><li>Fixed an issue with the 'Start with Windows' feature</li><li>WebView display option to display posters via a web browse</li><li>Download either as an .msi installer, or 7-Zip archive</li></Typography>
                    <Typography><b>Note:You must uninstall old versions before installing 2.2.0.1</b></Typography>
                    <Typography><b>msi installer:</b><Button variant="contained" >Download</Button></Typography><br/>
                    <Typography><b>7-Zip Archive:</b><Button variant="contained" >Download</Button></Typography><br/><br/>
                    <Typography><b>2.3.0.1_Dev_(1-7-2018).7z</b></Typography>
                    <Typography>New Features Include</Typography>
                    <Typography><li>Updates to the Plex Plugin</li><li>Updates to WebView Layouts</li><li>Additional media flag icons added to the default theme</li><li> Ability to mark posters as "protected"</li></Typography>
                    <Button variant="contained" >Download</Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
export default Download;