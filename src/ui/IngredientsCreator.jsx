
import styled from "styled-components";

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
const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const units = ["cup", "slice", "tps"]
const ingredients = ["celery", "salad", "onion"]

export default function IngredientsCreator() {


    function onSubmitHandler(value) {
        console.log(value)
    }
    return <div onSubmit={(e)=>onSubmitHandler(e.target.value)}>
        <div className="flex">
        <div>
      <label>Quantity</label>
        <StyledSelect>
           
        {quantities.map(quantity => <option key={quantity}>{ quantity}</option>)}
    </StyledSelect>
        </div>
        <div>
        <label>Unit</label> 
    <StyledSelect>
        {units.map(unit => <option key={unit}>{ unit}</option>)}
    </StyledSelect>
        </div>
        <div>
        <label>Ingredient</label>
    <StyledSelect>
        {ingredients.map(ingredient => <option key={ingredient}>{ ingredient}</option>)}
    </StyledSelect>
        </div>
    </div>
    </div>
}