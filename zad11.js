function domainName(url){
  return url.replace(/https?:\/\/(www\.)?|www\./, '').split('.')[0]
}
