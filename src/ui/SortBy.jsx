
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);



`;
function onChangeHandler() {
  console.log("hello")
}
export default function SortBy({ options, value, ...props}) {
const[selectedValue, setSelectedValue] = useState()
  const [searParms, setSearchParms] = useSearchParams()
  if(searParms !== "")
  searParms.set("sort", selectedValue)
  setSearchParms(searParms)
  console.log(`this is the courant search param ${searParms}`)
console.log(selectedValue)
    return <StyledSelect value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
        <option value="" disabled selected hidden>Filter</option>
        {options.map(option => <option value={option.value} key={option.value}>{ option.value}</option>)}
    </StyledSelect>
    
}