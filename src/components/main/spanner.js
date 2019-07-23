import React from "react";

export default function Spanner(quote, clickEvent) {
  let arr = quote.split(" ");
  let ans = [];
  arr.forEach((val,idx) => {
    ans.push(
      <span key={idx} onClick={clickEvent}>
        {`${val} `}
      </span>
    );
  });
  return ans;
}
