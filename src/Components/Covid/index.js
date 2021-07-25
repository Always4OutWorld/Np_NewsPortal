import { filter, find, findIndex, get } from 'lodash';
import React from 'react';
import { useState, useEffect } from 'react';
import CovFeedView from './view';
import { districtList } from './data';
import axios from 'axios';


const Regrex = `^[1-9][0-9]{5}$`;
const api = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=20&date=25-07-2021";


const CovFeed = () => {
    const [isloading, setLoad] = useState(false);
    const [value, setValue] = useState(new Date());
    const [pincode, insertPincode] = useState([
      {
        pincode: 792120
      }
    ]);
    const [currentPin, setPin] = useState('');
    const [error, setE] = useState('');
    const [isEdit, setEdit] = useState(false);
    const [isalaram, setalaram] = useState(false);
    const [state, setState] = useState(17);
    const districts = districtList.find(e => get(e, 'id') === state);
    const [districtArray, setDistrict] = useState(get(districts, 'data.districts'));
    const [currentD, setD] = useState(298);
    const [centres, setC] = useState([]);
    const [selectedD, setSC] = useState([]);

    useEffect(() => {
      const value = filter(centres, e => findIndex(pincode, ele => ele.pincode === e.pincode) > -1);
      setSC(value);
    }, [centres]);

    useEffect(() => {
      const interval = setInterval(
        () => setValue(new Date()),
        1000
      );

      if (get(pincode, 'length') > 0) {
      setTimeout(() => {
        setLoad(false);
      }, [2000]);
      }

      const timeO = setTimeout(async () => {
        await axios.get(api).then(res => {
          setC(get(res, 'data.centers'));
        }).catch(er => {
          console.log('response fetch error');
        });
      }, 5000);
   
      if (get(pincode, 'length') === 0) {
        setEdit(true);
      }

      return () => {
        clearInterval(interval);
        clearTimeout(timeO);
      }
    }, []);

    const onDelete = (pin) => {
      const mainA = pincode;
      mainA.splice(mainA.indexOf(pin, 1));
      setPin(mainA);
    }

    const setActionButton = (isOpen) => {
      if (!isOpen) {
        setEdit(true);
        return;
      }
      const exp = new RegExp(Regrex);
      
      if (!exp.test(currentPin)) {
        setE('Please enter a right pincode');
        return;
      }
      if (pincode.find(e => e.pincode === currentPin)) {
        setE('Already Exist');
        return;
      }
      pincode.push({
        pincode: currentPin
      });
      insertPincode(pincode);
      setPin('');
    }

    const onStateChange = (e) => {
      const { value } = e.target;
      setState(value);
      const districts = districtList.find(e => get(e, 'id') === value);
      setDistrict(get(districts, 'data.districts'));
      setD(get(districts, 'data.districts[0].district_id'));
    }

    return <CovFeedView
        isloading={isloading}
        value={value}
        isEdit={isEdit}
        setEdit={setEdit}
        pincode={pincode}
        insertPincode={insertPincode}
        setActionButton={setActionButton}
        onDelete={onDelete}
        setPin={e => {
          const { value } = e.target;
          setE('');
          setPin(value);
        }}
        currentPin={currentPin}
        error={error}
        isalaram={isalaram}
        setalaram={setalaram}
        state={state}
        onStateChange={onStateChange}
        districtList={districtArray}
        currentD={currentD}
        setD={setD}
        responseD={centres}
        selectedD={selectedD}
    />
}

export default CovFeed;