import React, { useEffect, useState } from "react";
import { IProjectData, projectData } from "../common/fakeData";
import { Button, Col, Row, Space, Table, Select, Badge, message } from 'antd';
import { valueType } from "antd/lib/statistic/utils";
import { render } from "react-dom";
const { Option } = Select;

const colums = [
    { title: '编号', dataIndex: 'id', key: "id" },
    { title: '学科', dataIndex: 'projectName', key: 'projectName' },
    { title: '教师', dataIndex: 'teacher', key: 'teacher' },
    { title: '分数', dataIndex: 'score', key: 'score' },
    {
        title: '状态', dataIndex: 'state', key: 'state', render: (val: any) => {

            return <Badge status={val === '进行中' ? "processing" : "success"} />
        }

    },
    {
        title: '其他', dataIndex: 'other', key: 'other', render: (val: any) => {
            const handOnClick = () => {
                message.info(val);
            }
            return <Button type='link' onClick={handOnClick}>{val}</Button>;
        },
    }
];
interface IProject {
    data: IProjectData,
}
export function ProjectList() {
    const m_projectData: IProject = { data: projectData }
    const [m_list, setList] = useState(m_projectData);
    const [loading, setLoading] = useState(true);
    const handleSelectState = (e: valueType) => {

        console.log(e);
        if (e === 'doing') {

        }
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [loading]);

    return (
        <div>
            <div>
                
                <Space align='center'>
                    <span style={{ fontSize: 16, minWidth: 40 }}>筛选</span>
                    <Select placeholder={'状态'} style={{ width: 240 }} onChange={handleSelectState} >
                        <Option value='noStart'>未开始</Option>
                        <Option value='doing'>进行中</Option>
                        <Option value='finish'>结束</Option>
                    </Select>
                    <Button type='primary'>搜索</Button>
                </Space>
            </div>
            <Row>
                <Col offset={1} span={20}>
                    <Table loading={loading} dataSource={m_list.data.list} columns={colums} key="table" />
                </Col>
            </Row>
        </div>
    );
}



