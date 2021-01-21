import React, { Component } from "react";
import Demo from "./Demo";
import Fdata from "./Fdata";
import "./Avatar.css";

class Final extends Component {
	constructor() {
		super();
		this.state = {
			title: "List of four Web Engineers",
		};
	}

	changetitle() {
		this.setState({
			title: "List of four Avatar",
		});
	}

	render() {
		const avatarlist = Fdata.map((Democard, i) => {
			return (
				<Demo
					key={i}
					image={Fdata[i].image}
					name={Fdata[i].name}
					occupation={Fdata[i].occupation}
				/>
			);
		});
		return (
			<div>
				<center>
					<h1>{this.state.title}</h1>
					{avatarlist}
				</center>
				<button onClick={() => this.changetitle()}>
					Change the Title
				</button>
			</div>
		);
	}
}
export default Final;
