function longest(arr, n) {
  const indexArr = arr.map((str, index) => ({str, length: str.length, index}));
  indexArr.sort((a,b) => {
    if(b.length!== a.length){
      return b.length - a.length;
    }
    return a.index - b.index;
  });
  return indexArr[n-1].str;
}
