import React, { useState, useEffect } from 'react'
import "./showPhotographer.css"
const ShowPhotographer = () => {

    const [photographer, setPhotographer] = useState(null)

    useEffect(() => {

        fetch('https://api.fodrix.com/photographer/get-all-photographers-registered').then((response) => {
        // fetch('https://dummy.restapiexample.com/api/v1/employees').then((response) => {
            return response.json()
        }).then((res) => {
            setPhotographer(res)
        })
    }, [])

    return (
        <>
            <div class="form-container">
                <form>
                    <div className="form-heading">Photographers</div>
                    <div className="photographer-list">
                        {
                            !photographer
                                ? <h1>Loading....</h1>
                                : <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {photographer.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.mobile}</td>
                                                    <td>{item.location}</td>
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

export default ShowPhotographer