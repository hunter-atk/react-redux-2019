import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <CommentDetail author="Sam" />
//       </ApprovalCard>
//     </div>
//   );
// };

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div className="ui container comments">Seasons</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
