import React from 'react';

import MessageList from '../containers/MessageList';
import UserAsise from '../components/UserAside';

const MessageTimeLine = props => {
  return (
    <div className="row">
      <UserAsise
        profileImageUrl={props.profileImageUrl}
        username={props.username}
      />
      <MessageList />
    </div>
  )
}

export default MessageTimeLine;