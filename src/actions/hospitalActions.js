import * as defaults from '../Constants/HospitalDefaults.json'

const LOAD_HOSPITALS_LIST = 'LOAD_HOSPITALS_LIST'
const ADD_HOSPITAL = 'ADD_HOSPITAL'
const DELETE_HOSPITAL = 'DELETE_HOSPITAL'
const UPDATE_HOSPITAL = 'UPDATE_HOSPITAL'
const LOAD_HOSPITAL_ITEM = 'LOAD_HOSPITAL_ITEM'
const CLEAR_HOSPITAL_ITEM = 'CLEAR_HOSPITAL_ITEM'

export const loadHospitals = () => {
    const hospitalsList = defaults?.default

    return {
        type: LOAD_HOSPITALS_LIST,
        hospitalsList
    }
}

export const addHospital = hospital => {
    return {
        type: ADD_HOSPITAL,
        hospital
    }
}

export const deleteHospital = hospitalId => {
    return {
        type: DELETE_HOSPITAL,
        hospitalId
    }
}

export const updateHospital = (hospitalId, hospitalItem) => {
    return {
        type: UPDATE_HOSPITAL,
        hospitalId,
        hospitalItem
    }
}

export const loadHospitalItem = hospital => {
    return {
        type: LOAD_HOSPITAL_ITEM,
        hospital
    }
}

export const clearHospitalItem = () => {
    return {
        type: CLEAR_HOSPITAL_ITEM
    }
}
