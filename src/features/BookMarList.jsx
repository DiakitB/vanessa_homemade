import { useQuery } from "@tanstack/react-query";
import { getBookMark } from "../services/BookMarkApi";
import BookMark from "./BookMark";

function BookmarkList() {
    
    const { data:recipes, isLoading, error} = useQuery({
        queryKey: ["bookmark"],
        queryFn: getBookMark
    })
    
    

    return  <ul  className="grid h-[1200px]  md:grid-cols-4 gap-3 justify-items-center ">
        
    {recipes?.map(recipe => <BookMark recipe={recipe} key={recipe.id}/>)}
    
</ul>
}
export default BookmarkList