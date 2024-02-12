import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem";
import { getCart } from "../../services/ShopingCart";
import { Spinner } from "react-bootstrap";


export default function Cart() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: getCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] })
            reset();
        }
   })
    if (isLoading) <Spinner />
    console.log(data)
    const list = data
    return <div className="grid-cols-4">
        <CartItem item={list}/>
    </div>
}