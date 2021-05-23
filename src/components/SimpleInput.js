import React, { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInpRef = useRef();

  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmittedHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInpRef.current.value;
    console.log('entered value: ' + enteredValue);
    setEnteredName('');
  };
  const nameInputClasses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid';
  return (
    <form onSubmit={formSubmittedHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInpRef}
          onChange={nameInputChangedHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name can not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
