function isCircleSorted( arr ){
  let drop = 0;
  for(let i = 0;i<arr.length;i++){
    const curr = arr[i];
    const next = arr[(i+1) % arr.length];
    if(curr>next){
      drop++;
    }
  }
  return drop <=1;
}
