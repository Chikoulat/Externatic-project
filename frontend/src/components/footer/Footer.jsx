import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link to="/recherche?terms=">Nos offres</Link>
        </li>
        <li>
          <Link to="/rgpd">RGPD</Link>
        </li>
        <li>
          <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
        </li>
        <li>
          <p>Adresse: 105 Rue du Perlinpinpion - 75008 Paris</p>
        </li>
        <li>
          <p> Télephone: 067999999</p>
        </li>
      </ul>
      <p className="d-flex justify-content-center align-content-center">
        Externatic © 2023 - Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;
