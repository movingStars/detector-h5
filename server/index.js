let os = require('os');
// let serverIP = getIPAddress();
// console.log('serverIP', serverIP);

// Get intranet IP
const getIPAddress = () => {
  let IPAddress = '';
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let itemFaces = interfaces[devName];
    for (let i = 0; i < itemFaces.length; i++) {
      let alias = itemFaces[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        IPAddress = alias.address;
      }
    }
  }
  return IPAddress;
}

module.exports = {
  serverIP: getIPAddress
}