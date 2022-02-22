import React, { useState } from "react";
import "./AddUser.scss";

import { useForm } from "../../../../utils/hooks";

import { ReactComponent as ArrowDown } from "../../../../img/svg/arrow-down.svg";
import { useMutation } from "@apollo/client";
import {
	CREATE_USER_MANUALLY,
	UPDATE_USER,
} from "../../../../utils/graphql/mutations/users";
import { useEffect } from "react";

const AddUser = ({
	setShowAddUserForm,
	refetch,
	userToEdit,
	setUserToEdit,
}) => {
	const [selects, setSelects] = useState({
		statut: "Super Admin",
		civilite: "Mr",
		pole: "Direction Générale",
	});

	const [selectClick, setSelectClick] = useState({});
	const [oldEmail, setOldEmail] = useState(userToEdit ? userToEdit.email : "");
	const onSelectClick = (e) => {
		const currentSelect = e.currentTarget.dataset.name;

		setSelectClick({ [currentSelect]: !selectClick[currentSelect] });
	};

	const { values, setValues, onChange, onCheckBoxChange, onSubmit } = useForm(
		registerUser,
		{
			statut: "Super Admin",
			civilite: "Mr",
			pole: "Derection Générale",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			mobile_phone: "",
			etat: true,
		}
	);

	const [createUserManually] = useMutation(CREATE_USER_MANUALLY, {
		onCompleted: (data) => {
			refetch();
			setShowAddUserForm(false);
		},
		variables: { input: values },
	});

	const [updateUser /*, { loading }*/] = useMutation(UPDATE_USER, {
		onCompleted: () => {
			console.log("saved");
			setShowAddUserForm(false);
			refetch();
		},
		onError(err) {
			console.log(err);
		},
	});

	useEffect(() => {
		if (userToEdit) {
			setValues(userToEdit);
		}
	}, [userToEdit, setValues]);

	function registerUser() {
		if (!userToEdit) {
			createUserManually();
		} else {
			const coppiedVals = { ...values };
			delete coppiedVals.id;
			updateUser({
				variables: {
					input: coppiedVals,
					oldEmail,
				},
			});
		}
	}

	const closeUserForm = () => {
		setShowAddUserForm(false);
		setUserToEdit(null);
	};

	return (
		<div className="container-fluid" id="add-user-admin-form">
			<form onSubmit={onSubmit}>
				<h1>Ajouter un nouvel utilisateur</h1>
				<div className="d-flex">
					<div className="padding-wrapper col">
						<div
							className="select-wrapper me-4"
							data-name="statut"
							onClick={onSelectClick}
						>
							<span>Statut</span>
							<div className="inner-select-wrapper top">
								<div className="current-arrow-wrapper">
									<span className="current-option">{values.statut}</span>
									<ArrowDown
										style={{
											transform: selectClick.statut ? "rotate(180deg)" : "",
										}}
									/>
								</div>
								{selectClick.statut && (
									<SelectOptions
										currentSelect={values.statut}
										selectName="statut"
										setSelects={setSelects}
										setValues={setValues}
									/>
								)}
							</div>
						</div>
					</div>

					<div
						className="select-wrapper col-4"
						data-name="civilite"
						onClick={onSelectClick}
					>
						<span>Civilité</span>
						<div className="inner-select-wrapper">
							<div className="current-arrow-wrapper">
								<span className="current-option">{values.civilite}</span>
								<ArrowDown
									style={{
										transform: selectClick.civilite ? "rotate(180deg)" : "",
									}}
								/>
							</div>
							{selectClick.civilite && (
								<SelectOptions
									currentSelect={values.civilite}
									selectName="civilite"
									setSelects={setSelects}
									setValues={setValues}
								/>
							)}
						</div>
					</div>
				</div>

				<div
					className="select-wrapper"
					data-name="pole"
					onClick={onSelectClick}
				>
					<span>Pôle</span>
					<div className="inner-select-wrapper">
						<div className="current-arrow-wrapper">
							<span className="current-option">{values.pole}</span>
							<ArrowDown
								style={{
									transform: selectClick.pole ? "rotate(180deg)" : "",
								}}
							/>
						</div>
						{selectClick.pole && (
							<SelectOptions
								currentSelect={values.pole}
								selectName="pole"
								setSelects={setSelects}
								setValues={setValues}
							/>
						)}
					</div>
				</div>

				<label className="input-set">
					<span>Nom</span>
					<input
						type="text"
						name="last_name"
						onChange={onChange}
						value={values.last_name}
					/>
				</label>

				<label className="input-set">
					<span>Prénom</span>
					<input
						type="text"
						name="first_name"
						onChange={onChange}
						value={values.first_name}
					/>
				</label>

				<label className="input-set">
					<span>Email</span>
					<input
						type="text"
						name="email"
						onChange={onChange}
						value={values.email}
					/>
				</label>

				<label className="input-set">
					<span>Téléphone</span>
					<input
						type="text"
						name="mobile_phone"
						onChange={onChange}
						value={values.mobile_phone}
					/>
				</label>

				<label className="input-set">
					<span>Mot de passe</span>
					<input
						type="password"
						name="password"
						onChange={onChange}
						value={values.password}
					/>
				</label>

				<div className="switch-wrapper">
					<span>État</span>
					<label className="switch">
						<input
							type="checkbox"
							name="etat"
							onChange={onCheckBoxChange}
							checked={values.etat}
						/>
						<span className="slider round"></span>
					</label>
				</div>

				<div className="bttns-set d-flex justify-content-between">
					<button
						className="bttn-custom bttn-cancel"
						type="button"
						onClick={closeUserForm}
					>
						Annuler
					</button>
					<button className="bttn-custom" type="submit">
						Enregistrer
					</button>
				</div>
			</form>
		</div>
	);
};

const SelectOptions = ({
	currentSelect,
	selectName,
	setSelects,
	setValues,
}) => {
	const data =
		selectName === "statut"
			? ["Super Admin", "Admin", "Utilisateur", "Référenceur"]
			: selectName === "civilite"
			? ["Mr", "Mme"]
			: [
					"Direction Générale",
					"DG délégué",
					"Finance",
					"Communication",
					"Marketing",
					"Support client",
					"Commercial",
					"Partenariat",
			  ];

	const onLiClick = (el) => {
		setSelects((prev) => {
			return {
				...prev,
				[selectName]: el,
			};
		});

		setValues((prev) => {
			return {
				...prev,
				[selectName]: el,
			};
		});
	};

	return (
		<ul className="ul-hidden">
			{data
				.filter((el) => el !== currentSelect)
				.map((el, i) => {
					return (
						<li className="li-option" key={i} onClick={() => onLiClick(el)}>
							{el}
						</li>
					);
				})}
		</ul>
	);
};

export default AddUser;
