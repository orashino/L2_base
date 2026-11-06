function cache(func) {
  const cacheS = {};
  return function(...args){
    const key = JSON.stringify(args);
    if(!(key in cacheS)){
      cacheS[key] = func(...args);
    }
    return cacheS[key];
  };
}
