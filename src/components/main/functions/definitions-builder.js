import React from 'react';

export default function listBuilder(title, arr) {
  return (
    <React.Fragment>
      <li className="defSynExStyle">{title}</li>
      <li >
        <ul >
          {arr.map((val, idx) => {
            return <li key={idx}>{val}</li>
          })}
        </ul>
      </li>
    </React.Fragment>
  )
}
