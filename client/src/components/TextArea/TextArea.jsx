import React from 'react';

const TextArea = () => {
  const handleFormSubmit = async (event) => {};

  return (
    <>
      <label htmlFor="quizForm" className="p-4">
        <h2 className="mb-4">Question will go here go will question?</h2>
        <form className="container flex-column quizForm" id="quizForm" onSubmit={handleFormSubmit}>
          <textarea className="p-4" type="textarea"></textarea>
        </form>
      </label>
    </>
  );
};

export default TextArea;
