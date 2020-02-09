import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
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
    console.log(`The values are ${this.state.name}, ${this.state.owner}, and ${this.state.make_a_wish}`)
    const obj = {
      name: this.state.name,
      owner: this.state.owner,
      make_a_wish: this.state.make_a_wish
    };
    // axios.post('http://localhost:4002/gummi/add', obj)
    axios.post('/gummi/add', obj)
        .then(res => console.log(res.data))
        .catch(error => {
	        if (!error.response) {
	            // network error
	            this.errorStatus = 'Error: Network Error';
	        } else {
	            this.errorStatus = error.response.data.message;
	        }
      	});

    this.setState({
      name: '',
      owner: '',
      make_a_wish: ''
    })
    this.props.history.push('/');
  }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Add New Gummi</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Gummi Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.name}
                        onChange={this.onChangeGummiName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Gummi Owner: </label>
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
                      <input type="submit" value="Register Gummi" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}


