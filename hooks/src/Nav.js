import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
	const containerRules = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				delayChildren: 1,
				staggerChildren: 0.3,
			},
		},
	};

	const linkRule = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<Container variants={containerRules} initial={"hidden"} animate={"visible"}>
			<motion.div className="link-wrapper" variants={linkRule}>
				<Link to={"/callback"}>useCallback</Link>
			</motion.div>
			<motion.div className="link-wrapper" variants={linkRule}>
				<Link to={"/memo"}>useMemo</Link>
			</motion.div>
			<motion.div className="link-wrapper" variants={linkRule}>
				<Link to={"/ref"}>useRef</Link>
			</motion.div>
			<motion.div className="link-wrapper" variants={linkRule}>
				<Link to={"/debounce"}>debounce</Link>
			</motion.div>
			<motion.div className="link-wrapper" variants={linkRule}>
				<Link to={"/throttle"}>throttle</Link>
			</motion.div>
		</Container>
	);
};

const Container = styled(motion.div)`
	display: flex;
	background: #dedede;
	padding: 10px;
	margin-bottom: 20px;

	& a {
		text-decoration: none;
		color: #333;
	}

	& .link-wrapper {
		font-weight: 500;
		margin-right: 20px;
		border-right: 1px solid #333;
		padding-right: 20px;
	}

	& .link-wrapper:last-of-type {
		margin-right: 0;
		padding-right: 0;
		border: none;
	}
`;

export default Nav;
