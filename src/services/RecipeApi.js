import supabase, { supabaseUrl } from "./supabaseap";

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
 
    return data;

}

export async function createEditRecipe(newRecipe, id) {
    console.log(newRecipe, id)
const hasImagePath = newRecipe.image?.startsWith?.(supabaseUrl)
    // 1) Give the image a unique name

    const imageName = `${Math.random()}-${newRecipe.image.name}`.replaceAll("/", "")

    // 2) Build the image path
    //  https://iyqiqzanfhqrpsjpjrtc.supabase.co/storage/v1/object/public/recipesPhoto/recipe1.jpg?t=2023-12-11T23%3A36%3A05.656Z//

    const imagePath = hasImagePath? newRecipe.image:`${supabaseUrl}/storage/v1/object/public/recipesPhoto/${imageName}`
    let query = supabase.from('RecipeTable')
if(!id)
query = query.insert([{...newRecipe, image: imagePath}])
            
    
    if (id)
        
        query = query.update({...newRecipe, image: imagePath})
        .eq('id', id)
            .select()
    
        const { data, error } = await query.select().single()
    
        const {  error: storageError } = await supabase
        .storage
        .from('recipesPhoto')
          .upload(imageName, newRecipe.image)
        
        ///3. Delete the cabin If there was an error
        if (storageError)
        {
          
          throw new Error("Image not uploaded cabin not created ");
         
        }
return data
}


