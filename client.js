const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', (data) => {
    console.log('Successfuly connected to game server');

    conn.write('Name: SNK');
   
  });
  
  
  return conn;
}



module.exports = connect;