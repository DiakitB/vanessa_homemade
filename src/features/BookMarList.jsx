import { useQuery} from "@tanstack/react-query";
import { getBookMark } from "../services/BookMarkApi";
import BookMark from "./BookMark";
import styled from "styled-components";


const Container = styled.ul`
    height: 1200px;
  width: 100vw;
    display: grid;
    justify-items: center;

    gap: 5px;
`

function BookmarkList() {
 
    const { data:recipes, isLoading, error} = useQuery({
        queryKey: ["bookmark"],
        queryFn: getBookMark
        

    })
    
   

    return  <Container className=" md:grid-cols-4 gap-3 ">
        
          
        
    {recipes?.map(recipe => <BookMark recipe={recipe} key={recipe.id}/>)}
    
</Container>
}
export default BookmarkList