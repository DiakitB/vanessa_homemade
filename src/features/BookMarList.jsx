import { useQuery } from "@tanstack/react-query";
import { getBookMark } from "../services/BookMarkApi";
import BookMark from "./BookMark";

function BookmarkList() {
    
    const { data:recipes, isLoading, error} = useQuery({
        queryKey: ["bookmark"],
        queryFn: getBookMark
    })
    
    

    return  <ul className=" sm:grid grid-cols-2 py-3 px-3 gap-3 md: grid-cols-4">
        
    {recipes?.map(recipe => <BookMark recipe={recipe} key={recipe.id}/>)}
    
</ul>
}
export default BookmarkList