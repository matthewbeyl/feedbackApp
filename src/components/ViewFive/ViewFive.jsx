import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const mapStateToProps = (reduxStore) => ({
  reduxStore,
})

class ViewFive extends Component {

  submitFeedback = () => {
    axios.post('/api/feedback', this.props.reduxStore).then ((response) => {
      console.log(this.props.reduxStore);
      console.log(response);  
    }).catch ((error) => {
      console.log(error);
    })
  }

  goToOne = (event) => {
    event.preventDefault();
    this.submitFeedback();
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

export default connect(mapStateToProps)(StyledViewFive);