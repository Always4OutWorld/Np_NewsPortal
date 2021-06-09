import React from 'react';
import {
    Grid
} from '@material-ui/core';
import {
    ArrowBack
} from '@material-ui/icons';

const ReadLater = () => (
    <Grid container className="w3-padding">
        <Grid item xs={12}>
        <a href="/"><ArrowBack />Back to home</a>
        </Grid>
        <Grid item xs={12}>
            <Grid container>
                k
            </Grid>
        </Grid>
    </Grid>
);

export default ReadLater;
