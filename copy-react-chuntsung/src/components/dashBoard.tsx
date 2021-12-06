import React, { useState } from "react";
import { Button, Col, List, Row, PageHeader, Tooltip, Alert, message } from 'antd';
import { BoardFakeData, IBoardfake, boardFakeData } from '../common/fakeData';
import { Link } from "react-router-dom";
// import 'antd/dist/antd.css';
interface IDashBoard {
    data: IBoardfake,
    loadMore: boolean,
}
// 我的主页
export function DashBoard() {
    const boardData: IDashBoard = { data: boardFakeData, loadMore: true }
    const [m_boradData, setBoardData] = useState(boardData);
    const [m_isLoading, setLoading] = useState(false);
    const handleLoadMoreClick = () => {
        setLoading(true);
        setTimeout(() => {
            const newFaleData = BoardFakeData();
          
            let newBorad = { ...m_boradData };
            newBorad.data.list = m_boradData.data.list.concat(newFaleData.list);
            if (newBorad.data.list.length >= 30) {
                newBorad.loadMore = false;
            }
            setBoardData(newBorad);
            setLoading(false);
        }, 1000)
    }

    return <div>
        <PageHeader title="通知" />
        <Row>
            <Col span={14} offset={1}>
                <List
                    size='small'
                    dataSource={m_boradData.data.list}
                    split={true}
                    loadMore={
                        m_boradData.loadMore ?
                            <Button type='primary' style={{ textAlign: 'center', marginTop: 12, height: 32 }} onClick={handleLoadMoreClick} loading={m_isLoading}>
                                加载更多.....
                            </Button>
                            : <Tooltip title="prompt text">
                                <span>没有更多内容了......</span>
                            </Tooltip>
                    }
                    renderItem={item => <List.Item>
                        {item.id}:{item.title}

                    </List.Item>}
                >
                </List>
            </Col>
        </Row>
    </div>
}