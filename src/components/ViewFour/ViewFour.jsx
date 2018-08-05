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

  constructor(props) {
    super(props);

    this.state = {
      comments: '',
    }
  }

  handleChangeFor = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  goToFive = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
    this.props.history.push('/5')
  }

  render() {
    return (
      <form onSubmit={this.goToFive}>
        <h1>Any comments you want to leave?</h1>
        <input type="text" placeholder="Comments..." onChange={this.handleChangeFor} />
        <Button type="submit" variant="contained">NEXT</Button>
      </form>
    );
  }
}

const StyledViewFour = withStyles(styles)(ViewFour);

export default connect()(StyledViewFour);