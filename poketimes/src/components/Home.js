import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Backgroud from '../duck.png'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(i => {
                return(
                    <div className="post card" key={i.id}>
                        <img src={Backgroud} alt="A Backgroud"/>
                        <div className="card-content">
                            <Link to={'/'+i.id}>
                            <span className="card-title">{i.title}</span>
                            </Link>
                            <p>{i.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet </div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;