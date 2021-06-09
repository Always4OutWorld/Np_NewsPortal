import { get } from 'lodash';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReadLaterView from '../Screens/readLaterview';


const ReadLaterHandler = () => {
    const readState = useSelector(state => get(state, 'readLaterData.data'));

    const removeReadLater = (article) => {

    }
    console.log("datytyy", readState)
  return (
      <ReadLaterView
        removeReadLater={removeReadLater}
        allReadLater={readState}
      />
  );
}

export default ReadLaterHandler;
