import React, {useState, useEffect} from 'react'
import swal from 'sweetalert'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const UpdateCity = () => {

  const [myOptions, setMyOptions] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {};
    for (var [key, value] of formData.entries()) {
      console.log(key, value);
      data[`${key}`] = value;
    }
    console.log(data);

    fetch("http://localhost:8080/city/set-city-details")
      .then((res) => {
        console.log(res)
        if (res.ok) {
          return res.json()
        } else {
          swal("Something went wrong, see console!", res);
        }
      })
      .then(data => console.log(data))
      .catch((err) => {
        swal("Error", "Check your connection, (or CORS policy)", "error")
      })

    e.target.reset();
  }

  const searchSubmitHandler =(e)=>{
    e.preventDefault();
    console.log("put searched val in update form")
    e.target.reset();
}


    useEffect(()=>{

        console.log("Options Fetched from API")

        // fetch('http://api.fodrix.com/photographer/get-all-photographers-request').then((response) => {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            return response.json()
        }).then((res) => {
            console.log(res.data)
            for (var i = 0; i < res.data.length; i++) {
                myOptions.push(res.data[i].employee_name)
            }
            setMyOptions(myOptions)
        })
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
              <input required type="text" id="place" name="place" placeholder="City name" />
            </div>
          </div>
          {/* Spot-1 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot1">Spot-1</label>
            </div>
            <div class="col-75">
              <input required type="text" id="spot1" name="spot1" placeholder="Spot-1" />
            </div>
          </div>
          {/* Spot-2 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot2">Spot-2</label>
            </div>
            <div class="col-75">
              <input required type="text" id="spot2" name="spot2" placeholder="Spot-2" />
            </div>
          </div>
          {/* Spot-3 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot3">Spot-3</label>
            </div>
            <div class="col-75">
              <input required type="text" id="spot3" name="spot3" placeholder="Spot-3" />
            </div>
          </div>
          {/* Spot-4 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot4">Spot-4</label>
            </div>
            <div class="col-75">
              <input required type="text" id="spot4" name="spot4" placeholder="Spot-4" />
            </div>
          </div>
          {/* Spot-5 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot4">Spot-5</label>
            </div>
            <div class="col-75">
              <input required type="text" id="spot5" name="spot5" placeholder="Spot-5" />
            </div>
          </div>
          {/* Spot-6 */}
          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="spot6">Spot-6</label>
            </div>
            <div class="col-75">
              <input required type="text" id="spot6" name="spot6" placeholder="Spot-6" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="map_link">Map Link</label>
            </div>
            <div class="col-75">
              <input required type="text" id="map_link" name="map_link" placeholder="Map link" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="image_url">Image URL</label>
            </div>
            <div class="col-75">
              <input required type="text" id="image_url" name="image_url" placeholder="Image URL" />
            </div>
          </div>

          <div class="form-child-row">
            <div class="col-25">
              <label htmlFor="about">About</label>
            </div>
            <div class="col-75">
              <textarea required type="text" id="about" name="about" placeholder="About the city" />
            </div>
          </div>

          <br />
          <div class="form-child-row">
            <input className='success-btn' type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateCity