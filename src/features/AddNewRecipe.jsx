
import { useState } from "react"
import Form from "../ui/Form"
import Modal from "../ui/Model"

import styled from "styled-components"


const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }
  `

export default function AddNewRecipe({recipe, setShowForm}) {
  console.log("hello boss")
  return <Modal>
    <Modal.Window>
      <Button onClick={()=>setShowForm(false)}>Close</Button>
      <Form recipeData={recipe}/>
    </Modal.Window>
  </Modal>
}

// showForm && <Form recipeData={recipe}


