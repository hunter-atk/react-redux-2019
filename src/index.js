import React, { Component } from 'react';
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

class App extends Component {
  componentWillMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
  }

  render() {
    <div className="ui container comments">Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
