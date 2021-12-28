/*
    定义网络接口协议
*/

export interface INetData<T> {
    code: number,
    data: T,
}

export interface ILoginInfo {
    user_id: number,
    username: string,
    password: string,
}