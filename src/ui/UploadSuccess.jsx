import { useNavigate } from "react-router-dom";
import Button from "./Button";

function UploadSuccess() {

    const navigate = useNavigate()
    return<div className="space-y-4">
        <p className="text-sm uppercase">Your recipe is being uploaded<br />
            <span>
            Go back to our recipe list your recipe my be there already if not don't worry it will apear next time your log in</span></p>
        <Button type="small" onClick={()=> navigate("/recipes")}>Recipes list</Button>
        
    </div>
} export default UploadSuccess;