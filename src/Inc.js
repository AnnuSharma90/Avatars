import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import Calendar from "react-calendar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Inc = () => {
	const [num, changeNum] = useState(5);
	const [value, onChange] = useState(new Date());

	const incNum = () => {
		changeNum(num + 1);
	};
	const decNum = () => {
		if (num > 0) {
			changeNum(num - 1);
		} else {
			changeNum(0);
			alert("Sorry, zero has reached");
		}
	};

	return (
		<>
			<center>
				<Card>
					<h1>{num}</h1>
					<div>
						<Tooltip title="Increment">
							<button
								className="btn btn-success p-2 border m-1 "
								onClick={incNum}
							>
								<AddIcon />
							</button>
						</Tooltip>
						<Tooltip title="Decrement">
							<button
								className="btn btn-success p-2 border m-1"
								onClick={decNum}
							>
								<RemoveOutlinedIcon />
							</button>
						</Tooltip>
					</div>
				</Card>
			</center>
			<Calendar onChange={onChange} value={value} />
		</>
	);
};

export default Inc;
