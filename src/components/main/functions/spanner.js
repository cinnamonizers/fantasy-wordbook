import React from 'react';

export default function spanner(quote) {
  let arr = quote.split(' ');
  let ans = [];
  arr.forEach((val,idx) => {
    ans.push(
      <span key={idx}>
        {`${val} `}
      </span>
    );
  });
  return ans;
}
