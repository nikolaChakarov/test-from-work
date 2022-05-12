import { useMemo, useState } from "react";

const MemoDemo = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	const calculation = useMemo(() => expensiveCalculation(count), [count]);

	const increase = () => {
		setCount(count + 1);
	};

	const decrease = () => {
		setCount(count - 1);
	};

	const addTodos = () => {
		setTodos((prev) => [...prev, todo]);
	};

	const onInputChanged = (e) => {
		setTodo(e.target.value);
	};

	return (
		<div>
			<h1>useMemo</h1>
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
			<h2>ToDo List</h2>
			<button onClick={addTodos}>Add</button>
			<input type="text" name="todo" value={todo} onChange={onInputChanged} />

			<hr />
			<ul>
				{todos.map((el, i) => (
					<li key={i}>{el}</li>
				))}
			</ul>

			<hr />
			<div>
				<h2>Expensive Calculation</h2>
				{calculation}
			</div>
		</div>
	);
};

const expensiveCalculation = (num) => {
	console.log("Calculating...");
	for (let i = 0; i < 1000000000; i++) {
		num += 1;
	}
	return num;
};

export default MemoDemo;
