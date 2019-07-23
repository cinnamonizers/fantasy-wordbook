import React from "react";

export default function Spanner(quote, clickEvent) {
  let arr = quote.split(" ");
  let ans = [];
  arr.forEach(val => {
    ans.push(
      <span key={val} onClick={clickEvent}>
        {`${val} `}
      </span>
    );
  });
  return ans;
}
