// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
      this.onChangeGummiName = this.onChangeGummiName.bind(this);
      this.onChangeGummiOwner = this.onChangeGummiOwner.bind(this);
      this.onChangeMakeAWish = this.onChangeMakeAWish.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      owner: '',
      make_a_wish:''
    }
  }

  componentDidMount() {
      axios.get('gummi/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                name: response.data.name, 
                owner: response.data.owner,
                make_a_wish: response.data.make_a_wish });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeGummiName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeGummiOwner(e) {
    this.setState({
      owner: e.target.value
    })  
  }
  onChangeMakeAWish(e) {
    this.setState({
      make_a_wish: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      owner: this.state.owner,
      make_a_wish: this.state.make_a_wish
    };
    axios.post('gummi/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeGummiName}
                      />
                </div>
                <div className="form-group">
                    <label>Owner: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.owner}
                      onChange={this.onChangeGummiOwner}
                      />
                </div>
                <div className="form-group">
                    <label>Make A Wish: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.make_a_wish}
                      onChange={this.onChangeMakeAWish}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Gummi" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}