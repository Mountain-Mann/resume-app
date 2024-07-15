import React, { useState } from 'react';

const PracticalExperience = () => {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [mainResponsibilities, setMainResponsibilities] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');
  const [editMode, setEditMode] = useState(false);
  // const [save, setSave] = useState(false);

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handlePositionTitleChange = (event) => {
    setPositionTitle(event.target.value);
  };

  const handleMainResponsibilitiesChange = (event) => {
    setMainResponsibilities(event.target.value);
  };

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  };

  const handleDateUntilChange = (event) => {
    setDateUntil(event.target.value);
  };

  const editInfo = () => {
    setEditMode(true);
  };

  const saveInfo = () => {
    setEditMode(false);
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      {editMode ? (
        <div>
          <label>
            Company Name:
            <input type="text" value={companyName} onChange={handleCompanyNameChange} />
          </label>
          <br></br>
          <label>
            Position Title:
            <input type="text" value={positionTitle} onChange={handlePositionTitleChange} />
          </label>
          <br></br>
          <label>
            Main Responsibilities:
            <input type="text" value={mainResponsibilities} onChange={handleMainResponsibilitiesChange} />
          </label>
          <br></br>
          <label>
            Date From:
            <input type="date" value={dateFrom} onChange={handleDateFromChange} />
          </label>
          <br></br>
          <label>
            Date Until:
            <input type="date" value={dateUntil} onChange={handleDateUntilChange} />
          </label>
          <br></br>
          <button onClick={saveInfo}>Save</button>
        </div>
      ) : (
        <div>
          <label>
            Company Name: {companyName}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Position Title: {positionTitle}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Main Responsibilities: {mainResponsibilities}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Date From: {dateFrom}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Date Until: {dateUntil}
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

export default PracticalExperience;