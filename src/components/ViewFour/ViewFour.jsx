import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ViewFour extends Component {

  goToFive = (event) => {
    console.log('clicked');
    
    event.preventDefault();
      this.props.history.push('/5')
  }

  render() {
    return (
      <form onSubmit={this.goToFive}>
        <h1>Any comments you want to leave?</h1>
        <input type="text" placeholder="Comments..." />
        <Button type="submit" variant="contained">NEXT</Button>
      </form>
    );
  }
}

const StyledViewFour = withStyles(styles)(ViewFour);

export default connect()(StyledViewFour);