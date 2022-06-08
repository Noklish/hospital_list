import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadHospitals, clearHospitalItem } from '../actions/hospitalActions'
import HospitalCard from './HospitalCard'

const HospitalList = props => {
    const dispatch = useDispatch()
    const hospitals = useSelector(state => state.hospitalReducer.hospitalsList) ?? []

    useEffect(() => {
        dispatch(loadHospitals())
    }, [dispatch])

    return (
        <div>
            {!hospitals.length && <div className="alert alert-info">This list is empty. Give it some life by adding a hospital.</div>}
            {hospitals.map(hospital =>
                <HospitalCard key={`hospital-item-${hospital.id}`} hospital={hospital} referrerpolicy="origin-when-cross-origin" />
            )}
            <button
                className="btn btn-block btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#hospital-modal"
                onClick={() => dispatch(clearHospitalItem())}
            >
                    Add Hospital
                </button>
        </div>
    )
}

export default HospitalList
