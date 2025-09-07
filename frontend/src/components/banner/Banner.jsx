import PropTypes from "prop-types";
import styles from "./banner.module.scss";
import HomeSearchBar from "../HomeSearchBar/HomeSearchBar";

function Banner({ count }) {
  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center ${styles.bannerSection}`}
    >
      <h1>
        <span>{count.OffersAvailable}</span> offres d'emploi disponibles
      </h1>
      <HomeSearchBar />
    </section>
  );
}
Banner.propTypes = {
  count: PropTypes.shape({
    OffersAvailable: PropTypes.number.isRequired,
  }).isRequired,
};

export default Banner;
