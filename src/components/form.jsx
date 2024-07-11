import React, { useState } from "react";

const Form = () => {
  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [practicalExperiences, setPracticalExperiences] = useState([]);

  const handleEducationalExperiencesChange = (newExperience) => {
    setEducationalExperiences([...educationalExperiences, newExperience]);
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
      <h1>Resume Form</h1>

      <form>
        <h2>Educational Experiences</h2>
        {educationalExperiences.map((experience, index) => (
          <div key={index}>
            <input type="text" value={experience.schoolName} />
            <input type="text" value={experience.titleOfStudy} />
            <input type="date" value={experience.dateOfStudy} />
          </div>
        ))}
         <button onClick={() => { handleEducationalExperiencesChange }}>Add Experience</button>

        <h2>Practical Experiences</h2>
        {practicalExperiences.map((experience, index) => (
          <div key={index}>
            <input type="text" value={experience.companyName} />
            <input type="text" value={experience.positionTitle} />
            <input type="date" value={experience.mainResponsibilities} />
            <input type="date" value={experience.dateFrom} />
            <input type="date" value={experience.dateUntil} />
          </div>
        ))}
        <button onClick={() => { handlePracticalExperiencesChange }}>Add Experience</button>

        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;