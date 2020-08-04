import React from 'react';
import logo from '../logo.png';

import { Row, Col } from 'antd';

import { Link } from 'react-router-dom';

export default class MainPage extends React.Component {
    render() {


        return (
            <div style={{ padding: 10 }}>
                <h1>กลุ่มอาหาร</h1>
                <Row>
                    {[...Array(9)].map((i, key) => <Col span={8}>
                        <div style={{ padding: 5, textAlign: 'center' }}>
                            <Link to={'/group/' + (key + 1)} >
                                <img src={logo} style={{ maxWidth: '100%', display: 'block' }} />
                                <div className={'font-kanit'} style={{ color : '#808080' }}>รายการอาหาร</div>
                            </Link> 
                        </div>
                    </Col>)}


                </Row>
            </div>
        )
    }
}