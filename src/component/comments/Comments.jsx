import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./comments.css"
const Commnets = () => {
  const [request, setRequest] = useState(null)
  useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        return response.json()
      }).then((res) => {
        setRequest(res.data)
      })
  }, [])

  return (
    <div className="form-container">
      <div className="form-heading">Looking for Photographer</div>
      <hr />
      <div className="request-container">
        <div className="request">
          <p className="request-name">Prateek Vishwakarma</p>
          <p className="request-service">Personal</p>
          <div className="request-cta">
            <Link to="/comment-view">View</Link>
            <Link to="">Remove</Link>
          </div>
        </div>
        
        <div className="request">
          <p className="request-name">Prateek Vishwakarma</p>
          <p className="request-service">Travel</p>
          <div className="request-cta">
            <Link to="/comment-view">View</Link>
            <Link to="">Remove</Link>
          </div>
        </div>
        <div className="request">
          <p className="request-name">Prateek Vishwakarma</p>
          <p className="request-service">Wedding</p>
          <div className="request-cta">
            <Link to="/comment-view">View</Link>
            <Link to="">Remove</Link>
          </div>
        </div>
        <div className="request">
          <p className="request-name">Prateek Vishwakarma</p>
          <p className="request-service">Baby</p>
          <div className="request-cta">
            <Link to="/comment-view">View</Link>
            <Link to="">Remove</Link>
          </div>
        </div>
        <div className="request">
          <p className="request-name">Prateek Vishwakarma</p>
          <p className="request-service">Pre-wedding</p>
          <div className="request-cta">
            <Link to="/comment-view">View</Link>
            <Link to="">Remove</Link>
          </div>
        </div>
        <div className="request">
          <p className="request-name">Prateek Vishwakarma</p>
          <p className="request-service">Post-wedding</p>
          <div className="request-cta">
            <Link to="/comment-view">View</Link>
            <Link to="">Remove</Link>
          </div>
        </div>
        <div className="request">
          <p className="request-name">Prateek Vishwakarma</p>
          <p className="request-service">Other</p>
          <div className="request-cta">
            <Link to="/comment-view">View</Link>
            <Link to="">Remove</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Commnets