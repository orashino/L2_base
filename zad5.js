function primeFactors(n){
  let rez= "";
  let div = 2;
  while(n > 1){
    let count = 0;
    while(n % div === 0){
      count++;
      n /= div;
    }
    if(count > 0){
      if(count === 1){
        rez += `(${div})`;
      }
      else{
        rez += `(${div}**${count})`;
      }
    }
    div++;
  }
  return rez;
}
