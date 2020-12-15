import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    console.log(this.props);
    const { post } = this.props;
    return (
      <React.Fragment>
        {post ? (
          <div className='card my-5'>
            <div className='card-body'>
              <h3>{post.title}</h3>
              <p className='lead'>{post.body}</p>
              <button onClick={this.handleDelete} className='btn btn-danger'>
                Delete
              </button>
            </div>
          </div>
        ) : (
          <p className='lead mt-5'>Loading...</p>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.post_id);
  const post = state.posts.find((post) => post.id === id);
  return {
    post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
