export default function CartItem({ item }) {
    console.log(item)
    return <div>
        {item?.map(it => <div className="flex flex-cols">
            <h4>{it }</h4>
        </div>)}
    </div>
}