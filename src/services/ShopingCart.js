import { NavItem } from "react-bootstrap";
import supabase from "./supabaseap";




export async function getCart() {
   
  
let { data, error } = await supabase
.from('ShopingCart')
.select('*')

  

    
        if (error) {
            console.error(error);
            throw new Error("Cart data couldnt be loaded");
        }
        
        return data;
    }


    
    export async function AddedToCart(item) {
      
    
       console.log(item)
    const { data, error } = await supabase
    .from('ShopingCart')
    .update({ cart: [...item ]})
    .eq('id', 1)
    .select()
    
        
            if (error) {
                console.error(error);
                throw new Error("Cart data couldnt be loaded");
            }
          
            return data;
        }
    export async function DeleteCartItem(item) {
      console.log(item)
       const oldData = await getCart()
       const[cart] = oldData;
        console.log(cart.cart)
        
        const mutatedList = cart.cart?.filter(obj => obj !==item)
console.log(mutatedList)

console.log(item)
const { data, error } = await supabase
.from('ShopingCart')
.update({ cart: [...mutatedList]})
.eq('id', 1)
.select()


if (error) {
    console.error(error);
    throw new Error("Cart data couldnt be loaded");
}

return data;
      
        }
    
// const { error } = await supabase
// .from('Cart')
// .delete()
// .eq('some_column', 'someValue')

//     let query = supabase.from('RecipeTable')
// if(!id)
// query = query.insert([{...newRecipe, image: imagePath}])
            
    
//     if (id)
        
//         query = query.update({...newRecipe, image: imagePath})
//         .eq('id', id)
//             .select()
    
//         const { data, error } = await query.select().single()
    
//         const {  error: storageError } = await supabase
//         .storage
//         .from('recipesPhoto')
//           .upload(imageName, newRecipe.image)
        
//         ///3. Delete the cabin If there was an error
//         if (storageError)
//         {
          
//           throw new Error("Image not uploaded cabin not created ");
         
//         }