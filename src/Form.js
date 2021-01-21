import React, { useState } from "react";

const Form = () => {
	//const state = useState();

	let [name, setValue] = useState();
	const [fullName, newData] = useState();

	const eventChange = (event) => {
		setValue(event.target.value);
	};

	const updateData = () => {
		newData(name);
	};

	return (
		<>
			<h1>Hello, {fullName} </h1>
			<input
				type="text"
				placeholder="enter your name"
				value={name}
				onChange={eventChange}
			/>
			<button type="submit" onClick={updateData}>
				Submit
			</button>
		</>
	);
};

export default Form;
