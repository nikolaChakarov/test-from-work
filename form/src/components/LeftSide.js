import React, { useState } from "react";
import { Link, Switch } from "react-router-dom";
import styles from "./LeftSide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const links = ["Accueil", "Annonces", "Wishlist"];

const LeftSide = () => {
  const [arrowPressed, setArrowPressed] = useState(false);

  const showMenuHandler = (e) => {
    setArrowPressed(!arrowPressed);
  };

  return (
    <div
      className={styles.leftSide}
      style={{ width: arrowPressed ? "26.9rem" : "8.25rem" }}
    >
      <div className={styles.logoGroup}>
        ine<span></span>clu
      </div>

      <div className={styles.arrow} onClick={showMenuHandler}>
        <FontAwesomeIcon
          className={arrowPressed ? styles.rotation : ""}
          icon={faChevronRight}
        />
      </div>

      <div
        className={styles.menuItems}
        style={{
          opacity: arrowPressed ? "1" : "0",
        }}
      >
        <ul className={styles.leftSideProfileMenu}>
          {links.map((el, i) => {
            return (
              <Link to={`/${el.toLowerCase()}`} key={i}>
                {el}
              </Link>
            );
          })}
        </ul>

        <div className={styles.leftSideBottom}>
          <ul>
            <li>
              <Link to="/profil">Profil</Link>
            </li>
            <li>
              <Link to="/logout">Se déconnecter</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
