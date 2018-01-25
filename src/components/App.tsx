import * as React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div>
              <Header />
              <Main />
          </div>
      </div>
    );
  }
}

export default App;
