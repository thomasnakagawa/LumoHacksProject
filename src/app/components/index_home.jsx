import React from 'react';
import {Link} from 'react-router';

export default () => {
  return (
  	<div className='home-page'>
  		<div className='home-page-background'>

  			<img className='home-page-icon' src='http://i347.photobucket.com/albums/p471/Calypsiel/genieIcon-03_zpsgoq2vnlk.png'/>
  			<h1>MINIGENIE</h1>
  			<p>Need a small favour? Able to lend a hand to someone in need?</p>
  			<div className='button-container'>
  				<Link to="/wishform"><img src="http://i347.photobucket.com/albums/p471/Calypsiel/iwishbuttoon-04_zpsvi1inejy.png" className='home-page-button'/></Link>
  				<Link to="/wishes"><img src="http://i347.photobucket.com/albums/p471/Calypsiel/grantwishbuttom-04_zpsdkncgtt8.png" className='home-page-button'/></Link>
  			</div>
  		</div>
  		<div className='lower-content'>
  			<div className='text-row'>
	  			<h1>WHAT IS MINIGENIE?</h1>
	  			<p>Minigenie is all about building community with people who are going through cancer and therapy and just need a little bit of help once in a while. We connect people who need a little bit of assistance throught out</p>
  			</div>
  			<img className='home-page-footer' src='http://i347.photobucket.com/albums/p471/Calypsiel/connect-05_zpshmk4a2fs.png'/>
  		</div>

  	</div> 
  )
};

