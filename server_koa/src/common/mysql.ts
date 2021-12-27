
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


export async function query(sql: string, params: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, res) => {
            if (err) {
                let ans = { code: '-1', data: { err } }
                reject(JSON.stringify(ans));
            } else {
                let ans = { code: 0, data: res }
                resolve(JSON.stringify(ans));
            }
        });
    });
}

