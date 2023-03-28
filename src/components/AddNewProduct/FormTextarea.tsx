import React from 'react'

interface Props {
    label:string;
    placeholder?:string

}

const FormTextarea = ({label}:Props) => {
  return (
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label font-semibold">{label}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
  </div>
  )
}

export default FormTextarea