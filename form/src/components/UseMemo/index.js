import { useState, useMemo } from "react";

const UseMemoFunc = () => {
	const [todos, setTodos] = useState([]);
	const [count, setCount] = useState(0);

	const addTodo = () => {
		setTodos((prev) => [...prev, "New Todo"]);
	};

	const calculation = useMemo(() => {
		return expensiveCalculation(count);
	}, [count]);

	return (
		<div>
			<div>
				<h2>My Todos</h2>
				{todos.map((todo, index) => {
					return <p key={index}>{todo}</p>;
				})}
				<button onClick={addTodo}>Add Todo</button>
			</div>
			<hr />
			<div>Coount: {count}</div>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<h2>Expensive Calculator</h2>
			{calculation}
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

export default UseMemoFunc;
