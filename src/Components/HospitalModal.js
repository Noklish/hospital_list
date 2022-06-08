import { faPencil, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/hospitalActions'

const HospitalModal = props => {
    const [isEdit, setIsEdit] = useState(false)
    const [hospitalDetails, setHospitalDetails] = useState({})
    const hospitalItem = useSelector(state => state.hospitalReducer.hospitalItem)
    const dispatch = useDispatch()

    useEffect(() => {
        if (hospitalItem?.id) {
            setHospitalDetails(hospitalItem)
            setIsEdit(false)
        } else {
            setHospitalDetails({})
            setIsEdit(true)
        }
    }, [dispatch, hospitalItem, setHospitalDetails, setIsEdit])

    useEffect(() => () => {
        dispatch(actions.clearHospitalItem())
    }, [dispatch])

    const onSubmit = () => {
        if (hospitalItem?.id) {
            dispatch(actions.updateHospital(hospitalItem.id, hospitalDetails))
        } else {
            dispatch(actions.addHospital(hospitalDetails))
        }
    }

    return (
        <div className="modal fade" id="hospital-modal">
            <div className="modal-dialog modal-fullscreen-md-down" style={{minWidth: 'fit-content'}}>
                <div className="modal-content">
                    <div className="modal-header bg-secondary">
                        <h2 className="modal-title">Hospital View</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsEdit(false)}></button>
                    </div>
                    <div className="modal-body">
                        {isEdit ? <form>
                            <div className="mb-3">
                                <label className="form-label">Hospital Name</label>
                                <input required className="form-control" value={hospitalDetails.name} onChange={e => setHospitalDetails({...hospitalDetails, name: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <textarea required className="form-control" value={hospitalDetails.address} onChange={e => setHospitalDetails({...hospitalDetails, address: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" value={hospitalDetails.description} onChange={e => setHospitalDetails({...hospitalDetails, description: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cover Image Url</label>
                                <input className="form-control" value={hospitalDetails.imgSrc} onChange={e => setHospitalDetails({...hospitalDetails, imgSrc: e.target.value})} />
                            </div>
                        </form> :
                        <div className="d-flex row">
                            <div className="col-12 col-md-6">
                                <h3>{hospitalDetails.name}</h3>
                                <p>{hospitalDetails.address}</p>
                                <p>{hospitalDetails.description}</p>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-end">
                                <img
                                    className="img-responsive ml-auto"
                                    src={hospitalDetails.imgSrc ?? 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33200608.jpg'}
                                    alt={`Cover for ${hospitalDetails.name}`}
                                    style={{maxHeight: '200px'}}
                                />
                            </div>
                        </div>}
                        <div className="w-100 text-right">
                            <button type="button" className={`btn btn-edit ${isEdit && !(hospitalDetails.name && hospitalDetails.address) ? 'disabled' : ''}`} onClick={() => {
                                isEdit && onSubmit()
                                setIsEdit(!isEdit)
                            }}>
                                <FontAwesomeIcon icon={isEdit ? faSave : faPencil} />
                            </button>
                            {hospitalItem?.id && <button type="button" data-bs-dismiss="modal" className="btn btn-delete" onClick={() => dispatch(actions.deleteHospital(hospitalItem.id))}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HospitalModal
