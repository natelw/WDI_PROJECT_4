import React from 'react';
import { Row, Col, FormGroup, FormControl, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const EquipSearchBar = ({ handleSort, handleSearch, handleClassSort }) => {

  return(
    <section>
      <FormGroup>
        <FormControl type="text" placeholder="Search" onChange={handleSearch}/>
      </FormGroup>

      <FormGroup>
        <FormControl componentClass="select" onChange={handleSort}>
          <option value="name|asc">Name (A - Z)</option>
          <option value="name|desc">Name (Z - A)</option>
        </FormControl>
        <ToggleButtonGroup
          type="radio"
          name="equipmentoptions"
          className="equipment-toggles"
        >
          <ToggleButton value="" onChange={handleClassSort}>All</ToggleButton>
          <ToggleButton value="Weapon" onChange={handleClassSort}>Weapon</ToggleButton>
          <ToggleButton value="Armor" onChange={handleClassSort}>Armor</ToggleButton>
          <ToggleButton value="Adventuring Gear" onChange={handleClassSort}>Gear</ToggleButton>
          <ToggleButton value="Tools" onChange={handleClassSort}>Tools</ToggleButton>
          <ToggleButton value="Mounts and Vehicles" onChange={handleClassSort}>Mounts</ToggleButton>

        </ToggleButtonGroup>
      </FormGroup>
</section>
  );
};

export default EquipSearchBar;
