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
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => console.log(err)
    );
  }

  render() {
    return (
      <div className="ui container comments">Latitude: {this.state.lat}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
