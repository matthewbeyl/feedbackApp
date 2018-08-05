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

class ViewFive extends Component {

  goToOne = (event) => {
    console.log('clicked');
    
    event.preventDefault();
      this.props.history.push('/1')
  }

  render() {
    return (
      <form onSubmit={this.goToOne}>
        <h1>Thank you!</h1>
        <Button type="submit" variant="contained">Complete</Button>
      </form>
    );
  }
}

const StyledViewFive = withStyles(styles)(ViewFive);

export default connect()(StyledViewFive);