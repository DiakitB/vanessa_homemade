import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Image = styled.img`
     width: 330px;
 height: 220px;
`
const Dive = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    gap: 15px;
 
`

function BookMarkIngredient() {
    const bookMark = useSelector(state => state.bookmark.bookmark)
const navigate = useNavigate()
    console.log(bookMark)
    if (!bookMark) return;
    const { name, ingredients, image } = bookMark;
    console.log(ingredients)
    return <Dive>
    <div>
        <div className="flex gap-8">
        <Button type="secondary" onClick={() => navigate("/bookmark")} > God back</Button>
        
        
        </div>
        <div>

        <p className="py-10 leading-normal  font-semibold ">{ name}</p>
        </div>
    </div>
    <div className="pr-20">
        <Image src={image}/>
    </div>
    <div className="pl-5">
        {ingredients?.map(ingredient => <ul>
            <li className="list-disc tracking-tight">
                {ingredient}
            </li>
        </ul>)}
    </div>
    

</Dive>
}

export default BookMarkIngredient