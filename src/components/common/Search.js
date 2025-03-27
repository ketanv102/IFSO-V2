import { SearchNormal1 } from 'iconsax-react'
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './Search.css'

const Search = ({placeholder}) => {
  return (
    <div className="search-container">
      <InputGroup className="search-bar" style={{ marginBottom: "0px" }}>
        <InputGroup.Text className="search-icon" style={{ border: "none" }}>
          <SearchNormal1 size="20" color="#9B9B9B" variant="Broken"/>
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder={placeholder}
            className="search-input"
          />
      </InputGroup>
    </div>
  )
}

export default Search