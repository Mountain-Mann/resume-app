import React, { useState } from 'react';

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [showInputs, setShowInputs] = useState(true);
  const [editMode, setEditMode] = useState(false);
  // const [save, setSave] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const editInfo = () => {
    setEditMode(true);
  };

  const saveInfo = () => {
    setEditMode(false);
  };

  return (
    <div>
      <h2>Basic Contact Information</h2>
      {editMode ? (
        <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br></br>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </label>
        <br></br>
        <button onClick={saveInfo}>Save</button>
      </div>
      ) : (
        <div>
          <label>
            Name: {name}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Email: {email}
            {editMode ? (
              <button id='edit' onClick={editInfo}>Edit</button>
            ) : (
              <button id='edit' onClick={editInfo}>Edit</button>
            )}
          </label>
          <br></br>
          <label>
            Phone: {phone}
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

export default GeneralInfo;