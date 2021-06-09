import React from 'react';
import {
  Grid, Typography
} from '@material-ui/core';

function Test() {
  return (
   <Grid container>
     <Grid item xs={12} className="w3-center">
       <img className="imgerror" style={{
             width: "100px",
             height: "auto"         
       }}  alt="" src="https://31.media.tumblr.com/2e8986a1b1c062623cea1b9edaddcc52/tumblr_mup3qzOPsX1rk0k2jo1_500.gif" />
     </Grid>
     <Grid item xs={12}>
        <Typography className="w3-center" variant="h2">404</Typography>
     </Grid>
     <Grid item xs={12}>
        <Typography className="w3-center" variant="h4">Error Page, Not Found</Typography>
     </Grid>
     <Grid item xs={12}>
     <a href="/"><Typography className="w3-center" variant="body2">Back to Home Page</Typography></a>
     </Grid>
   </Grid>
  );
}

export default Test;
