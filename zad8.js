function expandedForm(num) {
  const str = String(num);
  const rez = [];
  
  for(let i = 0; i<str.length; i++){
    if(str[i] !== '0'){
      rez.push(str[i] + '0'.repeat(str.length - 1 - i));
    }
  }
  return rez.join(' + ');
}
