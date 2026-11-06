function bingo(ticket, win){
  let min = 0;
  for(let i = 0; i<ticket.length; i++){
    let str = ticket[i][0];
    let num = ticket[i][1];
    let has = false;
    for(let j = 0; j<str.length; j++){
      if(str.charCodeAt(j) === num){
      has = true;
      break;
    }
  }
    if(has){
      min++;
    }
    }
  return min >= win ? 'Winner!' : 'Loser!';
  }
