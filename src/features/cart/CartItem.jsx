
import { useDispatch } from "react-redux";
import { Trash } from "../../icons/Icons";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteCartItem } from "../../services/ShopingCart";

export default function CartItem({ item }) {
  const dispatch = useDispatch()
   if(!item)return
  
   const [cart] = item;
   const List = cart.cart;
   const queryClient = useQueryClient();
  
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: DeleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    
   }
   
  });

//   function onClickHandler(value) {
//     console.log(value)
//     deletItemInTheCart()
//  }
    return <div className="">
       {List?.map((ele, index) => <div key={ele} className=" block w-full  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0, 0, 0, 0.07),0_10px_20px_-2px_rgba(0, 0, 0, 0.04)] dark:bg-neutral-700">
         <ul className="w-full grid grid-cols-2  ">
         {/* <button className="bg-blue-300 mt-4">Delet</button> */}
    <li
      className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 text-red-700">
     {index +1}-{ele}
    </li>
    <button className="text-red-500" onClick={()=>mutate(ele)}><Trash/></button>
  </ul>
</div>)}
    </div>
}





// <div
//   class="block w-full max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
//   <ul class="w-full">
//     <li
//       class="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
//       Cras justo odio
//     </li>
//     <li
//       class="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
//       Dapibus ac facilisis in
//     </li>
//     <li class="w-full p-4 dark:border-opacity-50">
//       Vestibulum at eros
//     </li>
//   </ul>
// </div>