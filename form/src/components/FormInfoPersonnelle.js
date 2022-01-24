import { useState, useEffect } from "react";
import styles from "./FormInfoPersonnelle.module.css";
import downloadIcon from "../img/download.png";

const FormInfoPersonnelle = () => {
  const [username, setUsername] = useState("");

  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = getDate();

    setDate(currentDate);
  }, [date]);

  return (
    <section className={styles.profileInfo}>
      <div className={styles.profileInfoTop}>
        <p>Profile</p>
        <div className={styles.profileInfoTopPersonData}>
          <div className={styles.namePhoto}>
            <p>{username || "No Name yet..."}</p>
            <img src="/img/icon.png" alt="user photo" />
          </div>
          <p className={styles.currentDate}>{date}</p>
        </div>
      </div>

      <div className={styles.profileInfoMiddle}>
        <h3>Infos Personnelles</h3>

        <form className={styles.form}>
          {/*-- first col --*/}
          <div className={styles.col}>
            <div className={styles.infoSet}>
              <label htmlFor="lastname">Nom</label>
              <input id="lastname" name="lastname" placeholder="Nom*" />
            </div>

            <div className={styles.infoSet}>
              <label htmlFor="telephoneFix">Téléphone Fixe</label>
              <input
                id="telephoneFix"
                name="telephoneFix"
                placeholder="Telefone Fixe"
              />
            </div>

            <div className={styles.infoSet}>
              <label htmlFor="adresse">Adresse</label>
              <input
                id="adresse"
                name="adresse"
                placeholder="Numero de la voie*"
              />
            </div>

            <div className={styles.infoSet}>
              <label htmlFor="pays">Pays</label>
              <select id="pays">
                <option value="france">France</option>
                <option value="england">England</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <div className={styles.infoSet}>
              <label htmlFor="situationFamiliale">Situation familiale</label>
              <select id="situationFamiliale">
                <option value="marie">Marie</option>
                <option value="divorce">Divorce</option>
                <option value="celibataire">Celibataire</option>
              </select>
            </div>
          </div>
          {/*-- second col --*/}
          <div className={styles.col}>
            <div className={styles.infoSet}>
              <label htmlFor="firstname">Prénom</label>
              <input id="firstname" name="firstname" placeholder="Prénom" />
            </div>

            <div className={styles.infoSet}>
              <label htmlFor="portable">Téléphone Portable</label>
              <input
                id="portable"
                name="portable"
                placeholder="Téléphone Portable"
              />
            </div>

            <div className={styles.infoSet}>
              <label style={{ opacity: 0 }} htmlFor="indice">
                indice
              </label>
              <select id="indice">
                <option value="france">France</option>
                <option value="england">England</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <div className={styles.infoSet}>
              <label htmlFor="ville">Ville</label>
              <input id="ville" name="ville" placeholder="Ville" />
            </div>

            {/*-- input type FILE --*/}
            <div className={styles.infoSet}>
              <label htmlFor="fichierIdentite" className={styles.labelTypeFile}>
                Télécharger votre contrat de mariage*
              </label>
              <div className={styles.inputFileReplace}>
                <p>Choisir un fichier</p>
                <input
                  name="fichierIdentite"
                  id="fichierIdentite"
                  type="file"
                  placeholder="Choisir un fichier"
                />
                <img src={downloadIcon} alt="arrowDown" />
              </div>
            </div>
            {/*-- END input type FILE --*/}
          </div>
          {/*-- third col --*/}
          <div className={styles.col}>
            <div className={styles.infoSet}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" placeholder="Email" />
            </div>

            {/*-- input type FILE --*/}
            <div className={styles.infoSet}>
              <label htmlFor="fichierIdentite" className={styles.labelTypeFile}>
                Télécharger votre pièce d’identité*
              </label>
              <div className={styles.inputFileReplace}>
                <p>Choisir un fichier</p>
                <input
                  name="fichierIdentite"
                  id="fichierIdentite"
                  type="file"
                  placeholder="Choisir un fichier"
                />
                <img src={downloadIcon} alt="arrowDown" />
              </div>
            </div>
            {/*-- END input type FILE --*/}

            <div className={styles.infoSet}>
              <label style={{ opacity: 0 }} htmlFor="indice">
                type de voie
              </label>
              <select id="typeDeVoie" name="typeDeVoie">
                <option value="france">France</option>
                <option value="england">England</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <div className={styles.infoSet}>
              <label htmlFor="codePostale">Code postale</label>
              <input
                name="codePostale"
                id="codePostale"
                placeholder="Code postale"
              />
            </div>
          </div>
          {/*-- fourth col --*/}
          <div className={styles.col}>
            <div className={styles.infoSet} style={{ marginBottom: "14.7rem" }}>
              <label htmlFor="iban">RIB/ IBAN bancaire</label>
              <input name="iban" id="iban" placeholder="RIB / IBAN" />
            </div>

            <div className={styles.infoSet}>
              <input name="libelle" id="libelle" placeholder="Libellé" />
            </div>
          </div>
        </form>
      </div>

      <div className={styles.profileInfoBottom}></div>
    </section>
  );
};

const getDate = () => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth().toLocaleString();
  const year = currentDate.getFullYear();

  return `${day} ${months[month]} ${year}`;
};

export default FormInfoPersonnelle;
