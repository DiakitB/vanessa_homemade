import supabase from "./supabaseap";

export async function postBookMar(recipe) {
    

    const { data, error } = await supabase
    .from('BookMark')
    .insert([recipe])
    .select()
    console.log(data);
    return data

}

export async function getBookMark() {
    
let { data, error } = await supabase
.from('BookMark')
.select('*')

return data
}