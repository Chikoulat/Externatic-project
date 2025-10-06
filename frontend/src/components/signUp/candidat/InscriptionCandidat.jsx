/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import usePostUser from "../../../services/API/user/postUser";
import usePostCandidate from "../../../services/API/candidate/postCandidate";
import usePostDegree from "../../../services/API/degree/postDegree";
import usePostCandidateDegree from "../../../services/API/candidateDegree/postCandidateDegree";
import usePostExperience from "../../../services/API/experience/postExperience";
import style from "./inscriptionCandidat.module.scss";
import Personal from "./forms/Personal";
import Education from "./forms/Education";
import Experience from "./forms/Experience";

export default function InscriptionCandidat() {
  const postUser = usePostUser();
  const postCandidate = usePostCandidate();
  const postDegree = usePostDegree();
  const postCandidateDegree = usePostCandidateDegree();
  const postExperience = usePostExperience();
  // Handling Form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [working, setWorking] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [page, setPage] = useState(1);

  // Handling Form Submit
  const onSubmit = async (data) => {
    try {
      const type = 1;
      const userResponse = await postUser({ ...data, type });

      const { insertId } = userResponse;

      const candidateResponse = await postCandidate({
        ...data,
        insertId,
      });

      const { insertId: candidateId } = candidateResponse;
      const degreeResponse = await postDegree({ ...data, candidateId });

      const { insertId: degreeId } = degreeResponse;

      await postCandidateDegree({
        candidateId,
        degreeId,
      });

      const newData = { ...data };

      await postExperience({
        ...newData,
        candidateId,
      });

      toast.success("Votre inscription a bien été prise en compte.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      console.error(e);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${style.candidateSection}`}
    >
      {page === 1 && (
        <Personal
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          page={page}
          setPage={setPage}
        />
      )}

      {page === 2 && (
        <Education
          register={register}
          errors={errors}
          page={page}
          setPage={setPage}
        />
      )}

      {page === 3 && (
        <div className={`${style.fieldSet}`}>
          <Experience
            register={register}
            errors={errors}
            working={working}
            setWorking={setWorking}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
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
              <button className={`${style.CandidateButton}`} type="submit">
                Inscription
              </button>
            </div>
          </section>
        </div>
      )}
    </form>
  );
}
