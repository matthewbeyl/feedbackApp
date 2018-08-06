import React, { Component } from 'react';
import axios from 'axios';
// import swal from '../../../public/vendors/sweetalert.min.js'

class AdminView extends Component {
  constructor() {
    super();
    this.state = {
      feedback: []
    }
  }

  // confirmDelete = () => {
  // }

  // deleteFeedback = () => {
  //     console.log('clicked');
  //     axios.delete(`/api/feedback/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  getFeedback = () => {
    axios.get('/api/feedback').then((response) => {
      this.setState({
        feedback: response.data
      })
    })
  }

  componentDidMount() {
    this.getFeedback()
  }

  render() {
    let feedbackArray = this.state.feedback.map((entry, index) => {
      return (
        <tr>
          <td>{entry.feeling}</td>
          <td>{entry.understanding}</td>
          <td>{entry.support}</td>
          <td>{entry.comments}</td>
          <td></td>
          <button onClick={this.deleteFeedback}>Delete</button>
        </tr>
      )
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Flag</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {feedbackArray}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminView;