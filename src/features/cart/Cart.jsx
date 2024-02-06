import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem";
import { getCart } from "../../services/ShopingCart";

export default function Cart() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn:getCart
   })

    console.log(data[0])
    const { cart } = data[0]
    console.log(cart)

    return <div>
        <CartItem item={ cart} />
    </div>
}