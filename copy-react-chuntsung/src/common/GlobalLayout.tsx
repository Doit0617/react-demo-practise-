import React, { useState } from "react";
import { Layout } from 'antd';
import './GlobalLayout.css';
const { Header, Sider, Content, Footer } = Layout;

interface IConponents {
    header: JSX.Element;
    silder: JSX.Element;
    children: React.ReactNode
}

export function GlobalLayout(conponent: IConponents) {
    return (
        <>
            <Layout>
                <Header className="light">{conponent.header}</Header>
                <Layout>
                    <Sider>{conponent.silder}</Sider>
                    <Content className="content">{conponent.children}</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}




