import React, { useState } from "react";
import EducationalExperience from "./education.jsx";
import GeneralInfo from "./contact.jsx";
import PracticalExperience from "./practical.jsx";

const educationalExperiences = [
  {
    schoolName: 'School Name 1',
    titleOfStudy: 'Title of Study 1',
    dateOfStudy: 'Date of Study 1',
  },
  {
    schoolName: 'School Name 2',
    titleOfStudy: 'Title of Study 2',
    dateOfStudy: 'Date of Study 2',
  },
]

const Form = () => {
  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [practicalExperiences, setPracticalExperiences] = useState([]);

  const handleEducationalExperiencesChange = (newExperience) => {
    setEducationalExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  };

  const handlePracticalExperiencesChange = (newExperience) => {
    setPracticalExperiences([...practicalExperiences, newExperience]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit data to API or database
  };

  return (
    <div>
      <form>
        <div>
          <h1>Resume Builder</h1>
          <GeneralInfo />
          <br></br>
          <EducationalExperience />
          <br></br>
          <PracticalExperience />
          <br></br>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;