import React, { Component } from 'react';
import  moment  from 'moment';
import { connect } from 'react-redux';
import { addComment } from '../actions';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            content: '',
            date: ''
        }
    }

    //Add comment when submit
    addComment(evt) {
        evt.preventDefault();
        // Call method addComment from action directory
        this.props.addComment({
            username: this.state.username,
            email: this.state.email,
            content: this.state.content,
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        });

        this.resetState();
    }

    resetState() {
        this.setState({
            username:'',
            email:'',
            content:'',
            date:''
        });
    }

    render() {
        const { username, email, content } = this.state;
        /* Forms for comments, write in real time with function onChange */
        return (
            <form onSubmit={(evt) => this.addComment(evt)}>
                <div className="form-group">
                    <input
                        type="text"
                        value={username}
                        className="form-control"
                        placeholder="Username"
                        style={{width:'100%',marginBottom:'5px'}}
                        required
                        onChange={event => this.setState({username: event.target.value})}
                    />
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        placeholder="Email"
                        style={{width:'100%',marginBottom:'5px'}}
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <textarea
                        className="form-control"
                        value={content}
                        placeholder="Content"
                        style={{width:'100%',marginBottom:'5px'}}
                        onChange={event => this.setState({content: event.target.value})}
                    />
                    <button
                        className="btn btn-success"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }

}

//Connect the store with the compenent
export default connect(null, { addComment })(Form);