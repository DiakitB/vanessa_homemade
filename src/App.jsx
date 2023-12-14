
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipesPage from "../src/pages/RecipesPage";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Ingredient from "./features/Ingredient";
import Form from "./ui/Form";
import BookmarkPage from "./pages/BookmarkPage";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})
function App() {
 

  return (<div>
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route index element={<Navigate replace to="recipes" />} />
         
            <Route path="bookmark" element={<BookmarkPage />} />
             <Route path="recipes" element={<RecipesPage/>}/>
            <Route path="ingredient" element={<Ingredient/>}/>
            <Route path="form" element={<Form/>}/>
            
           
            
            


        </Route>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </div>)
}

export default App
