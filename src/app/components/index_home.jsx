import React from 'react';
import {Link} from 'react-router';

export default () => {
  return (
  	<div className='home-page'>
  		<div className='home-page-background'>
  			<img className='home-page-icon' src='../../assets/genieIcon-03.png'/>
  			<h1>MINIGENIE</h1>
  			<p>Need a small favour? Able to lend a hand to someone in need?</p>
  			<div className='button-container'>
  				<Link to="/wishform"><img src="../../assets/iwishbuttoon-04.png" className='home-page-button'/></Link>
  				<Link to="/wishes"><img src="../../assets/grantwishbuttom-04.png" className='home-page-button'/></Link>
  			</div>
  		</div>


  	</div> 
  )
};

