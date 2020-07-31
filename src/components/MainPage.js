import React from 'react';
import logo from '../logo.png';

import {Row , Col   } from 'antd';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class MainPage extends React.Component {
    render() {

       
        return (
            <div style={{padding:10}}>
                <h1>กลุ่มอาหาร</h1>
                <Row>
                     {[ ... Array(9)].map((i , key ) => <Col span={8}>
                        <div style={{padding: 5 , textAlign:'center'}}>
                            <a href="#" > 
                                <img src={logo} style={{maxWidth:'100%' , display: 'block'}} />
                                <div style={{fontFamily: 'font-kawit'}}>รายการอาหาร</div>
                            </a>
                        </div>
                    </Col>)}
                   
                    
                </Row>
            </div>
        )
    }
}