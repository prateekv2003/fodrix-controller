import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./pReq.css"
const Commnets = () => {
  const [request, setRequest] = useState(null)
  useEffect(() => {
    fetch('https://api.fodrix.com/photographer/get-all-photographers-request').then((response) => {
        return response.json()
    }).then((res) => {
        setRequest(res)
    })
}, [])

  return (
    <div className="form-container">
      <div className="form-heading">Looking for Photographer</div>
      <hr />
      <div className="request-container">
        {
          request ? request.map((req, id) => {
            return (
              <div key={id} className="request">
                <p className="request-name">{req.name}</p>
                <p className="request-service">{req.mobile}</p>
                <div className="request-cta">
                  <Link to="/preq-view" state={{ req: req }}>View</Link>
                  <Link to="">Remove</Link>
                </div>
              </div>
            )
          })
          :
          <h1>Loading....</h1>
        }
      </div>
    </div>
  )
}

export default Commnets