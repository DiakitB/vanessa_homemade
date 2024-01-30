import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem";
import { getCart } from "../../services/ShopingCart";

export default function Cart() {

    const {data, isLoading, error } = useQuery({
        queryKey: ["ShoppingCart"],
        queryFn: getCart
    })
    console.log(data)
    return <div>
        <CartItem/>
    </div>
}