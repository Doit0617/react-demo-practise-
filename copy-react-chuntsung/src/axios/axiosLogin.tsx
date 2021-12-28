import { configure } from "@testing-library/react";
import React from "react";
import { instance } from "../common/axiosMnager";
interface INetData<T> {
    code: number,
    data: T,
}

export async function Register() {
    var params = new URLSearchParams();
    params.append('id', '1231123');
    instance.post('/post', params).then((respose) => {
        console.log(respose);
    });
}
export async function Login<T>(username: string, userpwd: string) {
    var params = new URLSearchParams();
    params.append('username', username);
    params.append('userpwd', userpwd);
    return instance.post('/login', params).then((respose) => {
        let info = respose.data as INetData<T>;
        console.log(info);
        return info;
    });
}