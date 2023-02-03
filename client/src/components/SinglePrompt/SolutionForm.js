import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { ADD_SOLUTION } from '../../utils/mutations';

const SolutionForm = ({ id }) => {

  const [solutionText, setSolutionText] = useState('');
  const [addSolution, { error }] = useMutation(ADD_SOLUTION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('ID: ', id);
      const { data } = await addSolution({
        variables: {
          id,
          newSolution: {
            response: solutionText,
            username: Auth.getProfile().data.username,
          },
        },
      });
      setSolutionText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="px-3 pt-3 row flex-column" onSubmit={handleFormSubmit}>
      <textarea className="custom-textarea" placeholder="Heres what I think..." value={solutionText} onChange={(event) => setSolutionText(event.target.value)}></textarea>
      <div className="row justify-content-end">
        <button className="plus-btn me-3 mt-1" type="submit">
          <svg className="plus-svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SolutionForm;
