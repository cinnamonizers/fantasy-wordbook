export function setLocalStorage(key, value){
  var setValue = JSON.stringify(value);
  localStorage.setItem(key, setValue);
}

export function getLocalStorage(storedKey){
  var getValue = JSON.parse(localStorage.getItem(storedKey));
  return getValue;
}
