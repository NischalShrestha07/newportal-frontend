import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts').then(() => setPosts(posts.filter(post => post.id !== id)));
    }, [])
    const deletePost = (id) => {
        axios.delete('http://localhost:8000/api/posts/$id')
            .then(() => setPosts(posts.filter(post => post.id !== id)))
    }
}
return (
    <div>
        <h1>Posts</h1>
        <Link to="/posts/create">Create Post</Link>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <Link to={`/posts/edit/${post.id}`}>Edit</Link>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                </li>
            ))}
        </ul>

    </div>
)


export default Posts
