import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem";
import { getCart } from "../../services/ShopingCart";
import { useSelector } from "react-redux";
import { useMutation} from "@tanstack/react-query";
import { AddedToCart } from "../../services/ShopingCart";
export default function Cart() {
    const carts = useSelector(state => state.cart.cart)


      const { mutate:addeNewItem, isloading: isAddingItem, } = useMutation({
        mutationFn: AddedToCart,
        onSuccess: () => alert("item added successfully"),
      
    })
   addeNewItem(carts)
    console.log(carts)
    const {data, isLoading, error } = useQuery({
        queryKey: ["ShoppingCart"],
        queryFn: getCart
    })
    console.log(data)

    return <div>
        <CartItem/>
    </div>
}