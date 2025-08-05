"use client";

import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

export function ModalComponent() {
 const [openModal, setOpenModal] = useState(false);
 const [title, setTitle] = useState("");
 const [success, setSuccess] = useState(false); 

 function onCloseModal() {
  setOpenModal(false);
  setTitle("");
  setSuccess(false); 
 };

 async function handleSubmit() {
  //cheking if the title is null
  if (!title.trim()) return alert("Title is required!");

  try {
   await axios.post("http://localhost:3000/api/post/todos", { title });
   setSuccess(true); 
  } catch (error) {
   console.error("Error creating todo:", error);
   alert("Failed to create todo.");
  };
 };

 return (
  <>
   <Button color="light" onClick={() => setOpenModal(true)}>Create Todo</Button>

   <Modal show={openModal} size="md" onClose={onCloseModal} popup>
    <ModalHeader />
    <ModalBody>
     <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create Todo List</h3>
      {/* //checking if the post is success, if its success return P tag to confirm */}
      {!success ? (
       <>
        <div>
         <div className="mb-2 block">
          <Label htmlFor="title">Title</Label>
         </div>
         <TextInput
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
         />
        </div>
        <div className="w-full flex justify-end">
         <Button onClick={handleSubmit}>Create</Button>
        </div>
       </>
      ) : (
       // 
       <div className="text-center">
        <p className="text-green-600 font-semibold">Todo saved successfully!</p>
       </div>
      )}
     </div>
    </ModalBody>
   </Modal>
  </>
 );
};
