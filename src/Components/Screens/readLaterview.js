import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import {
    ArrowBack
} from '@material-ui/icons';
import { get } from 'lodash';

const ReadLater = ({
    allReadLater,
}) => (
    <Grid container className="w3-padding">
        <Grid item xs={12}>
        <a href="/"><ArrowBack />Back to home</a>
        </Grid>
        <Grid item xs={12}>
        <Grid container>
            {!get(allReadLater, 'length') ? (
                 <Grid item xs={12}>ggg</Grid>
            ) : (
                <Grid item xs={12} alignItems="center" justify="center" className="w3-padding-64">
                    <Typography variant="h3" style={{
                            textAlign: "center"
                    }} >No Read Later List</Typography>
                </Grid>
            )}
        </Grid>
        </Grid>
    </Grid>
);

export default ReadLater;
