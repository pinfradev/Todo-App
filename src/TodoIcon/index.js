import React from 'react';
import { ReactComponent as Check } from './check.svg';
import { ReactComponent as Delete } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <Check className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <Delete className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };