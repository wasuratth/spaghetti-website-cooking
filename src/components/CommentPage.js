import React from 'react';
import spaghetti from '../spaghetti.jpg';
import morakut from '../image/morakut.png';


import { Rate, Button, Comment, Tooltip, Avatar, Input } from 'antd';

import { SendOutlined, UserOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import moment from 'moment';

import Api from '../api/Api';

import { withRouter } from "react-router";


class CommentPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { txtComment: "", rateStar: 0, comments: [], menu: { picture: null } };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStar = this.handleChangeStar.bind(this);
    }

    handleChange = (event) => {
        console.log(this.state.rateStar);
        this.setState({ txtComment: event.target.value });
    }

    handleChangeStar = (event) => {
        this.setState({ rateStar: event });
    }

    handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            this.sendComment();
        }
    }

    sendComment = async () => {
        try {
            const menu_id = this.props.match.params.menu_id;
            console.log(menu_id);
            const res = await Api.post('comment', {
                menu_id: menu_id,
                cm_detail: this.state.txtComment,
                cm_point: this.state.rateStar,
            });

            this.setState({ txtComment: "", rateStar: 0 });

            this.getComent();

        } catch (error) {
            console.log(error)
        }
    }

    getComent = async () => {
        try {
            const menu_id = this.props.match.params.menu_id;
            const res = await Api.get('comment/menu/' + menu_id);
            this.setState({ comments: res.data.data });
        } catch (error) {
            console.log(error)
        }
    }

    getMenu = async () => {
        try {
            const menu_id = this.props.match.params.menu_id;
            const res = await Api.get('menu/' + menu_id);
            this.setState({ menu: res.data.data });
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        this.getComent();
        this.getMenu();
    }


    render() {
        let { txtComment, rateStar, comments } = this.state;
        const { picture } = this.state.menu;
        const imgUrl = picture ? process.env.REACT_APP_API_SERVER + 'picture/' + picture : null;

        return (
            <div style={{ padding: 10 }}>
                <div style={{ textAlign: 'center' }} >
                    {imgUrl && <img src={imgUrl} style={{ maxWidth: '100%', maxHeight: 300 , marginBottom : 10 }} />}
                </div>
                <div style={{ textAlign: 'left' }}>
                    <h1>แสดงความคิดเห็น</h1>
                </div>
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <Input suffix={<SendOutlined Color="red" />} placeholder="กรุณากรอกความคิดเห็นของท่าน" value={txtComment} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        คะแนน <Rate allowHalf value={rateStar} onChange={this.handleChangeStar} />
                    </div>
                </div>
                {comments.map((item, key) => {
                    const { cm_detail, cm_point, createdAt, user } = item;
                    return (
                        <div>
                            <Comment
                                //actions={actions}
                                author={<a><strong>{user.name}</strong></a>}
                                avatar={<Avatar icon={<UserOutlined />} />}
                                content={
                                    <div>
                                        <p>{cm_detail}</p>
                                        <Rate disable allowHalf value={cm_point} />
                                    </div>}
                                datetime={<Tooltip title={moment().format(createdAt)}><span>{moment(createdAt).fromNow()}</span></Tooltip>}
                            />
                        </div>)
                })}



            </div>


        )
    }
}

export default withRouter(CommentPage); 