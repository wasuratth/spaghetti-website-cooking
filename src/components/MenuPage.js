import React from 'react';
 
import { Rate, Button } from 'antd';

import { Link } from 'react-router-dom';

import { withRouter } from "react-router";

import Api from '../api/Api';



class MenuPage extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            menu: {
                _id: null,
                title: "",
                detail: "",
                star: 0,
                ingredients: [],
                step: []
            }
        }
    }


    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const res = await Api.get('menu/' + id);

            this.setState({ menu: res.data.data });

        } catch (error) {
            console.log(error)
        }

    }

    render() {

        const { _id, title, detail, picture, star, ingredients, step } = this.state.menu;
        const imgUrl = process.env.REACT_APP_API_SERVER + 'picture/' + picture ;



        return (
            <div style={{ padding: 10 }}>
                <h1>{title}</h1>
                <div style={{textAlign:'center' , paddingTop:10 , paddingBottom : 10 }}>
                    {picture && <img src={imgUrl} style={{ maxWidth: '100%' }} />}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Rate disable allowHalf value={star} />
                </div>
                <p style={{ fontSize: 18, marginTop: 10 }}>
                    {detail}
                </p>
                <h3 style={{ fontSize: 20 }}>วัตถุดิบ</h3>
                <ul className="font-kawit" style={{ fontSize: 18, listStyleType: 'decimal' }}>
                    {ingredients.map((item, k) => <li>{item} </li>)}
                </ul>
                <h3 style={{ fontSize: 20 }}>ขั้นตอน</h3>
                <ul className="font-kawit" style={{ fontSize: 18, listStyleType: 'decimal' }}>
                    {step.map((item, k) => <li>{item}</li>)}
                </ul>

                <div style={{ textAlign: 'center' }}>
                    <Link to={'/comment/' + _id} >
                        <Button type="primary">แสดงความคิดเห็น</Button>
                    </Link>
                </div>



            </div>
        )
    }
}

export default withRouter(MenuPage); 