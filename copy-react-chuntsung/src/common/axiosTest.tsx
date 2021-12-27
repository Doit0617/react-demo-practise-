import React from "react";
import axios from 'axios';


interface INetData {
    code: number,
    data: {},
}
const instance = axios.create({
    baseURL: 'http://10.18.62.19:8000',
    timeout: 1000,
});

export async function RequestTest() {
    let ans = await instance.get('/user');
    return ans.data;
}

export async function Register() {
    var params = new URLSearchParams();
    params.append('id', '1231123');
    instance.post('/post', params).then((respose) => {
        console.log(respose);
    });
}
export async function Login(username: string, userpwd: string) {
    var params = new URLSearchParams();
    params.append('username', username);
    params.append('userpwd', userpwd);
    return instance.post('/login', params).then((respose) => {
        let ans: INetData = { code: 0, data: respose.data };
        return ans;
    });
}




