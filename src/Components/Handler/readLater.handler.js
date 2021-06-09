import { chunk, get } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReadLaterView from '../Screens/readLaterview';
import { addReadLaterSection } from '../../redux/action';


const ReadLaterHandler = () => {
    const dispatch=useDispatch();
    const readState = useSelector(state => get(state, 'readLaterData.data'));
    const [currentPage, setPageNumber] = useState(1);
    const splitedArray = chunk(readState, 10);

    const removeReadLater = (article) => {
      const r = readState;
      const currentIndex=r.findIndex(e => e.title === article.title);
      readState.splice(currentIndex, 1);
      console.log("article", r);
      dispatch(addReadLaterSection(r))
    }
  return (
      <ReadLaterView
        splitedArray={splitedArray}
        allReadLater={readState}
        onClickRemove={removeReadLater}
        currentPage={currentPage}
        setPageNumber={() => {}}
        nextAction={() => setPageNumber(currentPage+1)}
        prevAction={() => setPageNumber(currentPage-1)}
        onClickAction={e => setPageNumber(e)}
      />
  );
}

export default ReadLaterHandler;
