import React from 'react';
import spaghetti from '../spaghetti.jpg';

import { Rate ,Button  } from 'antd';

import { Link } from 'react-router-dom';

export default class MenuPage extends React.Component {
    
    render() {


        return (
            <div style={{ padding: 10 }}>
                <h1>ไข่เจียวหมูสับ</h1>
                <img src={spaghetti} style= {{width : '100%'}}/>
                <div style={{textAlign : 'center'}}>
                    <Rate disable allowHalf defaultValue={2.5} />
                </div>
                <p style={{fontSize : 18 , marginTop : 10 }}>
                    รายละเอียด ไข่เจียวหมูสับ รายละเอียด ไข่เจียวหมูสับ รายละเอียด 
                    ไข่เจียวหมูสับ รายละเอียด ไข่เจียวหมูสับ รายละเอียด ไข่เจียวหมูสับ
                </p>
                <h3 style={{ fontSize : 20 }}>วัตถุดิบ</h3>
                <ul className="font-kawit" style={{fontSize:18 , listStyleType : 'decimal' }}>
                    {[ ... Array(3)].map(( _i , k) => <li> วัตถุดิบที่ {k}</li>)}
                </ul>
                <h3 style={{ fontSize: 20 }}>ขั้นตอน</h3>
                <ul className="font-kawit" style={{fontSize:18 , listStyleType : 'decimal' }}>
                    {[ ... Array(3)].map(( _i , k) => <li> ขั้นตอนที่ {k}</li>  )}
                </ul>
                <div style={{textAlign : 'center'}}>
                    <Link to={'/login'} >
                        <Button type="primary">แสดงความคิดเห็น</Button>
                    </Link>
                    
                </div>
            </div>
        )
    }
}