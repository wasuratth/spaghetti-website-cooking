import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";

import { connect } from 'react-redux';
import * as actions from '../actions';

const CookingHeaderTemplates = ({picture}) => {
    const location = useLocation();
    return <> {!( location.pathname === '/login' || location.pathname === '/register' ) &&
        <header style={{ backgroundColor: "#F9F9F9", height: 60, borderBottom: '1px solid #CCC' }}>
             {picture ? 
                <Avatar style={{ float: 'right', top: '5px', right: '10px' }} size={48} src={picture} />
                : <Avatar style={{ float: 'right', top: '5px', right: '10px' }} size={48} icon={<UserOutlined />} /> 
            }
        </header>
    }
    </>
}

const mapStateToProps = (state) => {
    return {
        picture : state.profile.picture ,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeProfilePicture: (event) => {
            dispatch(actions.changeProfilePicture(event));
        },
    };
};

const CookingHeader = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CookingHeaderTemplates);


export default CookingHeader; 