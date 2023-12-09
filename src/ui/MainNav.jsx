import { NavLink } from "react-router-dom"

function MainNav() {
    return <nav>
        <ul>
            <li>
                <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
                <NavLink to="/bookmark">Bookmark</NavLink>
            </li>
        </ul>
    </nav>
}
export default MainNav