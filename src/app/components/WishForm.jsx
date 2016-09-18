import React, {Component} from 'react';
import {Link} from 'react-router';
import firebase from '../utils/firebase';


class WishForm extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this is called after the component renders
  }

  get wishes() {

  }

  render() {
    return (
      <div className="container">
        <h1>Make a wish</h1>
            <form>
                <div className="form-group">
                   <label for="Title">Title:</label>
                    <input type="textbox" className="form-control"id="title"/> 
                </div>
                <div className="form-group">
                   <label for="description">Description:</label>
                    <textarea className="form-control" rows="5" id="description"></textarea> 
                </div>
                <br/>
                <button type="submit" className="btn btn-default" rows="3">Submit</button>
            </form>
      </div>
    );
  }
}



export default WishForm;