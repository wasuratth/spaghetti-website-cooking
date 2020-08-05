import React from 'react';
import logo from '../logo.png';

import { Row, Col, Typography, List, Input  } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined  } from '@ant-design/icons';

const { Search } = Input;
export default class knowledgePage extends React.Component {


    render() {
        return (
            <div style={{ padding: 10 }}>                
                <h1>เนื้อหาความรู้</h1>
                <Input placeholder="Search"
                       prefix={<SearchOutlined  />} />
                <br />            
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={ [ ... Array(64)].map( (_i , k) => k + 1) }
                            renderItem={item => (
                                <List.Item>
                                    <Link to={ '/knowledge/' + item } >
                                        <img src={logo} style={{maxWidth: '30%' , float:'left'  , display : 'block'}} />
                                        <div style={{ maxWidth: '70%' , float:'left' , paddingLeft: 10 }}>
                                            <h3 style={{marginBottom: 0 }}>เนื้อหาความรู้</h3>
                                            <p style={{color : '#808080'}}>เนื้อหาความรู้ เนื้อหาความรู้ เนื้อหาความรู้ เนื้อหาความรู้ เนื้อหาความรู้</p>
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