import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Post from "./Post";

const App = () => {
	const { posts, getAllPosts } = useContext(GlobalContext);

	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<div>
			{posts.map((p, i) => (
				<Post key={i} {...p} />
			))}
		</div>
	);
};

export default App;
