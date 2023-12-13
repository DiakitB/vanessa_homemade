import { NavLink } from "react-router-dom"

function MainNav() {
    return <nav>
        <ul className="flex gap-3">
            <li>
                <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
                <NavLink to="/bookmark">Bookmark</NavLink>
            </li>
            <li>
                <NavLink to="/form">Add a new recipe</NavLink>
            </li>
        </ul>
    </nav>
}
export default MainNav