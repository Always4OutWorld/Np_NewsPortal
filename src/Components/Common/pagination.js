import React from 'react';
import {
    Grid,
    IconButton
} from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

const renderN = (label, onClick) => (
    <Grid item xs={1} className="w3-center">
            <IconButton onClick={() => onClick(label)}>{label}</IconButton>
    </Grid>
);


const renderPrevCount = (total, current, onClick) => {
    if (total > 1) {
        if (current > 1) {
            let array = []
            let a = 1;
            if (current > 5) {
                a = current - 4
            }
            for (let i = a; i < current; i++) {
                array.push(renderN(i, onClick))
            }
            return array;
        }
    }
    return null;
}

const renderNextCount = (total, current, onClick) => {
    if (total > 1) {
        if (total > current) {
            let array = []
            let a = total;
            if ((total-current) > 5) {
                a = current + 5
            }
            for (let i = current + 1; i < a; i++) {
                array.push(renderN(i, onClick))
            }
            return array;
        }
    }
    return null;
}

const Pagination = ({
    selectedPage,
    total,
    perPage,
    nextAction=()=>{},
    prevAction=()=>{},
    onClickAction=()=>{}
}) => {
    const totalPages = parseInt(total/perPage, 10);

    return (
       <Grid container className="w3-margin-top">
           <Grid item xs={12}>
                <Grid container justify="center" alignContent="center" alignItems="center">
                    <Grid item xs={1} className="w3-center">
                        <IconButton disabled={selectedPage === 1} onClick={prevAction}><ArrowBack /></IconButton>
                    </Grid>
                    {renderPrevCount(totalPages, selectedPage, onClickAction)}
                    <Grid item xs={2} className="w3-center">
                        <IconButton style={{
                            background: 'cornflowerblue'
                        }}>{selectedPage}</IconButton>
                    </Grid>
                    {renderNextCount(totalPages, selectedPage, onClickAction)}
                    <Grid item xs={1} className="w3-center">
                        <IconButton disabled={selectedPage === totalPages} onClick={nextAction}><ArrowForward /></IconButton>
                    </Grid>
                </Grid>
           </Grid>
       </Grid>
    );
}

export default Pagination;