function wave(str){
  let rez = [];
  for(let i = 0; i<str.length; i++){
    if(str[i]=== ' '){
      continue;
    }
    let wawe = str.slice(0, i)+str[i].toUpperCase()+str.slice(i+1);
    rez.push(wawe);
  }
  return rez;
}
