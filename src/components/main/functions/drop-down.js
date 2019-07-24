import React from 'react';

export default function DropDown(item) {
  let list = [];
  item.forEach((val, idx) =>
    list.push(
      <option key={idx} value={val}>
        {val}
      </option>
    )
  );
  return list;
}
