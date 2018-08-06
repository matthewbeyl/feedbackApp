import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ViewThree extends Component {

  constructor(props) {
    super(props);

    this.state = {
      support: '',
    }
  }

  handleChangeFor = (event) => {
    this.setState({
      support: event.target.value
    })
  }

  goToFour = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
    this.props.history.push('/4')
  }

  render() {
    return (
      <form onSubmit={this.goToFour}>
        <h1>How well are you being supported?</h1>
        <input type="number" placeholder="1-5" onChange={this.handleChangeFor} />
        <Button type="submit" variant="contained">NEXT</Button>
      </form>
    );
  }
}

const StyledViewThree = withStyles(styles)(ViewThree);

export default connect()(StyledViewThree);