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
    this.state = {wishes: []};
  }

  componentWillMount() {
      base.bindToState('wishes', {
        context: this,
        state: 'wishes',
      });
  }

  distanceToUser(wish) {
    //todo: implement distance. for now we sort by time made instead
    return wish.postedAt;
  }

  get wishes() {
    let allWishes = this.state.wishes;
    let wishArray = [];
    for (var wish in allWishes) {
      const wishObj = allWishes[wish];
      wishArray.push({title: wishObj.title, postedAt: wishObj.postedAt, id: wish, name: wishObj.name, imgUrl: wishObj.imgUrl});
    }
    let sortedWishes = wishArray.sort((a,b) => {return this.distanceToUser(b) - this.distanceToUser(a)});
    return (
      <div>
        <h1>Wishes</h1>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {sortedWishes.map(wish => {
            let url = '/wishes/' + wish.id;
            return (
              <Link to={{pathname: url}} key={wish.id} className="list-page-grid-item">
                <img src={wish.imgUrl || 'http://plumtri.org/sites/all/themes/plumtritheme/images/default_profile.jpg'}/>
                <p>{wish.name || "person"}</p>
                <p>{wish.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  get details() {
    let allWishes = this.state.wishes;
    let wishData = allWishes[this.props.params.wishId];
    if (wishData) {
      return (
        <div>
          <h1>{wishData.title}</h1>
          <p>{wishData.body}</p>

          <p>{"this was posted at: " + wishData.postedAt}</p>
          <Link to={{pathname: "/wishes"}}>Back to all wishes</Link>
        </div>
      );
    }
    return (
      <div>...</div>
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