import React from 'react';
import Comment from '../SinglePrompt/Comment';

const SolutionsUser = ({ user, prompts }) => {
    
  const desiredUsername = user.username;
  const userPrompts = prompts.filter((prompts) => {
    return prompts.solutions.some((solution) => solution.username === desiredUsername);
  });
  // const userSolutions = userPrompts.reduce((acc, prompt) => {
  //     const promptSolutions = prompt.solutions.filter(solution => solution.username === desiredUsername);
  //     return acc.concat(promptSolutions);
  //   }, []);
  //   console.log(userSolutions);
  console.log(userPrompts);

  return (
    <div className="container col-8 flex-column m-5">
      <div className="row card flex-column justify-content-center">
        <div className="row flex-column">
          <div className="row flex-column comment-section">
            <div className="row comment flex-column my-2 mx-3">
              {user.solutions.map((solutions) => (
                <Comment key={solutions._id} solutions={solutions} id />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsUser;
