
import { createPortal } from "react-dom";


export default function AddIngredient() {
    console.log("testing ingredient component")
    return createPortal(
      <form>
       <div class="mb-4">
      
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a new ingredient"/>
    </div>
      </form>,
      document.body
    );
}