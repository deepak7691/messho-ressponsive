import React from 'react'
import loader from "../Images/loader.gif"

function Loader() {
    return (
        <div className="loader" style={{ backgroundColor: 'rgb(51 51 51 / 100%)' }}>
            <img className="loadingMeesho" src={loader} alt="Loading" />
        </div>
    )
}

export default Loader