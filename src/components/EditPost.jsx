import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/${id')
            .then(response => {
                setTitle(response.data.title)
                setContent(response.data.content)
            })
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:8000/api/posts/${id}', { title, content })
        navigate('/posts')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
                <button type="submit">Update Post</button>
            </form>
        </div>
    )
}

export default EditPost
