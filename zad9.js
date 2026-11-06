function solution(str){
  let mas = [];
  for(let i =0; i<str.length; i+=2){
    let para = str.slice(i, i+2);
    if(para.length === 1){
      para += '_';
    }
    mas.push(para);
  }
  return mas;
}
