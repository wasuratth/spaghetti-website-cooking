import React from 'react';
import spaghetti from '../spaghetti.jpg';
import morakut from '../image/morakut.png';


import { Rate, Button, Comment, Tooltip, Avatar, Input } from 'antd';

import { SendOutlined   } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import moment from 'moment';

export default class MenuPage extends React.Component {
    
    render() {

        return (
            <div style={{ padding: 10 }}>                
                <img src={spaghetti} style= {{width : '100%'}}/>
                
                <div style={{ textAlign: 'left' }}>
                    <h1>Comments</h1>                
                </div>

                <Comment
                  //actions={actions}
                author={<a><strong>มรกต เจ้าแม่จาน</strong></a>}
                avatar={
                    <Avatar
                        src={morakut}          
                    />
                }
                content={
                    <p>
                        น่าทานมากๆ เลยค่ะ เดี๋ยวลองเอาสูตรไปทำบ้างนะคะ
                        ขอบคุณค่ะ
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
                />                                

                <div style={{ textAlign: 'center' }}>

                    <Input placeholder="Write a comment" suffix={<SendOutlined Color="red"/>} />
                    
                </div>

                <div style={{ textAlign: 'center' }}>

                    คะแนน <Rate disable allowHalf defaultValue={0.0} />

                </div>
                    
                
            </div>

            
        )
    }
}