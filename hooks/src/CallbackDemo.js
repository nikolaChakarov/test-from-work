import { memo, useCallback, useState } from "react";

const CallbackDemo = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increase = () => {
		setCount(count + 1);
	};

	const decrease = () => {
		setCount(count - 1);
	};

	const addTodos = useCallback(
		(newTodo) => {
			setTodos((prev) => [...prev, newTodo]);
		},
		[todos]
	);

	console.log("callback demo parent");

	return (
		<div>
			<h1>useCallback</h1>
			<h5>...look the console</h5>
			<button onClick={decrease}>-</button>
			<span
				style={{
					display: "inline-block",
					margin: "0 20px",
				}}
			>
				{count}
			</span>
			<button onClick={increase}>+</button>

			<hr style={{ margin: "20px 0" }} />
			<TodoList todos={todos} addTodos={addTodos} />
		</div>
	);
};

const TodoList = memo(({ todos, addTodos }) => {
	const [todo, setTodo] = useState("");

	const onInputChanged = (e) => {
		setTodo(e.target.value);
	};

	console.log("callback demo child");
	return (
		<div>
			<h2>ToDo List</h2>
			<button onClick={() => addTodos(todo)}>Add</button>
			<input type="text" name="todo" value={todo} onChange={onInputChanged} />

			<hr />
			<ul>
				{todos.map((el, i) => (
					<li key={i}>{el}</li>
				))}
			</ul>
		</div>
	);
});

export default CallbackDemo;
