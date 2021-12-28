import React, { useState } from "react";
import { Layout } from 'antd';
import './GlobalLayout.css';
import { LoginLayout } from "../components/loginLayout";
import { LoginComponent } from "../components/login";
const { Header, Sider, Content, Footer } = Layout;

interface IConponents {
    header: JSX.Element;
    silder: JSX.Element | null;
    children: JSX.Element;
}

export function GlobalLayout(conponent: IConponents) {
    const [loginOK, setLoginOk] = useState(false);

    return (
        <>
            <Layout>
                <Header className="light">{conponent.header}</Header>
                <Layout>
                    {loginOK ? <Sider>{conponent.silder}</Sider> : null}
                    {/* <Sider>{conponent.silder}</Sider> */}
                    {/* <Content className="content">{conponent.children}</Content> */}
                    <Content className="content">{loginOK ? conponent.children : <LoginComponent />}</Content>
                </Layout>
                {/* <Footer>Footer</Footer> */}
            </Layout>
        </>
    );
}




