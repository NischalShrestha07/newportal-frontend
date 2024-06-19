import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/api/posts', { title, content })
        Navigate('/posts')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
            <button type="submit">Create Post</button>
        </form>

    )
}

export default CreatePost
