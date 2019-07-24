import React from 'react';

export default function ListBuilder(title, arr) {
  return (
    <React.Fragment>
      <li>{title}</li>
      <li>
        <ul>
          {arr.map((val, idx) => {
            return <li key={idx}>{val}</li>
          })}
        </ul>
      </li>
    </React.Fragment>
  )
}
