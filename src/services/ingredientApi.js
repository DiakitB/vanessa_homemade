import supabase, { supabaseUrl } from "./supabaseap";

export async function getIngredientsList() {
   

    let { data , error } = await supabase
    .from('Ingredients')
    .select('*')
  

    if (error) {
        console.error(error);
        throw new Error("ingredient data couldnt be loaded");
    }
    // console.log(data);
    return data;
}
export async function getQuantity() {
   


    let { data, error } = await supabase
    .from('Quantity')
    .select('*')
  
  

    if (error) {
        console.error(error);
        throw new Error("quantity data couldnt be loaded");
    }
    // console.log(data);
    return data;
}
export async function getUnit() {
   

   
let { data, error } = await supabase
.from('Unit')
.select('*')

  

    if (error) {
        console.error(error);
        throw new Error("unit data couldnt be loaded");
    }
    // console.log(data);
    return data;
}