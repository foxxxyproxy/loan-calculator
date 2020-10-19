import React from "react";
import styled from "styled-components";
import dropdownIcon from "./dropdown.svg";

const Select = styled.select`
  padding: 1em;
  padding-right: 4em;
  border-radius: 1em;
  font-size: 1rem;
  border: 1px solid var(--light-gray);
  appearance: none;
  cursor: pointer;
  background: url(${dropdownIcon});
  background-repeat: no-repeat;
  background-size: 0.8em 0.4em;
  background-position-x: calc(100% - 1em);
  background-position-y: 50%;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;

function Dropdown(props) {
  const { type, value, onChange, options } = props;
  return (
    <SelectWrapper className="dropdown-wrapper__item">
      <label htmlFor={type}> {type} </label>
      <Select id={type} value={value} onChange={onChange}>
        <option> Select {type}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </SelectWrapper>
  );
}

export default Dropdown;
