import { useNavigate } from "react-router-dom";
import Button from "./Button";

function UploadSuccess() {

    const navigate = useNavigate()
    return<div className=" grid justify-center py-20 px-10 gap-10">
        <p className="text-sm uppercase"> Your recipe is being uploaded.<br />
            <span>
           
Please return to our recipe list. Your recipe may already be there. If not, don't worry, it will appear next time you log in.</span></p>
        <Button type="small" onClick={()=> navigate("/recipes")}>Recipes list</Button>
        
    </div>
} export default UploadSuccess;