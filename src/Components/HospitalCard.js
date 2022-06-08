import React from "react"
import 'animate.css'
import './HospitalCard.css'
import { useDispatch } from "react-redux"
import { loadHospitalItem } from "../actions/hospitalActions"

const HospitalCard = props => {
    const { hospital = {} } = props
    const dispatch = useDispatch()

    return (
        <div className="card mb-3 animate__animated animate__fadeInLeft">
            <div className="card-body d-flex row justify-content-between">
                <img className="col-6 card-img-custom" src={hospital.imgSrc ?? 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33200608.jpg'} alt={`Cover for ${hospital.name}`} />
                <div className="col-6 text-end">
                    <b>{hospital.name}</b>
                    <address>{hospital.address}</address>
                </div>
                <div className="w-100 text-end">
                    <button data-bs-toggle="modal" data-bs-target="#hospital-modal" className="btn btn-link" onClick={() => dispatch(loadHospitalItem(hospital))}>View more</button>
                </div>
            </div>
        </div>
    )
}

export default HospitalCard
