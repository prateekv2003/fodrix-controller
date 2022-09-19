import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import './addPhotographer.css'
const AddPhotographer = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [location, setLocation] = useState();
  const [state, setState] = useState();
  const [image_url, setImage_url] = useState();
  const [intro, setIntro] = useState();
  const [pincode, setPincode] = useState();
  const [cover1, setCover1] = useState()
  const [cover2, setCover2] = useState()
  const [cover3, setCover3] = useState()

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      location: location,
      state: state,
      pincode: pincode,
      image_url: image_url,
      intro: intro,
      cover1: cover1,
      cover2: cover2,
      cover3: cover3
    };

    fetch("https://api.fodrix.com/photographer/set-photographer-registered", {
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
        swal("", "Details submitted successfully!", "success");
      })
      .catch((err) => {
        swal("Error", "Check your connection", "error");
      })

    //  e.target.reset();
  }
  return (
    <>
      <div class="form-container">
        <form onSubmit={submitHandler}>
          <div className="form-heading">Add Photographer</div>
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="name">Name</label>
            </div>
            <div class="col-75">
              <input onChange={(e) => { setName(e.target.value) }} required type="text" id="name" name="name" placeholder="Photographer's name.." />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="email">Email</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" placeholder="Photographer's email.." />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="mobile">Mobile</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setMobile(e.target.value) }} type="text" id="mobile" name="mobile" placeholder="Phone no." />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="country">Country</label>
            </div>
            <div class="col-75">
              <select required id="country" name="location" onChange={(e) => { setLocation(e.target.value) }} >
                <option value="">Choose City</option>
                <option value="Agartala"> Agartala </option>
                <option value="Agra"> Agra </option>
                <option value="Ahemadabad"> Ahemadabad </option>
                <option value="Aizawl"> Aizawl </option>
                <option value="Ajmer"> Ajmer </option>
                <option value="Almora"> Almora </option>
                <option value="Amaravati"> Amaravati </option>
                <option value="Ambala"> Ambala </option>
                <option value="Amritsar"> Amritsar </option>
                <option value="Aurangabad"> Aurangabad </option>
                <option value="Ayodhya"> Ayodhya </option>
                <option value="Badrinath"> Badrinath </option>
                <option value="Bangalore"> Bangalore </option>
                <option value="Bhopal"> Bhopal </option>
                <option value="Bhubaneshwar"> Bhubaneshwar </option>
                <option value="Bikaner"> Bikaner </option>
                <option value="Bilaspur"> Bilaspur </option>
                <option value="Bodhgaya"> Bodhgaya </option>
                <option value="Calangute, Goa"> Calangute, Goa </option>
                <option value="Canacona, Goa"> Canacona, Goa </option>
                <option value="Chandigarh"> Chandigarh </option>
                <option value="Chennai"> Chennai </option>
                <option value="Chittoor"> Chittoor </option>
                <option value="Coimbatore"> Coimbatore </option>
                <option value="Dalhousie"> Dalhousie </option>
                <option value="Daman"> Daman </option>
                <option value="Darjeeling"> Darjeeling </option>
                <option value="Dehradun"> Dehradun </option>
                <option value="Delhi"> Delhi </option>
                <option value="Dharamshala"> Dharamshala </option>
                <option value="Dwarka"> Dwarka </option>
                <option value="Fatehpur Sikri"> Fatehpur Sikri </option>
                <option value="Gandhinagar"> Gandhinagar </option>
                <option value="Gangtok, Sikkim"> Gangtok, Sikkim </option>
                <option value="Gurgaon"> Gurgaon </option>
                <option value="Guwahati"> Guwahati </option>
                <option value="Gwalior"> Gwalior </option>
                <option value="Hampi"> Hampi </option>
                <option value="Haridwar"> Haridwar </option>
                <option value="Hyderabad"> Hyderabad </option>
                <option value="Imphal"> Imphal </option>
                <option value="Indore"> Indore </option>
                <option value="Itanagar"> Itanagar </option>
                <option value="Jabalpur"> Jabalpur </option>
                <option value="Jaipur"> Jaipur </option>
                <option value="Jaisalmer"> Jaisalmer </option>
                <option value="Jammu"> Jammu </option>
                <option value="Jhansi"> Jhansi </option>
                <option value="Jodhpur"> Jodhpur </option>
                <option value="Junagadh"> Junagadh </option>
                <option value="Kanpur"> Kanpur </option>
                <option value="Kasauli"> Kasauli </option>
                <option value="Kavaratti"> Kavaratti </option>
                <option value="Kedarnath"> Kedarnath </option>
                <option value="Kohima"> Kohima </option>
                <option value="Kolkata"> Kolkata </option>
                <option value="Kufri"> Kufri </option>
                <option value="Kullu"> Kullu </option>
                <option value="Leh"> Leh </option>
                <option value="Lucknow"> Lucknow </option>
                <option value="Madurai"> Madurai </option>
                <option value="Manali"> Manali </option>
                <option value="Mangalore"> Mangalore </option>
                <option value="Mathura"> Mathura </option>
                <option value="Mumbai"> Mumbai </option>
                <option value="Mussorie"> Mussorie </option>
                <option value="Mysore"> Mysore </option>
                <option value="Nagpur"> Nagpur </option>
                <option value="Nainital"> Nainital </option>
                <option value="Nashik"> Nashik </option>
                <option value="Ooty"> Ooty </option>
                <option value="Panaji, Goa"> Panaji, Goa </option>
                <option value="Patna, Bihar"> Patna, Bihar </option>
                <option value="Portblair"> Portblair </option>
                <option value="Prayagraj"> Prayagraj </option>
                <option value="Puducherry"> Puducherry </option>
                <option value="Pune"> Pune </option>
                <option value="Puri"> Puri </option>
                <option value="Raipur"> Raipur </option>
                <option value="Ranchi"> Ranchi </option>
                <option value="Raurkela"> Raurkela </option>
                <option value="Rishikesh"> Rishikesh </option>
                <option value="Rohtak"> Rohtak </option>
                <option value="Shillong"> Shillong </option>
                <option value="Shimla"> Shimla </option>
                <option value="Silchar"> Silchar </option>
                <option value="Silliguri"> Silliguri </option>
                <option value="Sonipat"> Sonipat </option>
                <option value="Surat"> Surat </option>
                <option value="Tawang"> Tawang </option>
                <option value="Thiruvananthpuram"> Thiruvananthpuram </option>
                <option value="Tirupati"> Tirupati </option>
                <option value="Udaipur"> Udaipur </option>
                <option value="Vadodara"> Vadodara </option>
                <option value="Varanasi"> Varanasi </option>
                <option value="Vijayawada"> Vijayawada </option>
                <option value="Visakhapatnam"> Visakhapatnam </option>
                <option value="Vrindavan"> Vrindavan </option>
                <option value="Warangal"> Warangal </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="state">State</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setState(e.target.value) }} type="text" id="state" name="state" placeholder="State" />
            </div>
          </div>


          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="pincode">Pin code</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setPincode(e.target.value) }} type="number" id="pincode" name="pincode" placeholder="Pin code" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="image_url">Image URL</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setImage_url(e.target.value) }} type="text" id="image_url" name="image_url" placeholder="Image URL" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="cover1">Cover-1</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setCover1(e.target.value) }} type="text" id="cover1" name="cover1" placeholder="Cover image link...." />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="cover2">Cover-2</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setCover2(e.target.value) }} type="text" id="cover2" name="cover2" placeholder="Cover image link...." />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="cover3">Cover-3</label>
            </div>
            <div class="col-75">
              <input required onChange={(e) => { setCover3(e.target.value) }} type="text" id="cover3" name="cover3" placeholder="Cover image link...." />
            </div>
          </div>
 
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="intro">Intro</label>
            </div>
            <div class="col-75">
              <textarea required onChange={(e) => { setIntro(e.target.value) }} type="text" id="intro" name="intro" placeholder="Introduction of photographer...." />
            </div>
          </div>

          <br />
          <div class="form-child-row">
            <input required className="success-btn" type="submit" value="Add" />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddPhotographer