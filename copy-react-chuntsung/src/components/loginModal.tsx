import { Button, Checkbox, Col, Form, Input, message, Modal, Row } from "antd";
import React, { useRef, useState } from "react";
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Login, Register, RequestTest } from "../common/axiosTest";

interface IModal {
    isVisible: boolean;
    hidden: Function;
    loginOK: Function;
}
export function LoginModal(modalData: IModal) {
    const [m_modalData, setModalData] = useState(modalData);
    const [isLoading, setLoading] = useState(false);
    let username = '';
    let userpwd = '';
    const usernameRef = useRef<Input>(null);
    const userpwdRef = useRef<Input>(null);


    const onFinish = (values: any) => { m_modalData.loginOK(values); }
    const onClickLogin = async () => {
        setLoading(true);
        if (usernameRef.current) {
            username = usernameRef.current.input.value;
        }
        if (userpwdRef.current) {
            userpwd = userpwdRef.current.input.value;
        }
        let ans = await Login(username, userpwd);
        if (ans.code == 1) {
            setLoading(false);
            message.info("log in success");
        }
    }
    return (
        <>
            <Modal title="Login"
                visible={modalData.isVisible}
                okText="Comfirm"
                onCancel={() => { m_modalData.hidden(); }}
                footer=""
            >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    className={"login-form"}
                    onFinish={onFinish}
                >
                    <Form.Item label='' name="username" rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input ref={usernameRef} placeholder="Username" prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item label='' name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password ref={userpwdRef} placeholder='Password' prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item label='' name='checkbox' valuePropName='checked' wrapperCol={{ offset: 4, span: 8 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button onClick={onClickLogin} block={true} loading={isLoading} type='primary' htmlType='submit' className='login-form-button'>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}