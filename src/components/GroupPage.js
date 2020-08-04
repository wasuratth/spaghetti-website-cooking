import React from 'react';
import logo from '../logo.png';

import { Row, Col , List } from 'antd';
import { Link } from 'react-router-dom';

export default class GroupPage extends React.Component {
    render() {


        return (
            <div style={{ padding: 10 }}>
                <h1>อาหารเพื่อสุขภาพ</h1>
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={ [ ... Array(16)].map( (_i , k) => k + 1) }
                            renderItem={item => (
                                <List.Item>
                                    <Link to={ '/menu/' + item } >
                                        <img src={logo} style={{maxWidth: '30%' , float:'left'  , display : 'block'}} />
                                        <div style={{ maxWidth: '70%' , float:'left' , paddingLeft: 10 }}>
                                            <h3 style={{marginBottom: 0 }}>ไข่เจียวหมูสับ</h3>
                                            <p style={{color : '#808080'}}>ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ ไข่เจียวหมูสับ</p>
                                        </div>     
                                    </Link>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}