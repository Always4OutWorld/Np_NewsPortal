import { Grid, Paper, Button, Typography } from '@material-ui/core';
import React from 'react';
import { get } from 'lodash';
import { Forward, AddCircleOutline,  } from '@material-ui/icons';

const ArticleView = ({
    article=[],
    readLater
}) => (
    <Grid container spacing={2}>
        {article.map(each => (
        <Grid item xs={12}>
                <Paper className="articlePaper w3-padding">
                    <Grid container>
                        <Grid item xs={2}>
                            <img
                                className="imageA"
                                alt=''
                                src={get(each, 'thumbnail_standard')}
                                onError={e => {
                                    e.target.src="https://summer.pes.edu/wp-content/uploads/2019/02/default-2.jpg"
                                }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Grid contianer>
                                    <Grid item xs={12}>
                                        <a rel="noreferrer" href={get(each, 'url')} target="_blank" >
                                            <Typography variant="h6">{get(each, 'title')}</Typography>
                                        </a>
                                    </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">{get(each, 'abstract')}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Grid container className="w3-right-align" spacing={3}>
                                <Grid item xs={12}>
                                <a rel="noreferrer" href={get(each, 'url')} target="_blank" >
                                    <Button fullWidth variant="outlined"><Forward />Goto Post</Button>
                                </a>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant="outlined" onClick={readLater} startIcon={<AddCircleOutline />}> Read Later</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
         </Grid>
        ))}
    </Grid>
);

export default ArticleView;
