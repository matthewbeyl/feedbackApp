import React, { Component } from 'react';
// import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const feedback = {
  id: '',
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
  flagged: '',
  date: ''
}

class ViewOne extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feedback
    }
  }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        ...this.state,
        feedback: {
          ...this.state.feedback,
        [propertyName]: event.target.value
        }
      })
    }
  }

  goToTwo = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TO_FEEDBACK', payload: this.state.feedback })
    this.props.history.push('/2')
  }

  render() {
    return (
      <form onSubmit={this.goToTwo}>
        <h1>How are you feeling today?</h1>
        <input type="number"  onChange={this.handleChangeFor('feeling')} />
        <Button type="submit" variant="contained">NEXT</Button>
      </form>
    );
  }
}

const StyledViewOne = withStyles(styles)(ViewOne);

export default connect()(StyledViewOne);
