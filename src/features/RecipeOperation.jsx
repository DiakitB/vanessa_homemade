import SortBy from "../ui/SortBy";

export default function RecipeOperation() {



   return    <SortBy options={[
    { value: "name-a-z", label: "Sort by name (A-Z)" },
    { value: "name-z-a", label: "sort by name (Z-A)" },
    {value: "breakfast", label: "breakfast"},
    {value: "lunch", label: "lunch"},
    {value: "supper", label: "supper"},
   ,
    {}
]} />
}