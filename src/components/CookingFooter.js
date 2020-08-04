import React from 'react';
import { Row, Col } from 'antd';

import {
    HomeOutlined,
    UnorderedListOutlined  ,
    UserOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

import { useLocation , Link } from "react-router-dom";

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
    width: "100%",
    paddingTop: "10px"
};

const phantomStyle = {
    display: "block",
    padding: "5px",
    height: "60px",
    width: "100%"
};

const CookingFooter = ({ children }) => {
    const location = useLocation();
    return (<>{!( location.pathname === '/login' || location.pathname === '/register' ) && <footer >
        <div style={phantomStyle} /> 
        <div style={footerStyle}>
            <Row gutter={16}> 
                <Col className="gutter-row" span={6} style={{ fontSize: '24px' }} >
                    <Link to="/main" ><HomeOutlined style={{ color: "#8E8E93" }} /></Link>
                </Col>
                <Col className="gutter-row" span={6} style={{ fontSize: '24px' }}>
                    <Link to="/knowledge" ><UnorderedListOutlined  style={{ color: "#8E8E93" }} /></Link>
                </Col>
                <Col className="gutter-row" span={6} style={{ fontSize: '24px' }}>
                    <Link to="/profile" ><UserOutlined style={{ color: "#8E8E93" }} /></Link>
                </Col>
                <Col className="gutter-row" span={6} style={{ fontSize: '24px' }}>
                    <Link to="/login" onClick={ ()=>{ localStorage.clear() }} ><LogoutOutlined style={{ color: "#8E8E93" }} /></Link>
                </Col>
            </Row>
        </div>
    </footer>
    }</>
    );
}

export default CookingFooter; 