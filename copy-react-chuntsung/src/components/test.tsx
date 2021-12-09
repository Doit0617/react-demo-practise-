import React from 'react';
import { Button, Menu, Table } from 'antd';
import { DashboardOutlined, ScheduleOutlined, TeamOutlined, ProfileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
export function MenuTest() {
    return (
        <Menu mode='inline' defaultOpenKeys={['admin-panel']} defaultSelectedKeys={['admin-panel1']} >

            <SubMenu key="admin-panel" title={
                <span>
                    <DashboardOutlined />
                    <span>管理面板</span>
                </span>}>
                <Menu.Item key={'admin-panel1'}>
                    我的主页
                    {console.log("1111111111111111")}
                </Menu.Item>
            </SubMenu>

            <SubMenu key="Process-mana" title={
                <span>
                    <ScheduleOutlined />
                    <span>课程管理</span>
                </span>}>
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
    );
}

