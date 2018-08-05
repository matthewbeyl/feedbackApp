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

class ViewOne extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feeling: '',
    }
  }

  handleChangeFor = (event) => {
    this.setState({
      feeling: event.target.value
    })
  }

  goToTwo = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
    this.props.history.push('/2')
  }

  render() {
    return (
      <form onSubmit={this.goToTwo}>
        <h1>How are you feeling today?</h1>
        <input type="number" onChange={this.handleChangeFor} />
        <Button type="submit" variant="contained">NEXT</Button>
      </form>
    );
  }
}

const StyledViewOne = withStyles(styles)(ViewOne);

export default connect()(StyledViewOne);
