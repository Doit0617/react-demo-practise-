import React from "react";
import { Menu } from 'antd';
import { DashboardOutlined, ScheduleOutlined, TeamOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
export function Sider() {
    return (
        <>
            <Menu mode='inline' defaultOpenKeys={['admin-panel']} defaultSelectedKeys={['admin-panel1']} >

                <SubMenu key="admin-panel" title={
                    <span>
                        <DashboardOutlined />
                        <span>管理面板</span>
                    </span>}>
                    <Menu.Item key={'admin-panel1'} >
                        <Link to="/dashboard">我的主页</Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="Process-mana" title={
                    <span>
                        <ScheduleOutlined />
                        <span>流程管理</span>
                    </span>}>
                    <Menu.Item key="process1">
                        课题列表
                    </Menu.Item>
                    <Menu.Item key="process2">
                        我的课程
                    </Menu.Item>
                    <Menu.Item key="process3">
                        我的报名
                    </Menu.Item>
                    <Menu.Item key="process4">
                        我的活动
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="user-mana" title={<span>
                    <TeamOutlined />
                    <span>用户管理</span>
                </span>}>
                    <Menu.Item key="user1">
                        导师列表
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="personal-info" title={
                    <span>
                        <ProfileOutlined />
                        <span>个人信息</span>
                    </span>}>
                    <Menu.Item key='info1'>
                        修改信息
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </>
    );

}
