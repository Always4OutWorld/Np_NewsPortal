import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import {
    ArrowBack
} from '@material-ui/icons';
import { get } from 'lodash';
import Pagination from '../Common/pagination';
import ArticleView from '../Screens/articleView';


const ReadLater = ({
    allReadLater,
    currentPage,
    splitedArray,
    onClickRemove,
    nextAction,
    prevAction,
    onClickAction
}) => (
    <Grid container className="w3-padding">
        <Grid item xs={12}>
        <a href="/"><ArrowBack />Back to home</a>
        </Grid>
        <Grid item xs={12} className="w3-center">
            <Typography variant="h4">Read List</Typography>
        </Grid>
        <Grid item xs={12}>
        <Grid container>
            {get(allReadLater, 'length') ? 
            (
                <ArticleView    
                    onClickRemove={onClickRemove}
                    readView
                    article={splitedArray[currentPage-1]}
                />
            )
             : (
                <Grid item xs={12} alignItems="center" justify="center" className="w3-padding-64">
                    <Typography variant="h3" style={{
                            textAlign: "center"
                    }} >No Read Later List</Typography>
                </Grid>
            )}
            <Grid item xs={12}>
                {get(allReadLater, 'length')  && (
                    <Pagination
                        selectedPage={currentPage}
                        total={get(allReadLater, 'length')}
                        perPage={5}
                        nextAction={nextAction}
                        prevAction={prevAction}
                        onClickAction={onClickAction}
                    />
                )}
            </Grid>
        </Grid>
        </Grid>
    </Grid>
);

export default ReadLater;
