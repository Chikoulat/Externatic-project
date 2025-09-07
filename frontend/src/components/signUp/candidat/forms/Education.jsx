/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import style from "../inscriptionCandidat.module.scss";

function Education({ register, errors, page, setPage }) {
  return (
    <fieldset className={`${style.fieldSet}`}>
      <section>
        <div className={`${style.signDiv}`}>
          <div>
            <p className={`${style.p}`}>Diplome:</p>
            <input
              className={`${style.input}`}
              type="text"
              placeholder="Ingénieur en informatique"
              autoComplete="true"
              {...register("name", {
                minLength: {
                  value: 3,
                  message: "Ce champ est obligatoire",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
            <p className={`${style.p}`}>Niveau:</p>
            <select
              name="Degree"
              className={`${style.input}`}
              {...register("level", {
                required: "Ce champ est obligatoire",
              })}
            >
              <option value="">Sélectionnez votre niveau</option>
              <option value="BTS">Bac+2</option>
              <option value="Licence">Bac+3</option>
              <option value="Master">Bac+5</option>
              <option value="Doctorat">Bac+8</option>
            </select>

            {errors.level && (
              <span className="text-red-500">{errors.level?.message}</span>
            )}

            <p className={`${style.p}`}>Univsité ou école :</p>
            <input
              className={`${style.input}`}
              type="text"
              placeholder="Univsité"
              autoComplete="true"
              {...register("university", {
                pattern: {
                  value: /France/gi,
                  message: "Vous devez écrire le nom d'une université",
                },
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.university && (
              <span className="text-red-500">{errors.university?.message}</span>
            )}
          </div>

          <div>
            <p className={`${style.p}`}>Date de début:</p>
            <input
              className={`${style.input}`}
              type="date"
              {...register("startingDate", {
                required: "Ce champs est obligatoire",
                pattern: {
                  value:
                    /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/,
                  message:
                    "Vous devez renseigner une date dans le bon format, ex: AAAA/MM/JJ",
                },
              })}
            />
            {errors.startingDate && (
              <span className="text-red-500">
                {errors.startingDate?.message}
              </span>
            )}

            <p className={`${style.p}`}>Date de fin:</p>
            <input
              className={`${style.input}`}
              type="date"
              {...register("completionDate", {
                required: "Ce champs est obligatoire",
                pattern: {
                  value:
                    /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/,
                  message:
                    "Vous devez renseigner une date dans le bon format, ex: AAAA/MM/JJ",
                },
              })}
            />
            {errors.completionDate && (
              <span className="text-red-500">
                {errors.completionDate?.message}
              </span>
            )}

            <p className={`${style.p}`}>Ville :</p>
            <input
              className={`${style.input}`}
              type="text"
              placeholder="Ville"
              autoComplete="true"
              {...register("city", {
                minLength: {
                  value: 1,
                  message: "Ce champ ne peut être vide",
                },
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.city && (
              <span className="text-red-500">{errors.city?.message}</span>
            )}
          </div>
        </div>
      </section>

      <section className={`${style.notification}`}>
        <div className={`${style.divButton}`}>
          <button
            type="button"
            className={`${style.CandidateButton}`}
            onClick={(e) => {
              e.preventDefault();
              setPage(page - 1);
            }}
          >
            Précédent
          </button>
          <button
            type="button"
            className={`${style.CandidateButton}`}
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            Suivant
          </button>
        </div>
      </section>
    </fieldset>
  );
}

export default Education;

Education.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
