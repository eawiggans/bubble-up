import React from 'react';
const Button = ({ title, onClick }) => {
  return (
    <div>
      <button className="btn btn-secondary" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};
export default Button;
