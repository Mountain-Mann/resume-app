import React, { useState } from 'react';

const EducationalExperience = () => {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  // const [showInputs, setShowInputs] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [save, setSave] = useState(false);

  const handleSchoolNameChange = (event) => {
    setSchoolName(event.target.value);
  };

  const handleTitleOfStudyChange = (event) => {
    setTitleOfStudy(event.target.value);
  };

  const handleDateOfStudyChange = (event) => {
    setDateOfStudy(event.target.value);
  };

  const editInfo = () => {
    setEditMode(true);
  };

  const saveInfo = () => {
    setEditMode(false);
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      {editMode ? (
        <div>
          <label>
            School Name:
            <input type="text" value={schoolName} onChange={handleSchoolNameChange} />
          </label>
          <br></br>
          <label>
            Title of Study:
            <input type="text" value={titleOfStudy} onChange={handleTitleOfStudyChange} />
          </label>
          <br></br>
          <label>
            Date of Study:
            <input type="date" value={dateOfStudy} onChange={handleDateOfStudyChange} />
          </label>
          <br></br>
          <button onClick={saveInfo}>Save</button>
        </div>
      ) : (
        <div>
          <label>
            School Name: {schoolName}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Title of Study: {titleOfStudy}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Date of Study: {dateOfStudy}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;