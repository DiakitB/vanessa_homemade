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
    
    if (!bookMark) return;
    const { name, ingredients, image } = bookMark;
    console.log(ingredients)
    return <div className="flex flex-col  justify-center gap-2 px-8">
    <div className="space-x-4 px-10">

            <button type="button" class="text-white bg-gradient-to-br from-green-400
             to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg
     text-lg px-5 py-2.5 text-center me-2 mb-2" onClick={() => navigate("/bookmark")}>Back</button>
    </div>
    <h3 className="px- py-3 leading-normal  font-semibold  ">{name}</h3>
    <div className="pr-25 ">

    <Image src={image} alt="picture" />
    </div>
   
    <div className="">
            {ingredients?.map((ingredient, index) => 
                <h4 className="list-disc tracking-tight"><span>{ index +1}-</span>
                    {ingredient}
                </h4>)}
        </div>
  </div>

}

export default BookMarkIngredient


