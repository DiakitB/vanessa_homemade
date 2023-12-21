import supabase from "./supabaseap";

export async function postBookMar(recipe) {
    

    const { data, error } = await supabase
    .from('BookMark')
    .insert([recipe])
    .select()
   
    return data

}

export async function getBookMark() {
    
let { data, error } = await supabase
.from('BookMark')
.select('*')

return data
}


export async function deleteBookMark(id) {
    console.log(id)
  
    const {data,  error } = await supabase
    .from('BookMark')
    .delete()
        .eq('id', id)
        if (error) {
          console.error(error);
          throw new Error("Recipe  couldnt be deleted");
      }
      
        return data;
    
    }


// export async function getBookMarkIngredient(id) {
        

    
// const { data , error } = await supabase


// .from('BookMark')
// .select('ingredients', id)
//   console.log(data)
//     return data;
//     }

    
// let { data: BookMark, error } = await supabase
// .from('BookMark')
// .select('ingredients')
