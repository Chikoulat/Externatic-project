import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./jobOffers.module.scss";

function JobOffers({ job }) {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${styles.jobOffersContainer}`}
    >
      <h1 className="my-30">Nos dernières offres</h1>
      <section className={`p-20 ${styles.jobOffers}`}>
        {job.map((j) => (
          <div
            key={j.id}
            className={`${styles.jobOffer}`}
          >
            <div className={`${styles.imgContainer}`}>
              <img src={j.image} alt="logo" />
            </div>
            <div className={`${styles.jobOfferTitle}`}>
              <h3 className="mb-10">{j.title}</h3>
              <p>{j.type}</p>
              <p>{j.city}</p>
              <NavLink to={`/offre/${j.id}`}>Voir</NavLink>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
JobOffers.propTypes = {
  job: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default JobOffers;
