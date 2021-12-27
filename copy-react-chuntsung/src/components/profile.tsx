import React from "react";
import { Button, PageHeader, Form, Input, Row, Col } from 'antd';


export function UserProfile() {
    return (
        <div>
            <PageHeader title='修改信息' />
            <Row>
                <Col span={14} offset={6}>
                    <Form name="profile" onFinish={() => {

                    }} >

                        <Form.Item
                            label='姓名'
                            name={'name'}
                            labelCol={{ span: 2 }}
                            wrapperCol={{ span: 16 }}
                            rules={[
                                {
                                    required: true, message: 'asdfsfsf'
                                }]}>
                            <Input placeholder="姓名" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 7, offset: 2 }} labelCol={{ span: 7, offset: 2 }}>
                            <Button type='primary'>提交</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div >
    );
}