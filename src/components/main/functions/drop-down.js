import React from 'react';

export default function dropDown(item) {
  return (
    <React.Fragment>
      {item.map((val, idx) => {
        return <option key={idx} value={val}>{val}</option>
      })}
    </React.Fragment>
  )
}
