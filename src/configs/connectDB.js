import mysql from 'mysql2';

//create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    database: 'nodejsbasic'
});

// //simple query
// connection.query(
//     'SELECT * FROM `users` ',
//     function(err, results, fields) {
//         console.log('>>>check mysql')
//         console.log(results);
//         let rows = results.map((row) => )
//         console.log(results[0]);
//     }
// )



export default connection;