import React from "react";

function App() {
	const sum = function (a, b) {
		return a + b;
	};
	const sub = function (a, b) {
		return a - b;
	};
	const div = function (a, b) {
		return a / b;
	};
	const mul = function (a, b) {
		return a * b;
	};

	return (
		<ul>
			<li>
				<strong>Sum of two number is {sum(10, 20)}</strong>
			</li>
			<li>
				<strong>Difference of two number is{sub(20, 10)}</strong>
			</li>
			<li>
				<strong>Division of two number is {div(20, 10)}</strong>
			</li>
			<li>
				<strong>Multiplication of two number is {mul(10, 20)}</strong>
			</li>
		</ul>
	);
}
export default App;
