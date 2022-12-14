import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./commentView.css"
const CommentView = () => {
  const location = useLocation();
  // const [req, setReq] = useState();
  // setReq(location.state)
  const req = location.state.req;
  return (
    <div className='form-container'>
      <div className='request-cta comments-back-btn'><Link to="/comments">Back</Link></div>
      {
        req ?
          <>
            <p className='comment-key'>ID: <span>{req.id}</span></p>
            <p className='comment-key'>Name: <span>{req.firstName+" "+req.lastName}</span></p>
            <p className='comment-key'>Email: <span>{req.email}</span></p>
            <p className='comment-key'>Mobile: <span>{req.mobile}</span></p>
            <p className='comment-key'>City: <span>{req.city}</span></p>
            <p className='comment-key'>Service: <span>{req.typeOfPhotoshoot}</span></p>
            <p className='comment-key'>Comments/Request: <span>{req.comments}</span></p>
          </>
          :
          null

      }

    </div>
  )
}

export default CommentView