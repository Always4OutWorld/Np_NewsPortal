import React from 'react';
import { get } from 'lodash';
import { Grid, Chip, Button, TextField, Typography, FormControl, InputLabel, MenuItem, Select, FormHelperText, Card } from '@material-ui/core';
import Clock from 'react-clock';
import { Edit, SaveOutlined, PlayCircleFilled, PauseCircleFilled, Error, CheckCircle } from '@material-ui/icons';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { stateList } from './data';

const getAgeText = ({
    min_age_limit,
    max_age_limit,
    allow_all_age
}) => {
    if (allow_all_age) {
        return '18 +';
    }
    if (max_age_limit) {
        return `${min_age_limit}-${max_age_limit}`
    }
    return `${min_age_limit}+`;
}

const alignCSS = {
    display: "flex",
};

const cardDesign = (responseD) => {
    return (
        <Grid container spacing={1}>
        {get(responseD, 'length') > 0 ? responseD.map(ele => {
            return (
                <Grid item xs={12}>
                    <Card>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography>{get(ele, 'pincode', '')}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>{get(ele, 'name', '')}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>{`${get(ele, 'address', '')}`}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container className="w3-margin-bottom" spacing={1} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly'
                                }}>
                                    {get(ele, 'sessions.length') ? get(ele, 'sessions').map(el => {
                                        if (get(el, 'available_capacity', 0) === 0) {
                                            return (
                                                <Grid item xs={12} md={4} ls={3} sm={6}>
                                                    <Card className="w3-red w3-center" style={{
                                                        fontSize: '20px',
                                                        fontWeight: 800,
                                                    }}>
                                                        Booked
                                                    </Card>
                                                </Grid>
                                            )
                                        }
                                        return (<Grid item xs={12} md={4} ls={3} sm={6}>
                                        <Card className="w3-light-gray" style={{
                                           height: "100px"
                                        }}>
                                            <Grid container className="w3-border">
                                                <Grid item xs={5} className="w3-center">
                                                    <Typography className="w3-text-purple">{get(el, 'date')}</Typography>
                                                </Grid>
                                                <Grid item xs={2} className="w3-center">
                                                    <SentimentSatisfiedAltIcon />
                                                </Grid>
                                                <Grid item xs={5} className="w3-center">
                                                    <Typography className="w3-text-purple">{get(el, 'vaccine')}</Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-evenly'
                                                    }}>
                                                        <Grid item xs={4}>
                                                            <Grid container>
                                                                <Grid item xs={12} className="w3-center w3-bold">
                                                                    D1
                                                                </Grid>
                                                                <Grid item xs={12} className="w3-center">
                                                                    <Typography>{get(el, 'available_capacity_dose1', 0)}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={4} className="w3-center">
                                                            <Typography className="w3-badge">{get(el, 'available_capacity', 0)}</Typography>
                                                            <Typography style={{ color: 'red' }}>{getAgeText(el)}</Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Grid container>
                                                                <Grid item xs={12} className="w3-center">
                                                                    D2
                                                                </Grid>
                                                                <Grid item xs={12} className="w3-center">
                                                                    <Typography>{get(el, 'available_capacity_dose2', 0)}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button href="https://selfregistration.cowin.gov.in/" target="_blank" fullWidth variant="contained" style={{
                                                        background: 'green',
                                                        fontWeight: 700,
                                                        color: 'white'
                                                    }}>Book</Button>
                                                </Grid>
                                            </Grid>
                                        </Card></Grid>);
                                    }) : (
                                        <div>no slot</div>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            );
        }) : (
        <Typography>No slot</Typography>
        )}
    </Grid>
    );
}


