import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


const Image = styled.img`
    width:400px;
    height: 220px
`



export default function RecipeResume() {

    const recipe = useSelector(state => state.recipe.recipe)
    if (recipe) console.log(recipe)
    const navigate = useNavigate()

    const { name, image, description, ingredients, instructions } = recipe
    if (ingredients) console.log(ingredients)
    
    const Deltat =  ingredients?.map((ingre) => {
        return JSON.parse(ingre)
       
})
    return (
        <>
        <button type="button" class="text-white bg-gradient-to-br from-green-400 
            to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
             dark:focus:ring-green-800 font-medium 
            rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"onClick={() => navigate("/recipes")} >Back</button> 
        <div class="grid gap-3">
        <div>
        <Image src={ image} />
        </div>
        <div>
        <p>{instructions }</p>
        </div>
        <div>
                    {Deltat?.map((ing, index) => {
                        return <form>
                            <input type="checkbox" labe={ing.ingredient} />
                            <label for="vehicle1"> {`${index + 1}) ${ing.quantity} ${ing.unit} ${ing.ingredient} `}</label>
                        </form>
         })}
        </div>
        </div>
        </>
        )
    
}

/* <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form> */