import React, { Component } from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'


class Post extends Component {
    //without redux
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     let temp = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+temp)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //         console.log(res);
    //     })
        
    // }

    onClickHandler = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center orange-text">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.onClickHandler}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    //console.log(state);
    return {
        post: state.posts.find(post => post.id === id)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id})}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);