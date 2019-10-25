import React from 'react';
import { createComment } from '../../state/actions';
import { connect } from 'react-redux';
import api from '../../services/api';

import './CommentForm.scss'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            comment: "",
            error: ""
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmitForm = async (e) => {
        e.preventDefault();

        const body = {
            comment: this.state.comment,
            fullName: this.state.name,
        };

        try {
            await api.post(`/hotels/comment/${this.props.id}`, body);
            this.setState({name:"", comment:"", error:""})

        } catch (e) {
            this.setState({error: e.message});
        }
    }

    render() {
        return (
            <form
                onSubmit={(e) => {
                    this.onSubmitForm(e);
                }}
                className="form"
            >
                <h2 className="form__title">Leave Comment</h2>
                <input className="form__input" type="text" name="name" value={this.state.name} onChange={this.onValueChange} placeholder="Enter Full Name" />
                <textarea className="form__input form__input--textarea" name="comment" id="" cols="30" rows="10" value={this.state.comment} onChange={this.onValueChange} placeholder="Type Comment"></textarea>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <button className="form__btn">Submit</button>
            </form>
        );
    }
}

export default connect(null, { createComment })(CommentForm);