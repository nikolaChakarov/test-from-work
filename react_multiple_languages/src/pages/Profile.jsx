import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Profile = () => {
	const { t } = useTranslation(["common", "profile"]);

	return (
		<ProfileDiv className="container mt-5 col-9 col-md-6">
			<h1 className="text-center">{t("common:profile")}</h1>

			<div className="form-group">
				<label htmlFor="name">{t("profile:name")}:</label>
				<input
					type="text"
					className="form-control"
					placeholder={t("profile:name")}
					name="name"
					id="name"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="age">{t("profile:age")}:</label>
				<input
					type="number"
					className="form-control"
					placeholder={t("profile:age")}
					name="age"
					id="age"
					min={0}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="email">{t("profile:email")}:</label>
				<input
					type="text"
					className="form-control"
					placeholder={t("profile:email")}
					name="email"
					id="email"
				/>
			</div>

			<div className="text-center">
				<button className="btn btn-dark">{t("common:submit")}</button>
			</div>
		</ProfileDiv>
	);
};

const ProfileDiv = styled.div``;

export default Profile;
