function hasTwoCubeSums(n) {
  let count = 0;
  const limit = Math.cbrt(n/2);
  for(let a = 1; a <= limit; a++){
    const bC = n- a * a* a;
    const b = Math.round(Math.cbrt(bC));
    if(b>a && b*b*b === bC){
      count++;
      if(count>=2){
        return true;
      }
    }
  }
  return false;
}
