import SortBy from "./SortBy";

export default function RecipeOperation() {



    return    <SortBy options={[
     {value: "all", label: "all"},
     {value: "breakfast", label: "breakfast"},
     {value: "lunch", label: "lunch"},
     {value: "supper", label: "supper"},
    
     
 ]} />
 }