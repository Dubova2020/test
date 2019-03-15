import React, { Component } from 'react';
import logo from './logo.svg';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './components/appBar'
import SimpleAppBar from './components/secondAppBar'
import OutlinedTextFields from './components/textFields'
import FolderList from './components/groups'



import './App.css';

const styles = {};

class App extends Component {
  render() {
    return(
        <div className="App">
          <ButtonAppBar/>
          <SimpleAppBar/>

          <OutlinedTextFields/>
          <FolderList/>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              hello world <code>src/App.js</code> and save to reload .
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Button/>
            </a>
          </header>
        </div>
    );
  }
}

export default withStyles(styles)(App);