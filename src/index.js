import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

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
  state = { lat: null, errorMessage: '' };

  componentWillMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          <div className="ui container comments">
            Error: {this.state.errorMessage}
          </div>
        </div>
      );
    } else {
      return <div className="ui container comments">Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
