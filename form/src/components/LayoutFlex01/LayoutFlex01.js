import React from "react";
import "./LayoutFlex01.scss";
import { v4 } from "uuid";

const titles = [
	"asdfasfafsfasdfasfasfsdfsf",
	"asdf0",
	"fas",
	"asdfasfasdfsf",
	"asdf0",
	"fas",
	"sadffasf",
];

const data = [
	{
		id: v4(),
		name: "fasdfasdfasdf",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasdffasdf",
		car: "asd",
	},
	{
		id: v4(),
		name: "24",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasasdfasfsdfsdfasasdfasdffasdf",
		car: "asd",
	},
	{
		id: v4(),
		name: "1",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasdffasdf",
		car: "asd",
	},
	{
		id: v4(),
		name: "fasdfasdfasdf",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasdffasdf",
		car: "asd",
	},
	{
		id: v4(),
		name: "fas",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasdffasdf",
		car: "asd",
	},
	{
		id: v4(),
		name: "h",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasdffasdf",
		car: "asd",
	},
	{
		id: v4(),
		name: "er",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasdffasdf",
		car: "asd",
	},
	{
		id: v4(),
		name: "sg",
		age: 34,
		title: "adsfasf",
		color: "red",
		friends: 434,
		photos: "adfasfasdffasdf",
		car: "asd",
	},
];

const LayoutFlex01 = () => {
	return (
		<div className="container-fluid" id="layout-flex-01">
			<h1>Title</h1>

			<div className="container-fluid layout-body-wrapper">
				<div className="inner-wrapper">
					<div className="test">
						<ul className="ul-titles">
							{titles.map((el, i) => {
								return (
									<li className="col li-title" key={i}>
										{el}
									</li>
								);
							})}
						</ul>

						{/* elements */}
						<ul className="ul-elements">
							{data.map((el, i) => {
								const keys = Object.keys(el).filter((el) => el !== "id");
								return (
									<li className="col li-item" key={i}>
										{keys.map((k, i) => {
											return (
												<div className="col info" key={i}>
													{el[k]}
												</div>
											);
										})}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>

			<h2>Pagination</h2>
		</div>
	);
};

export default LayoutFlex01;
