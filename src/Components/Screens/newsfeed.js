import React from 'react';
import CommonDialog from '../Common/CommonDialog';

const NewsFeed = ({
  actionData
}) => {
  const { isModal } = actionData;
  return (
   <div>
     <CommonDialog
      maxWidth="sm"
      title="Login"
      open={isModal}
      style={{}}
      content={<></>}
      action={<></>}
      mainStyle=""
      titleStyleC="w3-center w3-border w3-teal w3-section"
      titleStyle="loginTitle"
      contentStyle=""
      actionStyle="w3-center w3-border w3-teal w3-section"
    />
   </div>
  );
}

export default NewsFeed;
