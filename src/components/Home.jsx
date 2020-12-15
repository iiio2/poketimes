import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h2>Home</h2>
        <p className='lead'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorem
          accusantium quis non. Quidem, harum repellat. Maiores officiis
          exercitationem adipisci. Expedita, illo! Veritatis repellat, quaerat
          dolorum ad consectetur explicabo esse.
        </p>
        <div className='row'>
          {posts.length === 0 && <p className='lead'>Loading...</p>}
          {posts.map((post) => {
            return (
              <div className='col-sm-3 m-2' key={post.id}>
                <div className='card'>
                  <div className='card-body'>
                    <Link to={`post/${post.id}`}>
                      <h5>{post.title}</h5>
                    </Link>
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
