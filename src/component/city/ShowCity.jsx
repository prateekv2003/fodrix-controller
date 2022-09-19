import React, {useState, useEffect} from 'react'
import './showCity.css'
const ShowCity = () => {

    const [city, setCity] = useState(null)

    useEffect(() => {
        fetch('https://api.fodrix.com/city/get-all-city-details').then((response) => {
            return response.json()
        }).then((res) => {
            setCity(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <>
            <div class="form-container">
                <form>
                    <div className="form-heading">Cities</div>
                    <div className="city-list">
                        {
                            !city
                                ? <h1>Loading....</h1>
                                : <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Place</th>
                                            <th>Spot1</th>
                                            <th>Spot2</th>
                                            <th>Spot3</th>
                                            <th>Spot4</th>
                                            <th>Spot5</th>
                                            <th>Spot6</th>
                                            <th>Image URL</th>
                                            <th>Map Link</th>
                                            <th>About</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {city.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.place}</td>
                                                    <td>{item.spot1}</td>
                                                    <td>{item.spot2}</td>
                                                    <td>{item.spot3}</td>
                                                    <td>{item.spot4}</td>
                                                    <td>{item.spot5}</td>
                                                    <td>{item.spot6}</td>
                                                    <td style={{whiteSpace:"nowrap"}}>{item.image_url}</td>
                                                    <td style={{whiteSpace:"nowrap"}}>{item.map_link}</td>
                                                    <td style={{whiteSpace:"nowrap"}}>{item.about}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default ShowCity