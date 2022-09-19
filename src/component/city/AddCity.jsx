import React, { useState, useEffect} from 'react'
import swal from 'sweetalert';
const AddCity = () => {

  
    const [place, setPlace] = useState();
    const [spot1, setSpot1] = useState();
    const [spot2, setSpot2] = useState();
    const [spot3, setSpot3] = useState();
    const [spot4, setSpot4] = useState();
    const [spot5, setSpot5] = useState();
    const [spot6, setSpot6] = useState();
    const [map_link, setMap_link] = useState();
    const [image_url, setImage_url] = useState();
    const [about, setAbout] = useState();

    const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      place:place,
      spot1:spot1,
      spot2:spot2,
      spot3:spot3,
      spot4:spot4,
      spot5:spot5,
      spot6:spot6,
      map_link:map_link,
      image_url:image_url,
      about:about
    }
    // for (let [key, value] of form_data) {
    //   data[key] = value;
    // }


    fetch("https://api.fodrix.com/city/set-city-details" ,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      }})
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          swal("", "Something went wrong, see console!", "error");  
        }
      })
      .then(data =>{
        swal("", "Details submitted successfully!", "success");
      })
      .catch((err) => {
        swal("Error", "Check your connection, (or CORS policy)", "error")
      })
  }
  return (
    <>
      <div class="form-container">
        <form onSubmit={submitHandler}>
          <div className="form-heading">Add City</div>
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="place">Place</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setPlace(e.target.value)}} type="text" id="place" name="place" placeholder="City name" />
            </div>
          </div>
          {/* Spot-1 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot1">Spot-1</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setSpot1(e.target.value)}} type="text" id="spot1" name="spot1" placeholder="Spot-1" />
            </div>
          </div>
          {/* Spot-2 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot2">Spot-2</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setSpot2(e.target.value)}} type="text" id="spot2" name="spot2" placeholder="Spot-2" />
            </div>
          </div>
          {/* Spot-3 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot3">Spot-3</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setSpot3(e.target.value)}} type="text" id="spot3" name="spot3" placeholder="Spot-3" />
            </div>
          </div>
          {/* Spot-4 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot4">Spot-4</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setSpot4(e.target.value)}} type="text" id="spot4" name="spot4" placeholder="Spot-4" />
            </div>
          </div>
          {/* Spot-5 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot4">Spot-5</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setSpot5(e.target.value)}} type="text" id="spot5" name="spot5" placeholder="Spot-5" />
            </div>
          </div>
          {/* Spot-6 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot6">Spot-6</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setSpot6(e.target.value)}} type="text" id="spot6" name="spot6" placeholder="Spot-6" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="map_link">Map Link</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setMap_link(e.target.value)}} type="text" id="map_link" name="map_link" placeholder="Map link" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="image_url">Image URL</label>
            </div>
            <div class="col-75">
              <input required onChange={(e)=>{setImage_url(e.target.value)}} type="text" id="image_url" name="image_url" placeholder="Image URL" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="about">About</label>
            </div>
            <div class="col-75">
              <textarea required onChange={(e)=>{setAbout(e.target.value)}} type="text" id="about" name="about" placeholder="About the city" />
            </div>
          </div>

          <br />
          <div class="form-child-row">
            <input required className='success-btn' type="submit" value="Add" />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCity
/*
"data": {
  "id": 181,
  "place": "Mumbai",
  "spot1": "Chhatrapati Shivaji Maharaj Terminus",
  "spot2": "Gateway of India, Mumbai",
  "spot3": "Elephanta Caves",
  "spot4": "Marine Drive",
  "spot5": "Shri Siddhi Vinayak Ganpati Temple",
  "spot6": "Bandra-Worli Sea Link",
  "about": "Mumbai, a city in Maharashtra that is known as the 'City of Dreams' and is home to the renowned Bollywood industry. The city transformed from Back-in-the-Day Bombay to Modern Mumbai throughout the ages. Mumbai has absorbed everybody who wants to come in, from the rich to the poor. The bustling city is rich with gorgeous treasures from the past and stunning developments from today, making it an ideal location for photography. India's radiant heart pulses the lively colors of nature 24/7 and metropolitan late-night lights. ",
  "map_link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482632.8035797545!2d72.60097998658651!3d19.08268809535857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1637410954331!5m2!1sen!2sin",
  "image_url": "https://i.postimg.cc/mDK5SysJ/Mumbai-2-min.jpg"
}
*/