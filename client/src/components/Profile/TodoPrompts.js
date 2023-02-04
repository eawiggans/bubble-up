import React from 'react';
import SinglePost from '../Blog/SinglePost';

const CompletedPrompts = ({ user, prompts }) => {
    
  const desiredUsername = user.username;
  const userPrompts = prompts.filter(prompt => !prompt.solutions.some(solution => solution.username === desiredUsername));

  const userSolutions = userPrompts.reduce((acc, prompt) => {
    const promptSolutions = prompt.solutions.filter((solution) => solution.username === desiredUsername);
    return acc.concat(promptSolutions);
  }, []);

  console.log(userSolutions);
  console.log(userPrompts);

  return (
    <div className="container col-8 flex-column m-5">
      <div>
        {userPrompts.map((prompts) => (
          <SinglePost key={prompts._id} prompts={prompts} />
        ))}
      </div>
    </div>
  );
};

export default CompletedPrompts;
