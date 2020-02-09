// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const history = useHistory();

class TableRow extends Component {

  

  constructor(props) {
      super(props);
      this.delete = this.delete.bind(this);
  }
  delete() {
      axios.get('gummi/delete/'+this.props.obj._id)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))

      this.props.history.push('/');
      // this.props.navigation.navigate("/index");
      // navigation.navigate("/index");
      // useHistory().push("/index");

      console.log("this.props",this.props);
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.owner}
          </td>
          <td>
            {this.props.obj.make_a_wish}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;