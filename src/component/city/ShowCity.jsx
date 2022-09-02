import React, {useState, useEffect} from 'react'
import './showCity.css'
const ShowCity = () => {

    const [city, setCity] = useState(null)

    useEffect(() => {

        console.log("Options Fetched from API")

        // fetch('http://api.fodrix.com/photographer/get-all-photographers-request').then((response) => {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            return response.json()
        }).then((res) => {
            setCity(res.data)
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
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {city.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.employee_name}</td>
                                                    <td>{item.employee_age}</td>
                                                    <td>{item.employee_salary}</td>
                                                    {/* <td>{item.email}</td> */}
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