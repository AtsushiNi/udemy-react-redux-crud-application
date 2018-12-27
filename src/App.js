import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() => {console.log("Hi!")}} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>meeee</div>
}
export default App;
