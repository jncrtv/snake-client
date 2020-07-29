/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 //Stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  //listens for user input tp be ctrl c and will exit program
  const handleUserInput = stdin.on('data', (key) => {	
    if (key === '\u0003') {	
      process.exit();	
    }
    
    if (key === 'w' ){
      connection.write('Move: up');
    } 
    
    if (key === 's' ){
      connection.write('Move: down');
    } 
    
    if (key === 'a' ){
      connection.write('Move: left');
    } 
    
    if (key === 'd' ){
      connection.write('Move: right');
    } 

    if (key === 'j' ){
      connection.write('Say: SnakeBoy');
    }

    if (key === 'i' ){
      connection.write('Say: weeeeeeee');
    }
  })

  return stdin;
}

module.exports = { setupInput };