const CovFeedView = ({
    isloading = true,
    value,
    isEdit,
    setEdit,
    pincode,
    insertPincode,
    setActionButton,
    currentPin,
    setPin,
    error,
    onDelete,
    setalaram,
    isalaram,
    districtList,
    state,
    onStateChange,
    setD,
    currentD,
    responseD
}) => (
        <Grid container justify="center" style={{
            top: "40%",
        }}>
            <Grid item xs={12} className="w3-padding w3-border">
                <Grid container justify="center" alignContent="center" alignItems="center" spacing={1}>
                    <Grid item>
                    🆅
                    </Grid>
                    <Grid item>
                        {isloading ? <div class="lds-circle"><div></div></div> : <Clock value={value} size={60} />}
                    </Grid>
                    <Grid item>
                    🅷🅴🅻🅿
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <p style={{
                            textAlign: 'center',
                            fontSize: '15px'
                        }} data-text={isloading ? 'loading...' : 'Live Updating'}>{isloading ? 'loading...' : 'Live Updating'}</p>
                    </Grid>
                </Grid>
                {!isloading && (
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Grid container  justify="center">
                                <Grid item style={alignCSS}>
                                    {get(pincode, 'length') > 0 && pincode.map((each, id) => {
                                        return (
                                            <Chip onDelete={() => onDelete(each.pincode)} key={id} id={id} style={{fontSize: "25px"}} size="large" label={get(each, 'pincode')} color="primary" />
                                        );
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                {isEdit && (
                                    <Grid item xs={12} className="w3-padding">
                                        <FormControl variant="outlined" fullWidth disabled={get(pincode, 'length') > 0}>
                                            <InputLabel >State</InputLabel>
                                            <Select
                                            value={state}
                                            onChange={onStateChange}
                                            label="state"
                                            >
                                            {stateList.map(e => <MenuItem value={get(e, 'state_id')}>{get(e, 'state_name')}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                )}
                                {isEdit && (
                                    <Grid item xs={12} className="w3-padding">
                                         <FormControl variant="outlined" fullWidth disabled={get(pincode, 'length') > 0}>
                                            <InputLabel >District</InputLabel>
                                            <Select
                                            value={currentD}
                                            onChange={e => {
                                                const { value } = e.target;
                                                setD(value);
                                            }}
                                            label="District"
                                            >
                                            {districtList.map(e => <MenuItem value={get(e, 'district_id')}>{get(e, 'district_name')}</MenuItem>)}
                                            </Select>
                                            <FormHelperText>{get(pincode, 'length') > 0 ? "You can`t change state and district when a pincode is already there" : ''}</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                )}
                            </Grid>
                            <Grid container>
                                {isEdit && (
                                    <Grid item xs={12} className="w3-padding">
                                      <TextField
                                          label="Enter Pincode belongs of selected District"
                                          variant="outlined"
                                          fullWidth
                                          inputMode="numeric"
                                          type="number"
                                          value={currentPin}
                                          onChange={setPin}
                                          error={error}
                                          helperText={error}
                                      />
                                    </Grid>
                                )}
                                <Grid item xs={12} alignItems="center" style={alignCSS} spacing={2} className="w3-padding">
                                    <Button variant={isEdit ? 'contained' : 'text'} onClick={() => setActionButton(isEdit)}>{isEdit ? <SaveOutlined /> : <Edit />}{isEdit ? 'Add Pincode' : 'Edit'}</Button>
                                    {isEdit && (<Button className="w3-margin-left" variant="outlined" onClick={() => setEdit(false)}>Cancel</Button>)}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
            <Grid item xs={12} className="w3-padding w3-margin-top w3-border w3-light-grey">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="body2">
                                    Selected Pincode Based
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className="w3-right-align">
                                {isalaram ? (<Button onClick={() => setalaram(false)} style={{ color: 'red'}} size="medium" startIcon={<PauseCircleFilled style={{ color: 'red'}} />}>Stop Alaram</Button>) : (<Button style={{ color: 'green'}} onClick={() => setalaram(true)} size="medium" startIcon={<PlayCircleFilled style={{ color: 'green'}} />}>Set Alaram</Button>)}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="w3-center">
                        {isalaram ? <CheckCircle style={{ color: 'green', fontSize: '80px'}} /> : <Error style={{ color: 'red', fontSize: "80px" }} />}
                    </Grid>
                    {!isalaram && (
                        <Grid item xs={12} className="w3-center">
                            No slot
                        </Grid>
                    )}
                    <Grid item xs={12} className="w3-margin-top">
                        {cardDesign(responseD)}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <hr />
                <hr />
                <hr />
            </Grid>
            <Grid item xs={12} className="w3-padding w3-margin-top w3-border">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="body2">
                                    All District
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2}>
                                {isalaram ? <CheckCircle style={{ color: 'green', fontSize: '40px'}} /> : <Error style={{ color: 'red', fontSize: "30px" }} />}
                            </Grid>
                            <Grid item xs={12} className="w3-margin-top">
                               {cardDesign(responseD)}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

export default CovFeedView;

