import React from 'react';
import spaghetti from '../spaghetti.jpg';

import { Row, Col, Typography, List } from 'antd';
import { Link } from 'react-router-dom';


export default class SearchViewPage extends React.Component {


    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>ผลการค้นหา</h1>
                <img src={spaghetti} style= {{width : '100%'}}/>
                <p style={{fontSize : 18 , marginTop : 10 }}>
                    รายละเอียด ไข่เจียวหมูสับ รายละเอียด ไข่เจียวหมูสับ รายละเอียด 
                    ไข่เจียวหมูสับ รายละเอียด ไข่เจียวหมูสับ รายละเอียด ไข่เจียวหมูสับ
                </p>
            </div>
        )
    }
}