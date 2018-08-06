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

class ViewTwo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      understanding: '',
    }
  }

  handleChangeFor = (event) => {
    this.setState({
      understanding: event.target.value
    })
  }

  goToThree = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
    this.props.history.push('/3')
  }

  render() {
    return (
      <form onSubmit={this.goToThree}>
        <h1>How well are you understanding the content?</h1>
        <input type="number" placeholder="1-5" onChange={this.handleChangeFor} />
        <Button type="submit" variant="contained">NEXT</Button>
      </form>
    );
  }
}

const StyledViewTwo = withStyles(styles)(ViewTwo);

export default connect()(StyledViewTwo);