import "./Upload.scss";

const Upload = () => {
	return (
		<div className="input-set">
			<input type="file" id="download" name="download" hidden />
			<label htmlFor="download">Télécharger votre contrat de mariage*</label>
			<div className="input-set-style">Choisir un fichier</div>
		</div>
	);
};

export default Upload;
