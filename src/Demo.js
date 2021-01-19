import React from 'react';
import './Avatar.css';
import 'tachyons';

const Demo=({image,name,occupation})=>{
return(
	<div className="avatarstyle ba b--solid br3 grow bg-light-red dib ma3 tc pa2">
	<img src={image} alt='avatar'/>
	<h1>{name}</h1>
	<p><em><strong>{occupation}</strong></em></p>
	</div>
	);
}
export default Demo;