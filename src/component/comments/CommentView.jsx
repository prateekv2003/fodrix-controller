import React from 'react'
import { Link } from 'react-router-dom'
import "./commentView.css"
const CommentView = () => {
  return (
    <div className='form-container'>
        <div className='request-cta comments-back-btn'><Link to="/comments">Back</Link></div>
        <p className='comment-key'>Name: <span>Prateek Vishwakarma</span></p>
        <p className='comment-key'>Email: <span>prateekv2003@gmai.com</span></p>
        <p className='comment-key'>Mobile: <span>prateekv2003@gmai.com</span></p>
        <p className='comment-key'>City: <span>prateekv2003@gmai.com</span></p>
        <p className='comment-key'>Service: <span>Travel</span></p>
        <p className='comment-key'>Comments/Request: <span>12/03/2022</span></p>
    </div>
  )
}

export default CommentView