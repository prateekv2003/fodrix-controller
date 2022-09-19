import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./pReqView.css"
const CommentView = () => {
  const location = useLocation();
  // const [req, setReq] = useState();
  // setReq(location.state)
  const req = location.state.req;
  return (
    <div className='form-container'>
      <div className='request-cta comments-back-btn'><Link to="/preq">Back</Link></div>
      {
        req ?
          <>
            <p className='comment-key'>ID: <span>{req.id}</span></p>
            <p className='comment-key'>Name: <span>{req.name}</span></p>
            <p className='comment-key'>Email: <span>{req.email}</span></p>
            <p className='comment-key'>Mobile: <span>{req.mobile}</span></p>
            <p className='comment-key'>Location: <span>{req.location}</span></p>
          </>
          :
          null

      }

    </div>
  )
}

export default CommentView