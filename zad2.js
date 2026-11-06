function ipv4Parser(ip, mask){
  const ipO = ip.split('.').map(Number);
  const maskO = mask.split('.').map(Number);
  const network = [];
  const host = [];
  for(let i=0;i<4;i++){
    const net = ipO[i] & maskO[i];
    network.push(net);
    host.push(ipO[i]-net);
  }
  return [network.join('.'), host.join('.')];
}
