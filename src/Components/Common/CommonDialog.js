import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography
} from '@material-ui/core';

const CommonDialog = ({
    fullWidth=true,
    maxWidth="lg",
    open=false,
    handleClose=()=>{},
    title='',
    content=null,
    action=null,
    mainStyle="",
    titleStyle="",
    contentStyle="",
    actionStyle="",
    titleStyleC="",
}) => {
    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            className={mainStyle}
            open={open}
            onClose={handleClose}
        >
            {title && (<DialogTitle disableTypography className={titleStyleC}><Typography className={titleStyle}>{title}</Typography></DialogTitle>)}
            {content && (<DialogContent className={contentStyle}>{content}</DialogContent>)}
            {action && (<DialogActions className={actionStyle}>{action}</DialogActions>)}
        </Dialog>
    );
}

export default CommonDialog;