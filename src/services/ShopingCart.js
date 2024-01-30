import supabase from "./supabaseap";




export async function getCart() {
   
   

    const  { data, error } = await supabase
    .from('Cart')
    .select('*')
  

    
        if (error) {
            console.error(error);
            throw new Error("Cart data couldnt be loaded");
        }
         console.log(data);
        return data;
    }
export async function AddedToCart(item) {
   console.log(item)

   

   const { data, error } = await supabase
   .from('Cart')
   .insert([ item])
   .select()
 

  
    
        if (error) {
            console.error(error);
            throw new Error("Cart data couldnt be loaded");
        }
         console.log(data);
        return data;
    }