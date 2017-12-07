import React from 'react';
import { Row, Col, FormGroup, FormControl, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const SearchBar = ({ handleSort, handleSearch, handleClassSort }) => {

  return(
    <Row>
      <Col md={6}>
        <FormGroup>
          <FormControl componentClass="select" onChange={handleSort}>
            <option value="name|asc">Name (A - Z)</option>
            <option value="name|desc">Name (Z - A)</option>
            <option value="level|asc">Spell Level (Low - High)</option>
            <option value="level|desc">Spell Level (High - Low)</option>
          </FormControl>
          <ToggleButtonGroup
            type="checkbox"
          >
            <ToggleButton value="All" >All Classes</ToggleButton>
            <ToggleButton value="Bard" onChange={handleClassSort}>Bard</ToggleButton>
            <ToggleButton value="Druid">Druid</ToggleButton>
            <ToggleButton value="Paladin">Paladin</ToggleButton>
            <ToggleButton value="Ranger">Ranger</ToggleButton>
            <ToggleButton value="Sorcerer">Sorcerer</ToggleButton>
            <ToggleButton value="Warlock">Warlock</ToggleButton>
            <ToggleButton value="Wizard">Wizard</ToggleButton>
          </ToggleButtonGroup>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onChange={handleSearch}/>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
