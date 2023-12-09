import supabase from "./supabaseap";

export async function getRecipes() {
   
const { data, error } = await supabase
.from('RecipeTable')
.select('*')

    if (error) {
        console.error(error);
        throw new Error("Cabins data couldnt be loaded");
    }
    // console.log(data);
    return data;
}


export async function getRecipeIngredient(id) {
    
const { data, error } = await supabase
.from('RecipeTable')
        .select()
    .eq("id", id)
    console.log(data)
    return data;

}

export async function createNewRecipe(newRecipe) {
    
const { data, error } = await supabase
.from('RecipeTable')
.insert([newRecipe])
.select()
return data
}