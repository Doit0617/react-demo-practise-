
// import mysql from 'mysql';

import mysql from 'mysql';
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tt'
    });
connection.connect();


export async function query<T>(sql: string, params: string[]): Promise<T> {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

