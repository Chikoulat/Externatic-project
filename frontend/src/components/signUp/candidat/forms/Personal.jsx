/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from "react";
import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";
import PropTypes from "prop-types";
import style from "../inscriptionCandidat.module.scss";
import show from "../../../../assets/images/show.png";
import hide from "../../../../assets/images/hide.png";
import success from "../../../../assets/images/success.png";

function Personal({ register, errors, watch, page, setPage, setValue }) {
  const [showPassword, setShowPassword] = useState(false);
  const [fileUrls, setFileUrls] = useState(null);
  const passwordRef = useRef({});
  const uploader = Uploader({
    apiKey: "free",
  });

  const options = { multi: true };
  passwordRef.current = watch("password", "");

  return (
    <fieldset className={`${style.fieldSet}`}>
      <section>
        <div className={`${style.signDiv}`}>
          <div>
            <p className={`${style.p}`}>Nom:</p>
            <input
              className={`${style.input}`}
              type="text"
              placeholder="Doe"
              autoComplete="true"
              {...register("lastname", {
                minLength: {
                  value: 3,
                  message: "Ce champ est obligatoire",
                },
              })}
            />
            {errors.lastname && (
              <span className="text-red-500">{errors.lastname?.message}</span>
            )}

            <p className={`${style.p}`}>Prénom:</p>
            <input
              className={`${style.input}`}
              type="text"
              placeholder="John"
              autoComplete="true"
              {...register("firstname", {
                minLength: {
                  value: 3,
                  message: "Ce champ est obligatoire",
                },
              })}
            />
            {errors.firstname && (
              <span className="text-red-500">{errors.firstname?.message}</span>
            )}
            <p className={`${style.p}`}>Date de Naissance:</p>
            <input
              className={`${style.input}`}
              type="date"
              {...register("dateOfBirth", {
                required: "Ce champs est obligatoire",
                pattern: {
                  value:
                    /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/,
                  message:
                    "Vous devez renseigner une date dans le bon format, ex: AAAA/MM/JJ",
                },
              })}
            />
            {errors.dateOfBirth && (
              <span className="text-red-500">
                {errors.dateOfBirth?.message}
              </span>
            )}
            <p className={`${style.p}`}>Salaire annuel souhaité :</p>
            <input
              className={`${style.input}`}
              type="number"
              min="0"
              placeholder="50000"
              autoComplete="true"
              {...register("salary", {
                minLength: {
                  value: 1,
                  message: "Vous devez rentrer une valeur",
                },
                required: "Ce champs est obligatoire",
              })}
            />
            {errors.salary && (
              <span className="text-red-500">{errors.salary?.message}</span>
            )}
          </div>

          <div>
            <p className={`${style.p}`}>E-mail:</p>
            <input
              className={`${style.input}`}
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="true"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[.][a-z]+$/i,
                  message: "Champ email invalide",
                },
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}

            <p className={`${style.p}`}>Password:</p>
            <div className={`${style.password}`}>
              <input
                className={`${style.input}`}
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="true"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Minimum 8 caractères",
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum 16 caractères",
                  },
                  required: "Ce champ est obligatoire",
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password?.message}</span>
              )}
              <div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`${style.showPassword}`}
                >
                  {showPassword ? (
                    <img src={show} alt="show" className={`${style.lock}`} />
                  ) : (
                    <img src={hide} alt="hide" className={`${style.lock}`} />
                  )}
                </button>
              </div>
            </div>

            <p className={`${style.p}`}>Confirmez mot de passe :</p>
            <input
              className={`${style.input}`}
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              autoComplete="true"
              {...register("confirmPassword", {
                required: "Vous devez confirmer votre mot de passe",
                validate: (value) =>
                  value === passwordRef.current ||
                  "Les mots de passe ne correspondent pas",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword?.message}
              </span>
            )}
            <div>
              <input
                className={`${style.notification}`}
                type="checkbox"
                id="smsNotification"
                {...register("smsNotificationActive")}
              />
              <label htmlFor="smsNotification" id="smsNotification">
                Notifications SMS
              </label>
            </div>
          </div>

          <div>
            <p className={`${style.p}`}>Numéro de téléphone :</p>
            <input
              className={`${style.input}`}
              type="text"
              placeholder="06........"
              autoComplete="true"
              {...register("contactNumber", {
                minLength: { value: 10, message: "Format invalide" },
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.contactNumber && (
              <span className="text-red-500">
                {errors.contactNumber?.message}
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
            <p className={`${style.p}`}>Pays :</p>
            <input
              className={`${style.input}`}
              type="text"
              placeholder="Pays"
              autoComplete="true"
              {...register("country", {
                pattern: {
                  value: /France/gi,
                  message: "Vous devez impérativement être localiser en France",
                },
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.country && (
              <span className="text-red-500">{errors.country?.message}</span>
            )}
            <div>
              <input
                className={`${style.notification}`}
                type="checkbox"
                id="emailNotification"
                {...register("emailNotificationActive")}
              />
              <label htmlFor="emailNotification" id="emailNotification">
                Notification E-mail
              </label>
            </div>
          </div>
        </div>
      </section>

      <div className={`${style.divButton}`}>
        <UploadButton
          uploader={uploader}
          options={options}
          onComplete={(image) => {
            const urls = image.map((x) => x.fileUrl).join("\n");
            setValue("image", urls);
            setFileUrls(urls);
          }}
        >
          {({ onClick }) => (
            <button
              className={`${style.CandidateButton}`}
              type="button"
              onClick={onClick}
            >
              Photo de profil
            </button>
          )}
        </UploadButton>
        {fileUrls && (
          <img
            src={success}
            alt="success"
            className={`${style.checkPicture}`}
          />
        )}

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
    </fieldset>
  );
}

export default Personal;

Personal.propTypes = {
  register: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
