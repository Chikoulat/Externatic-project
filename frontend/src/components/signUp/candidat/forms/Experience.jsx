/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import style from "../inscriptionCandidat.module.scss";

function Experience({
  register,
  errors,
  isDisabled,
  setIsDisabled,
  working,
  setWorking,
}) {
  return (
    <fieldset className={`${style.fieldSet}`}>
      <div className={`${style.notification}`}>
        <input
          type="checkbox"
          onChange={() => setIsDisabled(!isDisabled)}
          id="exp"
        />
        <label htmlFor="exp">Je n'ai pas d'expérience professionnelle</label>
      </div>
      <section>
        <div className={`${style.signDiv}`}>
          <div>
            <p className={`${style.p}`}>Votre poste:</p>
            <input
              disabled={isDisabled}
              className={`${style.input}`}
              type="text"
              placeholder="Développeur frontend"
              autoComplete="true"
              {...register("jobTitle")}
            />
            {errors.jobTitle && (
              <span className="text-red-500">{errors.jobTitle?.message}</span>
            )}

            <p className={`${style.p}`}>Entreprise:</p>
            <input
              disabled={isDisabled}
              className={`${style.input}`}
              type="text"
              placeholder="Google"
              autoComplete="true"
              {...register("companyName")}
            />
            {errors.companyName && (
              <span className="text-red-500">
                {errors.companyName?.message}
              </span>
            )}
            <p className={`${style.p}`}>Ville :</p>
            <input
              disabled={isDisabled}
              className={`${style.input}`}
              type="text"
              placeholder="Ville"
              autoComplete="true"
              {...register("city")}
            />
            {errors.city && (
              <span className="text-red-500">{errors.city?.message}</span>
            )}
          </div>

          <div>
            <p className={`${style.p}`}>Date de début:</p>
            <input
              disabled={isDisabled}
              className={`${style.input}`}
              type="date"
              {...register("startDate", {
                pattern: {
                  value:
                    /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/,
                  message:
                    "Vous devez renseigner une date dans le bon format, ex: AAAA/MM/JJ",
                },
              })}
            />
            {errors.startDate && (
              <span className="text-red-500">{errors.startDate?.message}</span>
            )}

            <div>
              <p className={`${style.p}`}>Date de fin:</p>
              <input
                disabled={isDisabled || working}
                className={`${style.input}`}
                type="date"
                {...register("endDate", {
                  pattern: {
                    value:
                      /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/,
                    message:
                      "Vous devez renseigner une date dans le bon format, ex: AAAA/MM/JJ",
                  },
                })}
              />
              <input
                type="checkbox"
                onChange={() => setWorking(!working)}
                id="still"
              />
              <label htmlFor="still">J'occupe toujours ce poste</label>
            </div>
            {errors.endDate && (
              <span className="text-red-500">{errors.endDate?.message}</span>
            )}
            <p className={`${style.p}`}>Pays :</p>
            <input
              disabled={isDisabled}
              className={`${style.input}`}
              type="text"
              placeholder="Pays"
              autoComplete="true"
              {...register("country")}
            />
            {errors.country && (
              <span className="text-red-500">{errors.country?.message}</span>
            )}
          </div>
        </div>
        <div className={`${style.description}`}>
          <p className={`${style.p}`}>Description :</p>
          <textarea
            disabled={isDisabled}
            className={`${style.inputArea}`}
            placeholder="Décrivez votre poste"
            autoComplete="true"
            {...register("description")}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description?.message}</span>
          )}
        </div>
      </section>
    </fieldset>
  );
}

export default Experience;

Experience.propTypes = {
  register: Function.isRequired,
  errors: Object.isRequired,
  isDisabled: Boolean.isRequired,
  setIsDisabled: Function.isRequired,
  working: Boolean.isRequired,
  setWorking: Function.isRequired,
};
