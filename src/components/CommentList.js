import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentItem from './CommentItem';

class CommentList extends Component {
    renderComments() {
        const { comments } = this.props;
        return (
            <div>
                {/* Call CommentItem component */}
                {
                    comments.map(comment =>{
                        return <CommentItem comment={comment} />
                    })
                }
            </div>
        );
    }


    render() {
        return (
            <div>
                {/* Render comments */}
                {
                    this.renderComments()
                }
            </div>
        );
    }
}

// Acces to comment in store
function mapStateToProps(state){
    return {
        comments: state
    };
}

export default connect(mapStateToProps)(CommentList);