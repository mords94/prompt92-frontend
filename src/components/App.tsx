import * as React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToastContainer
            position="top-right"
            autoClose={5000}
            toastClassName="toast-container"
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
        />
          <div>
              <Header />
              <Main />
          </div>
      </div>
    );
  }
}

export default App;
