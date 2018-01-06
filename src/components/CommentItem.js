import React, { Component } from 'react';

class CommentItem extends Component {
    render() {
        const { username, email, date, content } = this.props.comment;
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{date} {email}</h6>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        );
    }
}

export default CommentItem;
