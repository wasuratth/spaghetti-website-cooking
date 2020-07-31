import React from 'react';
import {Row , Col   } from 'antd';

import {
    HomeOutlined,
    HeartOutlined,
    UserOutlined,
    LogoutOutlined, 
  } from '@ant-design/icons';
  

const footerStyle = {
    backgroundColor: "#F9F9F9",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #CCC",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%" , 
    paddingTop: "10px"
};

const phantomStyle = {
    display: "block",
    padding: "5px",
    height: "60px",
    width: "100%"
};

const CookingFooter = ({ children }) => {
    return (
        <footer>
            <div style={phantomStyle} />
            <div style={footerStyle}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}  style={{ fontSize: '24px' }} >
                        <a href="#" ><HomeOutlined style={{color : "#8E8E93" }}  /></a>
                    </Col>
                    <Col className="gutter-row" span={6} style={{ fontSize: '24px' }}>
                        <a href="#" ><HeartOutlined  style={{color : "#8E8E93" }} /></a>
                    </Col>
                    <Col className="gutter-row" span={6} style={{ fontSize: '24px' }}>
                        <a href="#"  ><UserOutlined style={{color : "#8E8E93" }} /></a>
                    </Col>
                    <Col className="gutter-row" span={6} style={{ fontSize: '24px' }}>
                        <a href="#"  ><LogoutOutlined style={{color : "#8E8E93" }}  /></a>
                    </Col>
                </Row>

            </div>
        </footer>
    );
}

export default CookingFooter; 