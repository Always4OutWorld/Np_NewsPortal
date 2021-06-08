import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

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
    onClose=()=>{}
}) => {
    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            className={mainStyle}
            open={open}
            onClose={handleClose}
        >
            {onClose && (<div><IconButton onClick={onClose} className="closebutton"><Close className="buttonColor" /></IconButton></div>)}
            {title && (<DialogTitle disableTypography className={titleStyleC}><Typography className={titleStyle}>{title}</Typography></DialogTitle>)}
            {content && (<DialogContent className={contentStyle}>{content}</DialogContent>)}
            {action && (<DialogActions className={actionStyle}>{action}</DialogActions>)}
        </Dialog>
    );
}

export default CommonDialog;