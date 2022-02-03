import { useState } from "react";
import "./Select.scss";

const Select = () => {
	const [click, setClick] = useState(false);

	// const elementRef = useRef(null);

	// const handler = (e) => {
	// 	e.preventDefault();
	// 	console.log(elementRef.current);

	// 	elementRef.current.click();

	// 	return false;
	// };

	// const clickElement = (ref) => {
	// 	ref.current.dispatchEvent(
	// 		new MouseEvent("click", {
	// 			view: window,
	// 			bubbles: true,
	// 			cancelable: true,
	// 			buttons: 1,
	// 		})
	// 	);
	// };

	return (
		<div className="wrapper">
			<div className="inner">
				<div className="select-el" onClick={() => setClick(!click)}>
					<select className="select" id="mounth">
						<option value="hide">-- Month --</option>
						<option value="january" rel="icon-temperature">
							January
						</option>
						<option value="february">February</option>
						<option value="march">March</option>
						<option value="april">April</option>
						<option value="may">May</option>
						<option value="june">June</option>
						<option value="july">July</option>
						<option value="august">August</option>
						<option value="september">September</option>
						<option value="october">October</option>
						<option value="november">November</option>
						<option value="december">December</option>
					</select>

					<img
						className="img-select"
						src="/img/arrow-down.svg"
						alt="arrow icon"
						style={{
							transform: click ? "rotate(180deg)" : "",
						}}
					/>

					{/* <button onClick={handler}>Click me</button> */}
				</div>
			</div>

			{/* <select name="second" id="second" className="second">
				<option value="first">one</option>
				<option value="second">two</option>
			</select> */}
		</div>
	);
};

export default Select;
