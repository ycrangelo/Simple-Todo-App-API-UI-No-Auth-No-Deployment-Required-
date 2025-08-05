"use client";

import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

export function ModalComponent() {
 const [openModal, setOpenModal] = useState(false);
 const [title, setTitle] = useState("");

 function onCloseModal() {
  setOpenModal(false);
  setTitle("");
 }

 async function handleSubmit() {
  if (!title.trim()) return alert("Title is required!");

  try {
   await axios.post("http://localhost:3000/api/post/todos",
    { title }
   );
   alert("Todo created successfully!");
   onCloseModal();
  } catch (error) {
   console.error("Error creating todo:", error);
   alert("Failed to create todo.");
  }
 }

 return (
  <>
   <Button color="light" onClick={() => setOpenModal(true)}>Create Todo</Button>
   <Modal show={openModal} size="md" onClose={onCloseModal} popup>
    <ModalHeader />
    <ModalBody>
     <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a new Todo</h3>
      <div>
       <div className="mb-2 block">
        <Label htmlFor="title">Title</Label>
       </div>
       <TextInput
        id="title"
        placeholder="Enter todo title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
       />
      </div>
      <div className="w-full">
       <Button onClick={handleSubmit}>Create</Button>
      </div>
     </div>
    </ModalBody>
   </Modal>
  </>
 );
}
