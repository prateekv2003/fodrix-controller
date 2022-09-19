import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import './addImage.css'
const AddImage = () => {

  const [image_url, setImage_url] = useState()
  const [type, setType] = useState()

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {
      type: type,
      image_url: image_url,
    };

    fetch("https://api.fodrix.com/portfolio/set-portfolio-image", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          swal("", "Something went wrong, see console!", "error");
        }
      })
      .then(data => {
        console.log(data)
        swal("", "Details submitted successfully!", "success");
      })
      .catch((err) => {
        swal("Error", "Check your connection", "error");
      })
  }
  return (
    <>
      <div class="form-container">
        <form onSubmit={submitHandler}>
          <div className="form-heading">Add Image</div>
          
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="cover3">Type</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setType(e.target.value) }} type="text" id="type" name="type" placeholder="Image Type...." />
            </div>
          </div>
          
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="cover3">Image URL</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setImage_url(e.target.value) }} type="text" id="image_url" name="image_url" placeholder="Image link...." />
            </div>
          </div>
 
          <br />
          <div class="form-child-row">
            <input className="success-btn" type="submit" value="Add" />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddImage