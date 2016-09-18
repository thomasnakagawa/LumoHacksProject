import React, {Component} from 'react';
import {Link} from 'react-router';
import firebase from '../utils/firebase';
import Rebase from 're-base';
var base = Rebase.createClass({
    apiKey: "AIzaSyD748jo5qfo4Rco3pfruKHz_AVi-Es4Kf8",
    authDomain: "lumohacksproject.firebaseapp.com",
    databaseURL: "https://lumohacksproject.firebaseio.com",
    storageBucket: "lumohacksproject.appspot.com",
  });


class WishForm extends Component {

  constructor(props) {
    super(props);
    this.state = {showLogin: false};
  }

  componentDidMount() {
    this.setState({showLogin: false});
    // this is called after the component renders
  }

  getRandomAvatar() {
    return '';
  }

  handleSubmit(e) {
    e.preventDefault();
    base.push('wishes', {
      data: {
        title: $('#title').val(),
        body: $('#description').val(),
        name: $('#name').val(),
        imgUrl: this.getRandomAvatar(),
        postedAt: Date.now(),

      },
      then(){
        window.location.href = '/wishes';
      }
    });
  }

  render() {
    if (this.state.showLogin) {
      return (
        <div className="container">
          <button onClick={() => {firebase.loginWithGoogle();}}>Sign in with google</button>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Make a wish</h1>
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
                <div className="form-group">
                   <label for="Name">Name:</label>
                    <input type="textbox" className="form-control"id="name"/> 
                </div>
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