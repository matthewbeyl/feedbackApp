import React, { Component } from 'react';
// import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ViewThree extends Component {

  goToFour = (event) => {
    console.log('clicked');
    
    event.preventDefault();
      this.props.history.push('/4')
  }

  render() {
    return (
      <form onSubmit={this.goToFour}>
        <h1>How well are you being supported?</h1>
        <input type="number" />
        <Button type="submit" variant="contained">NEXT</Button>
      </form>
    );
  }
}

export default withStyles(styles)(ViewThree);