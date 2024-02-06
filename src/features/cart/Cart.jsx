import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem";
import { getCart } from "../../services/ShopingCart";
import { Spinner } from "react-bootstrap";


export default function Cart() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: getCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["recipes"] })
            reset();
        }
   })
if(isLoading)<Spinner/>
    const list = data
    return <div>
        <CartItem item={list}/>
    </div>
}