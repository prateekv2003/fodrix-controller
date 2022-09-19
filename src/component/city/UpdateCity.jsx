import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const UpdateCity = () => {


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

  const [myOptions, setMyOptions] = useState([])
  const [searchTerm, setSearchTerm] = useState()
  const [city, setCity] = useState()
  const [id, setId] = useState()


  function fetchSearchOption() {
    fetch('https://api.fodrix.com/city/get-all-city-details').then((response) => {
      return response.json()
    }).then((response) => {
      const arr = [];
      let res = response.data;
      for (var i = 0; i < res.length; i++) {
        arr.push(`${res[i].place} - ${res[i].id}`)
      }
      setMyOptions(arr)
    })
  }


  const submitHandler = (e) => {

    e.preventDefault();
    let data = {

      id: id,
      place: place,
      spot1: spot1,
      spot2: spot2,
      spot3: spot3,
      spot4: spot4,
      spot5: spot5,
      spot6: spot6,
      map_link: map_link,
      image_url: image_url,
      about: about
    }

    fetch("https://api.fodrix.com/city/set-city-details", {
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
          swal("", "City Not Found!", "error");
        }
      })
      .then(data => {
        swal("", "Details updated successfully!", "success");
      })
      .catch((err) => {
        swal("Error", "Check your connection", "error");
      })
    fetchSearchOption();
  }

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const arr = searchTerm.split(" ");
    const id = arr[arr.length - 1];
    setId(id);
    fetch(`https://api.fodrix.com/city/get-city-by-id/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          swal("", "Something went wrong, see console!", "error");
        }
      }).then((res) => {
        setCity(res.data);
      })
  }

  useEffect(() => {
    if (city) {
      setPlace(city.place);
      setSpot1(city.spot1);
      setSpot2(city.spot2);
      setSpot3(city.spot3);
      setSpot4(city.spot4);
      setSpot5(city.spot5);
      setSpot6(city.spot6);
      setMap_link(city.map_link)
      setImage_url(city.image_url)
      setAbout(city.about)
    }
  }, [city])

  useEffect(() => {
    fetchSearchOption();
  }, [])
  return (
    <>
      <div className="search-box">
        <form onSubmit={searchSubmitHandler}>
          <div className="form-child-row search-bar">
            <div className="col-75 search-bar-inner">
              <Autocomplete
                style={{ marginTop: 7.5 }}
                freeSolo
                autoComplete
                autoHighlight
                options={myOptions}
                renderInput={(params) => (
                  <TextField {...params}
                    // onChange={getDataFromAPI}
                    // variant="outlined"
                    label="Search Box"
                  />
                )}
                onChange={(e) => {
                  setSearchTerm(e.target.textContent)
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    setSearchTerm(e.target.value);
                  }
                }}
              />
            </div>
            <div className="col-25 search-btn">
              <input required className="success-btn" type="submit" value="Search" />
            </div>
          </div>
        </form>
      </div>
      <div class="form-container">
        <form onSubmit={submitHandler}>
          <div className="form-heading">Update City</div>
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="place">Place</label>
            </div>
            <div class="col-75">
              <input required value={place} onChange={(e) => { setPlace(e.target.value) }} type="text" id="place" name="place" placeholder="City name" />
            </div>
          </div>
          {/* Spot-1 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot1">Spot-1</label>
            </div>
            <div class="col-75">
              <input required value={spot1} onChange={(e) => { setSpot1(e.target.value) }} type="text" id="spot1" name="spot1" placeholder="Spot-1" />
            </div>
          </div>
          {/* Spot-2 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot2">Spot-2</label>
            </div>
            <div class="col-75">
              <input required value={spot2} onChange={(e) => { setSpot2(e.target.value) }} type="text" id="spot2" name="spot2" placeholder="Spot-2" />
            </div>
          </div>
          {/* Spot-3 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot3">Spot-3</label>
            </div>
            <div class="col-75">
              <input required value={spot3} onChange={(e) => { setSpot3(e.target.value) }} type="text" id="spot3" name="spot3" placeholder="Spot-3" />
            </div>
          </div>
          {/* Spot-4 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot4">Spot-4</label>
            </div>
            <div class="col-75">
              <input required value={spot4} onChange={(e) => { setSpot4(e.target.value) }} type="text" id="spot4" name="spot4" placeholder="Spot-4" />
            </div>
          </div>
          {/* Spot-5 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot4">Spot-5</label>
            </div>
            <div class="col-75">
              <input required value={spot5} onChange={(e) => { setSpot5(e.target.value) }} type="text" id="spot5" name="spot5" placeholder="Spot-5" />
            </div>
          </div>
          {/* Spot-6 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot6">Spot-6</label>
            </div>
            <div class="col-75">
              <input required value={spot6} onChange={(e) => { setSpot6(e.target.value) }} type="text" id="spot6" name="spot6" placeholder="Spot-6" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="map_link">Map Link</label>
            </div>
            <div class="col-75">
              <input required value={map_link} onChange={(e) => { setMap_link(e.target.value) }} type="text" id="map_link" name="map_link" placeholder="Map link" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="image_url">Image URL</label>
            </div>
            <div class="col-75">
              <input required value={image_url} onChange={(e) => { setImage_url(e.target.value) }} type="text" id="image_url" name="image_url" placeholder="Image URL" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="about">About</label>
            </div>
            <div class="col-75">
              <textarea required value={about} onChange={(e) => { setAbout(e.target.value) }} type="text" id="about" name="about" placeholder="About the city" />
            </div>
          </div>

          <br />
          <div class="form-child-row">
            <input required className='success-btn' type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateCity