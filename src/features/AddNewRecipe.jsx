import { Button } from "bootstrap"
import { useState } from "react"

export default function () {
  
    return <div>
         <button onClick={()=>setIsModalOpen(show => !show)}>Edit</button>
      <Button type="small" onClick={()=>onClikHandler(id)} >Ingredients</Button>
    </div>
}