/*
    路由管理
*/

import { DashBoard } from "../components/dashBoard";


interface IRoute {
    path: string;
    component: JSX.Element | any;
}
export const routes: IRoute[] =
    [
        {
            path: '/',
            component: GetComponent('/dashboard')
        },
        {
            path: '/dashboard',
            component: GetComponent('/dashboard')
        },
    ]

export function GetComponent(params: string) {
    switch (params) {
        case '/':
        case '/dashboard':
            return <DashBoard />
        default:
            break;
    }
}


