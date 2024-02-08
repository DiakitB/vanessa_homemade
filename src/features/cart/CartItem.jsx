export default function CartItem({ item }) {
   if(!item)return
   console.log(item)
   const [cart] = item;
   const List = cart.cart;
   console.log(List)

 
    return <div>
       {List?.map((ele, index) => <div className=" block w-full  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0, 0, 0, 0.07),0_10px_20px_-2px_rgba(0, 0, 0, 0.04)] dark:bg-neutral-700">
  <ul className="w-full  ">
    <li
      className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 text-red-700">
     {index +1}-{ele}
    </li>
   
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