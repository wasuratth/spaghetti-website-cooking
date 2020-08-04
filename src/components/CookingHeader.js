import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";

const CookingHeader = (props) => {
    const location = useLocation();
    return <> {!( location.pathname === '/login' || location.pathname === '/register' ) &&
        <header style={{ backgroundColor: "#F9F9F9", height: 60, borderBottom: '1px solid #CCC' }}>
            <Avatar style={{ float: 'right', top: '5px', right: '10px' }} size={48} icon={<UserOutlined />} />
        </header>
    }
    </>
}

export default CookingHeader; 