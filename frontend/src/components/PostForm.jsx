import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './style/Post.css';

const PostForm = ({ onPostCreated }) => {
    const [message, setMessage] = useState('');
    const { user } = useContext(AuthContext);
    const [mediaUrl, setMediaUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        console.log(user)
        console.log(message)

        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({ content: message, user: user, mediaUrl: mediaUrl }),
        });

        if (response.ok) {
            const newPost = await response.json();
            onPostCreated(newPost);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="post-message" className="form-label">
            Напишите что-нибудь:
          </label>
          <textarea
            id="post-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Что у вас на уме?"
            className="form-textarea"
            rows="4"
                />
            <input
                type="text"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                placeholder="Вставьте картинку (опционально)"
            />
        </div>
  
        <button type="submit" className="form-button">
          Опубликовать
        </button>
      </form>  
    );
};

export default PostForm;