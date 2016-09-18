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
  		<div className='lower-content'>
  			<div className='text-row'>
	  			<h1>WHAT IS MINIGENIE?</h1>
	  			<p>Minigenie is all about building community with people who are going through cancer and therapy and just need a little bit of help once in a while. We connect people who need a little bit of assistance throught out</p>
  			</div>
  			<img className='home-page-footer' src='../../assets/connect-05.png'/>
  		</div>

  	</div> 
  )
};

