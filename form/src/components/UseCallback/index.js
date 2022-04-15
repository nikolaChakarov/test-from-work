import { useState, useCallback } from "react";
import Todos from "./Todos";

const UseCallbackFunk = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const addTodo = useCallback(() => {
		setTodos((prev) => [...prev, "New Todo"]);
	}, [todos]);

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			</div>
		</>
	);
};

export default UseCallbackFunk;
