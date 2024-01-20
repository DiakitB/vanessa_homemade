
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import styled from "styled-components";
const Image = styled.img`
width: 400px;
 height: 220px;
  
`

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
const longString = "carrot, broccoli ,asparagus ,cauliflower ,corn, cucumber, green ,pepper, lettuce ,mushrooms ,onion, potato, pumpkin, red pepper, tomato, beetroot, brusse,l sprouts, peas, zucchini, radish, sweet, potato, artichoke ,leek, cabbage, celery ,chili, garlic, basil, coriander, parsley, dill, rosemary, oregano, cinnamon ,saffron ,green, bean, bean ,chickpea, lentil, apple, apricot, avocado, banana ,blackberry ,blackcurrant, blueberry ,boysenberry, cherry ,coconut, fig, grape, grapefruit, kiwifruit, lemon, lime, lychee, mandarin, mango, melon, nectarine, orange, papaya ,passion, fruit, peach ,pear ,pineapple, plum ,pomegranate, quince, raspberry, strawberry, watermelon, salad ,pizza, pasta, popcorn ,lobster ,steak, bbq, pudding, hamburger, pie, cake, sausage, tacos, kebab, poutine, seafood, chips, fries, masala, paella ,som, tam, chicken, toast, marzipan, tofu, ketchup, hummus chili maple syrup parma ham fajitas champ lasagna poke chocolate croissant arepas bunny chow pierogi donuts rendang sushi ice cream duck curry beef, goat ,lamb t,urkey ,pork, fish ,crab ,bacon, ham, pepperoni, salam"
const list1 = longString.split(',')
console.log(list1)
export default function RecipeCooking() {
    const recipes = useSelector(state => state.recipe.recipe)
    console.log(recipes)
    const navigate = useNavigate()
    return <div className="flex flex-col  justify-center gap-2 px-10 pb-4">
        
        <button type="button" class="text-white bg-gradient-to-br from-green-400
         to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
          dark:focus:ring-green-800 font-medium rounded-lg
         text-lg px-5 py-2.5 text-center me-2 mb-2"onClick={() => navigate('/recipes')}>Back</button>
        <div>
            <Image src={recipes.image} />
            <div className="py-4">
                <p>{ recipes.instructions}</p>
            </div>
        </div>
    </div>
}


const arrayLis = ['carrot', ' broccoli ', 'asparagus ', 'cauliflower ', 'corn', ' cucumber', ' green ',
    'pepper', ' lettuce ', 'mushrooms ', 'onion', ' potato', ' pumpkin', ' red pepper', ' tomato', ' beetroot',
    ' brusse', 'l sprouts', ' peas', ' zucchini', ' radish', ' sweet', ' potato', ' artichoke ', 'leek', ' cabbage',
    ' celery ', 'chili', ' garlic', ' basil', ' coriander', ' parsley', ' dill', ' rosemary', ' oregano', ' cinnamon ', 'saffron ',
    'green', ' bean', ' bean ', 'chickpea', ' lentil', ' apple', ' apricot', ' avocado', ' banana ', 'blackberry ', 'blackcurrant',
    ' blueberry ', 'boysenberry', ' cherry ', 'coconut', ' fig', ' grape', ' grapefruit', ' kiwifruit', ' lemon', ' lime', ' lychee',
    ' mandarin', ' mango', ' melon', ' nectarine', ' orange', ' papaya ', 'passion', ' fruit', ' peach ', 'pear ', 'pineapple',
    ' plum ', 'pomegranate', ' quince', ' raspberry', ' strawberry', ' watermelon', ' salad ', 'pizza', ' pasta', ' popcorn ',
    'lobster ', 'steak', ' bbq', ' pudding', ' hamburger', ' pie', ' cake', ' sausage', ' tacos', ' kebab', ' poutine', ' seafood', ' chips',
    ' fries', ' masala', ' paella ', 'som', ' tam', ' chicken', ' toast']





   