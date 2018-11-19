import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Amy" />
      <CommentDetail author="Mark" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
