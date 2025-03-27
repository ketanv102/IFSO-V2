import React from 'react'
import Header from '../../components/common/Header';

const AddUsername = () => {
  return (
    <div className="d-flex justify-content-center w-100 bg-black">
    <div className="add-name-container bg-black d-flex flex-column">
    
      <Header title='Add Your Username'/>
      <p className="Subtitle mt-3 mb-2">Add your name so people can find you</p>

      <div className="Name-Input mt-3">
        <input
          type="text"
          placeholder="Enter your Username"
          className="name-input"
        />

      </div>
      <button className="next-button bg-light text-black">Next</button>
    </div>
  </div>
  )
}

export default AddUsername