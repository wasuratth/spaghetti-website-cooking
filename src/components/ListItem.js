import React from 'react';
import { Row, Rate } from 'antd';
import logo from '../logo.png';

const ListItem = (props) => {


    const { title, detail, star, picture  } = props;

    const imgUrl = picture ? process.env.REACT_APP_API_SERVER + 'picture/' + picture : logo ; 

    return (<>
        <Row justify="left">
            <img src={imgUrl} style={{ maxWidth: 100  , maxHeight : 75 , float: 'left', display: 'block' , position: 'absolute' }} />
            <div style={{ float: 'left', paddingLeft: 110 }}>
                <h3 style={{ marginBottom: 0 }} >{title}</h3>
                <p style={{ color: '#808080', marginBottom: 5 }} >{detail}</p>
                <Rate disable allowHalf defaultValue={star} style={{ fontSize: 10 }} />
            </div>
        </Row>
    </>
    )
}

export default ListItem; 