import React from 'react';
import {useForm} from 'react-hook-form';

const Formh= ()=>{
	const{register, handleSubmit}= useForm();

	

	const onSubmit=(data)=>{
		console.log(); 
	};

	return(

		<div>
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='fname'>Enter your first name</label>
			<input type='text' id='fname' placeholder='enter first name' ref={register} name='fname'/>
			<br/><br/>
			<label htmlFor='lname'>Enter your last name</label>
			<input type='text' id='lname' placeholder='enter last name' ref={register} name='lname'/>
			<br/><br/>
			<label htmlFor='fname'>Enter your password</label>
			<input type='text' id='fname' placeholder='enter password' ref={register} name='password'/>
			<br/><br/>
			<button >Submit</button>
		
		<ul>
			<li>{}</li>
		</ul>
		</form>
		</div>

		);
}

export default Formh;
