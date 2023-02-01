import React from 'react';

const MultChoice = () => {

  const handleFormSubmit = async (event) => {};

  return (
    <>
    <label htmlFor='quizForm' className='p-4'>
      <h2 className='mb-4'>Question will go here go will question?</h2>
      <form className="container flex-column quizForm" id='quizForm' onSubmit={handleFormSubmit}>
        <label className="row" htmlFor='ans1'>
          <input type="radio" id='ans1' name="multChoice"></input>
          <h3 className='mb-0 ps-2'>Answer 1</h3>
        </label>
        <label className="row" htmlFor='ans2'>
          <input type="radio" id='ans2' name="multChoice"></input>
          <h3 className='mb-0 ps-2'>Answer 2</h3>
        </label>
        <label className="row" htmlFor='ans3'>
          <input type="radio" id='ans3' name="multChoice"></input>
          <h3 className='mb-0 ps-2'>Answer 3</h3>
        </label>
        <label className="row" htmlFor='ans4'>
          <input type="radio" id='ans4' name="multChoice"></input>
          <h3 className='mb-0 ps-2'>Answer 4</h3>
        </label>
      </form>
      </label>
    </>
  );
};

export default MultChoice;
