export default function wordObjSlicer(arr){
  let newArr = [];
  if(arr !== null){
    for(let i=0; i<5; i++){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}