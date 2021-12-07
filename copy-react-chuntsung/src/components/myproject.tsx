import { Button } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import React, { Key } from "react";


interface IMyProject {
    key: string,
    project: string,
    score: number,
    other: string,
}

const data: IMyProject[] =
    [
        {
            key: '1',
            project: 'math1',
            score: 85,
            other: '其他'
        }, {
            key: '2',
            project: 'math2',
            score: 90,
            other: '其他'
        }, {
            key: '3',
            project: 'math3',
            score: 100,
            other: '其他'
        }
    ]

export function MyProject() {

    return (
        <>
            <Table<IMyProject> dataSource={data}>
                <Table.Column<IMyProject> key="name" title='科目' dataIndex='project'></Table.Column>
                <Table.Column<IMyProject> key="name1" title='分数' dataIndex='score'></Table.Column>
                <Table.Column<IMyProject> key="name3" title='其他' dataIndex='other'></Table.Column>
            </Table>
        </>

    );
}

export function MyProject1() {
    const column = [
        { key: '1', title: 'test1', dataIndex: 'test1' },
        { key: '2', title: 'test2', dataIndex: 'test2' },
        { key: '3', title: 'test3', dataIndex: 'test3' },
    ]
    const data = [
        {
            test1: '1',
            test2: '2',
            test3: '3',
        },
        {

            test1: '2',
            test2: '4',
            test3: '5',

        }
    ];
    return (
        <>
            <Table dataSource={data} columns={column} />
        </>
    );
}
