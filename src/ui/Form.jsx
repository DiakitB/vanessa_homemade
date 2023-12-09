import { useForm } from "react-hook-form";
import Button from "./Button";

function Form() {
    const { register, handleSubmit, reset } = useForm();
    function OnSubmitHandler(data) {
        if(!data) return
        console.log(data.name.split(','))
        
       

        
    }
    return <form onSubmit={handleSubmit(OnSubmitHandler)}>
        <div className="grid grid-cols-1 bg-blue-500 w-full">
            <div className="input w-full">
                <label>Recipe Name</label>
                <input type="text" placeholder="type name"/>
            </div>
            <div>
                <label>Recipe Description</label>
                <input type="text" placeholder="type name"/>
            </div>
            <div>
                <label>Image</label>
                <input type="text" placeholder="type name" />
                <Button type="small"> add an image</Button>
            </div>
                <div className="flex gap-4">   
                    <label>image</label>
                <input type="text" id="name" {...register("name")} className="pace-y-4" />
                <Button type="small">Add recipe</Button>
             </div>
            </div>
    </form>
}

export default Form;