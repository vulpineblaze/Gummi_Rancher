import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
// import { useHistory } from "react-router-dom";



export default class Index extends Component {

	// const history = useHistory();

  constructor(props) {
      super(props);
      this.state = {gummi: []};
      this.tabRow = this.tabRow.bind(this); 

    }
    componentDidMount(){
      axios.get('gummi')
        .then(response => {
          this.setState({ gummi: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.gummi.map((object, i) => {
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Gummi List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Owner</th>
                <th>MAW</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }