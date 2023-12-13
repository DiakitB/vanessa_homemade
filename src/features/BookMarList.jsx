import { useQuery } from "@tanstack/react-query";
import { getBookMark } from "../services/BookMarkApi";
import BookMark from "./BookMark";

function BookmarkList() {
    
    const { data:recipes, isLoading, error} = useQuery({
        queryKey: ["bookmark"],
        queryFn: getBookMark
    })
    
    

    return  <ul className="grid justify-center md:grid-cols-4 justify-center">
        
    {recipes?.map(recipe => <BookMark recipe={recipe} key={recipe.id}/>)}
    
</ul>
}
export default BookmarkList