import mysql from 'mysql2/promise';

declare global {
  var connection: any;
}

export async function connect(){
    if(global.connection  && global.connection.state !== 'disconnected'){    
    return global.connection;
}
    const connection = await mysql.createConnection('mysql://root:Canela07!@localhost:3306/cut');
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

connect();




