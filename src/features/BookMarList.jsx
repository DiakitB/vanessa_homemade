import { useQuery } from "@tanstack/react-query";
import { getBookMark } from "../services/BookMarkApi";
import BookMark from "./BookMark";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   height: 1200px;
  
   

   align-items: center;
    display: grid;

    gap: 5px;
`

function BookmarkList() {
    
    const { data:recipes, isLoading, error} = useQuery({
        queryKey: ["bookmark"],
        queryFn: getBookMark
    })
    
    const navigate = useNavigate()

    return  <Container className=" md:grid-cols-4 gap-3 w-screem">
        <div>
            <Button onClick={()=>navigate("/recipes")}>Go Back</Button>
        </div>
    {recipes?.map(recipe => <BookMark recipe={recipe} key={recipe.id}/>)}
    
</Container>
}
export default BookmarkList