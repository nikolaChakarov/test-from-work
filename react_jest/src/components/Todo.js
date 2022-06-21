import React, { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Close } from "@mui/icons-material";

const Todo = () => {
	const { dispatch, tasks } = useContext(GlobalContext);

	const inputEl = useRef();

	console.log(tasks);

	const addTodo = (e) => {
		dispatch({
			type: "ADD_TODO",
			payload: {
				id: Date.now(),
				title: inputEl.current.value,
				checked: false,
			},
		});
	};

	const removeTodo = (id) => {
		dispatch({
			type: "REMOVE_TODO",
			payload: id,
		});
	};

	const toggleChecked = (id) => {
		dispatch({
			type: "TOGGLE_CHECKED",
			payload: id,
		});
	};

	return (
		<TodoContainer>
			<h1>TODO</h1>
			<div className="todo-top">
				<input
					type="text"
					name="addTodo"
					placeholder="Add a new task here ..."
					ref={inputEl}
				/>
				<button onClick={addTodo}>Add</button>
			</div>
			<div className="todo-main">
				<div className="todo-middle">
					{tasks.map((el, i) => {
						return (
							<div className="task-el" key={i}>
								<TitleEl
									checked={el.checked}
									onClick={() => toggleChecked(el.id)}
								>
									{el.title}
								</TitleEl>
								<Close
									className="close-icon"
									onClick={() => removeTodo(el.id)}
								/>
							</div>
						);
					})}
				</div>
				<div className="todo-bottom">
					<span>{tasks.length} tasks left</span>
					<Link to={"/followers"}>
						<span>Followers</span>
					</Link>
				</div>
			</div>
		</TodoContainer>
	);
};

const TodoContainer = styled.div`
	position: absolute;
	width: 70%;
	height: 70%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	flex-direction: column;

	*::-webkit-scrollbar {
		display: none;
	}

	h1 {
		font-size: 2.5rem;
		letter-spacing: 0.5rem;
		text-shadow: 0.1rem 0.1rem 0rem rgba(0, 0, 0, 0.342);
		font-weight: 500;
		color: #fff;
		margin-bottom: 10px;
	}

	.todo-top {
		display: flex;
		padding: 5px;
		background: #fff;
		margin-bottom: 10px;
		border-radius: 5px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.342);

		input {
			padding: 5px;
			flex: 1;
			margin-right: 10px;
			border: none;
		}
		button {
			padding: 5px 20px;
			background: #038c65;
			color: #fff;
			border-radius: 3px;
			border: none;
			cursor: pointer;
		}
	}

	.todo-main {
		border-radius: 5px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.342);
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 20px 10px;
		background: #fff;
		overflow-y: scroll;
	}

	.todo-middle {
		flex: 1;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;

		.task-el {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border: 1px groove #fff;
			margin-bottom: 10px;
			padding: 10px;
			cursor: pointer;

			.close-icon:hover {
				color: red;
			}
		}
	}

	.todo-bottom {
		margin-top: auto;
		background: #fff;
		display: flex;
		justify-content: space-between;
	}
`;

const TitleEl = styled.span`
	color: ${({ checked }) => (checked ? "#aaa" : "#333")};
	text-decoration: ${({ checked }) => (checked ? "line-through" : "")};
`;

export default Todo;
