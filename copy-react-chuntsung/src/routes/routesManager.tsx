/*
    路由管理
*/

import { type } from "os";
import { DashBoard } from "../components/dashBoard";
import { MyProject, MyProject1 } from "../components/myproject";
import { ProjectList } from "../components/projectTable";
import Path from "./routePath";


interface IRoute {
    path: string;
    component: JSX.Element | any;
}
export const routes: IRoute[] =
    [
        {
            path: Path.defaultPath,
            component: GetComponent(Path.defaultPath)
        },
        {
            path: Path.dashboard,
            component: GetComponent(Path.dashboard)
        },
        {
            path: Path.projectList,
            component: GetComponent(Path.projectList),
        },
        {
            path: Path.myproject,
            component: GetComponent(Path.myproject),
        }
    ]

export function GetComponent(params: string) {
    switch (params) {
        case Path.defaultPath || Path.dashboard:
            return <DashBoard />
        case Path.projectList:
            return <ProjectList />
        case Path.myproject:
            return <MyProject />
    }
    return <DashBoard />;
}
export const defaultPath = '/';



