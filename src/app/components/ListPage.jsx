import React, {Component} from 'react';
import {Link} from 'react-router';
import Rebase from 're-base';
var base = Rebase.createClass({
    apiKey: "AIzaSyD748jo5qfo4Rco3pfruKHz_AVi-Es4Kf8",
    authDomain: "lumohacksproject.firebaseapp.com",
    databaseURL: "https://lumohacksproject.firebaseio.com",
    storageBucket: "lumohacksproject.appspot.com",
  });



class ListPage extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {wishes: []};
  }

  componentWillMount() {
      base.bindToState('wishes', {
        context: this,
        state: 'wishes',
      });
  }

  get wishes() {
    let allWishes = {100: {title: 'my wish', postedAt: 1, }, 200: {title: 'sample wish', postedAt: 2}}; //this.state.wishes
    let wishArray = [];
    for (var wish in allWishes) {
      wishArray.push({title: allWishes[wish].title, postedAt: allWishes[wish].postedAt, id: wish});
    }
    let sortedWishes = wishArray.sort((a,b) => {return b.postedAt - a.postedAt});
    return (
      sortedWishes.map(wish => {
        let url = '/wishes/' + wish.id;
        return (
          <Link key={wish.id} to={{ pathname: url}}>{wish.title}</Link>
        );
      })
    );
  }

  get details() {
    let allWishes = {100: {title: 'my wish', postedAt: 1, }, 200: {title: 'sample wish', postedAt: 2}};
    let wishData = allWishes[this.props.params.wishId];
    return (
      <div>
        <p>{wishData.title}</p>
        <p>{wishData.postedAt}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.params.wishId ? this.details : this.wishes}
      </div>
    );
  }
}



export default ListPage;