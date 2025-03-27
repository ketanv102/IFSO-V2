import React from "react";
import './AddName.css';
import inputProfileIcon from '../../assets/icons/input-profile-icon.png'
import Header from "../../components/common/Header";




const AddName = () => {
  return (
    <div className="d-flex justify-content-center w-100 bg-black">
      <div className="add-name-container bg-black d-flex flex-column">
      
        <Header title='Add Your Name'/>
        <p className="Subtitle mt-3 mb-2">Add your name so people can find you</p>

        <div className="Name-Input mt-3">
          <span className="icon d-flex"><img src={inputProfileIcon} alt="" /></span>
          <input
            type="text"
            placeholder="Enter your name"
            className="name-input"
          />

        </div>
        <button className="next-button bg-light text-black">Next</button>
      </div>
    </div>
  );
};

export default AddName;   