function howManyTimes(time1,time2){
  let start = Math.floor(new Date(time1).getTime()/1000);
  const end = Math.floor(new Date(time2).getTime()/1000);
  let total = 0;
  while(start<end){
    const curr = new Date(start * 1000);
    const mins = curr.getMinutes();
    const secs = curr.getSeconds();
    let hour = curr.getHours()%12;
    if(hour===0){
      hour = 12;
    }
    if(mins===0 && secs <hour){
      total++;
    }
    else if(mins === 30 && secs ===0){
      total++;
    }
    start++;
  }
  return total;
}
