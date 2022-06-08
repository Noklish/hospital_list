const initialState = {
    hospitalsList: [],
    hospitalItem: {}
}

const hospitalReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_HOSPITALS_LIST':
            return {
                ...state,
                hospitalsList: action.hospitalsList
            }
        case 'ADD_HOSPITAL':
            const newId = state.hospitalsList.length ? state.hospitalsList[state.hospitalsList.length - 1] + 1 : 1
            return {
                ...state,
                hospitalsList: [...state.hospitalsList, {...action.hospital, id: newId}]
            }
        case 'DELETE_HOSPITAL':
            return {
                ...state,
                hospitalsList: state.hospitalsList.filter(hospital => hospital.id !== action.hospitalId)
            }
        case 'UPDATE_HOSPITAL':
            const targetIndex = state.hospitalsList.findIndex(hospital => hospital.id === action.hospitalId)

            if (targetIndex < 0) return state

            const newHospitalsList = [...state.hospitalsList]
            newHospitalsList[targetIndex] = {...action.hospitalItem, id: action.hospitalId}

            return {
                ...state,
                hospitalsList: newHospitalsList
            }
        case 'LOAD_HOSPITAL_ITEM':
            return {
                ...state,
                hospitalItem: action.hospital
            }
        case 'CLEAR_HOSPITAL_ITEM':
            return {
                ...state,
                hospitalItem: {}
            }
        default:
            return state
    }
}

export default hospitalReducer
