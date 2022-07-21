import React, { useEffect, useState } from 'react'
import Comment from './custom'
import './FakeChat.css'
Comment(1)
Comment(2)
Comment(3)

const lessons = [
    {
        id: 1,
        title: 'Học ReactJS cơ bản đến nâng cao'
    },
    {
        id: 2,
        title: 'Học Responsive thông qua ví dụ'
    },
    {
        id: 3,
        title: 'ReactJS là gì, tại sao phải học ReactJS'
    }
]

function FakeChat() {
    const [lessonId, setLessonId] = useState(1)
    const [comments, setComments] = useState([])
    useEffect(() => {
        const handleComment = ({ detail }) => {
            setComments([...comments, detail])
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        // Khi click vào bài khác cần remove event trước đó, tránh rò rỉ bộ nhớ
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])


    return (
        <div className='comment'>
            <ul className='lesson'>
                {lessons.map(lesson => (
                    <li key={lesson.id}
                        style={lesson.id === lessonId ? { color: '#FF0063' } : {}}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.title}</li>
                ))}
            </ul>
            <h2>Show Comment {lessonId}</h2>
            <ul className='show'>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>

    )
}

export default FakeChat