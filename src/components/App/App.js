import React from 'react';

import Navigation from '../Navigation'

import './App.css';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />

      </div>
    );
  }
}

export default App;
