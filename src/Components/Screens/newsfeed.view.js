import { Button } from '@material-ui/core';
import React from 'react';
import CommonDialog from '../Common/commonDialog';

const NewsFeed = ({
  actionData
}) => {
  const { isModal } = actionData;
  return (
   <div>
     {isModal && (
        <CommonDialog
          maxWidth="sm"
          title="Login"
          open={isModal}
          style={{}}
          content={<></>}
          action={(
            <Button color="secondary" variant="contained">Submit</Button>
          )}
          mainStyle=""
          titleStyleC="w3-center w3-border w3-teal w3-section"
          titleStyle="loginTitle"
          contentStyle=""
          actionStyle="w3-center w3-border w3-teal w3-section"
        />
     )}
   </div>
  );
}

export default NewsFeed;
