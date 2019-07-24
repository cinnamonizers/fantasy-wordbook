import React from "react";

import { getLocalStorage } from "../functions/localstorage.js";

export default function wordsPage() {
  let wordsArr = getLocalStorage("wordObj");

  console.log(wordsArr);
  wordsArr.forEach(wordStored => console.log(wordStored.word));

  return (
    <React.Fragment></React.Fragment>
  )
}