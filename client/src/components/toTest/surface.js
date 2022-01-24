import React from "react";
import styles from "./Surface.module.css";

const Surface = ({ text, onChange, values }) => {
	return (
		<div className={styles.surfaceMain}>
			<div className={styles.transparent}></div>

			<div className={styles.background}>
				<div className={styles.typeArrow}>
					<p>{text}</p>
					<img src="/img/down-arrow.svg" alt="arrow" />
				</div>
				<div onClick={(e) => e.stopPropagation()}>
					<h3>Quelle surface habitable ?</h3>
					<label htmlFor="surface_habitable_min">Min</label>
					<input
						className={styles.annoncesInput}
						onChange={onChange}
						value={values.surface_habitable_min}
						name="surface_habitable_min"
						type="text"
					/>
					<label htmlFor="surface_habitable_max">Max</label>
					<input
						className={styles.annoncesInput}
						onChange={onChange}
						value={values.surface_habitable_max}
						name="surface_habitable_max"
						type="text"
					/>
					<h3>Surface du terrain</h3>
					<label htmlFor="surface_du_terrain_min">Max</label>
					<input
						className={styles.annoncesInput}
						onChange={onChange}
						value={values.surface_du_terrain_min}
						name="surface_du_terrain_min"
						type="text"
					/>
					<label htmlFor="surface_du_terrain_max">Max</label>
					<input
						className={styles.annoncesInput}
						onChange={onChange}
						value={values.surface_du_terrain_max}
						name="surface_du_terrain_max"
						type="text"
					/>
				</div>
			</div>
		</div>
	);
};

export default Surface;
