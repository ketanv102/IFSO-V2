import { CalendarDays } from 'lucide-react';
import React from 'react';
import Header from '../../components/common/Header';
import './AddDob.css';
import "react-datepicker/dist/react-datepicker.css";

const AddDob = () => {
  return (
    <div className="d-flex justify-content-center w-100 bg-black p-3">
      <div className="DOB-parent-container bg-black">
        <Header title='Add Date of Birth' />

        <p className="DOB-Subtitle">This won't be a part of your profile</p>

        <div className="DOB-Input">
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="date-input"
          />
          <CalendarDays className="calendar-icon" />
        </div>

        <div className="button-container ">
          <button className="skip-button px-8 py-2 rounded-lg bg-light text-dark">Skip</button>
          <button className="DOB-next-button px-10 py-10 rounded-lg bg-light text-dark">Next</button>
        </div>
      </div>
    </div>
  )
}

export default AddDob