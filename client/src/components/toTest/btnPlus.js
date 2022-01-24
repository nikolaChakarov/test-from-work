import styles from "./BtnPlus.module.css";

const BtnPlus = ({ text, addInfoHandler, serialize, annonces, selected }) => {
	return (
		<div
			className={styles.btnSet}
			onClick={
				annonces
					? () => addInfoHandler("features", serialize(text), text)
					: () => addInfoHandler(text)
			}
		>
			<p
				className={styles.btnCircle}
				style={{ backgroundColor: selected ? "green" : "" }}
			>
				+
			</p>
			<p className={styles.btnText}>{text}</p>
		</div>
	);
};

export default BtnPlus;
