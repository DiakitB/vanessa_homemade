import { NavLink } from "react-router-dom"

function MainNav() {
    return <nav>
        <ul className="flex gap-3 py-3 px-4">
            <li>
                <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
                <NavLink to="/bookmark">Bookmark</NavLink>
            </li>
            <li>
                <NavLink to="/form">Add a new recipe</NavLink>
            </li>
            <li>
                <NavLink to="/testing">Testing Page</NavLink>
            </li>
        </ul>
    </nav>
}
export default MainNav