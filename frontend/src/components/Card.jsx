import axios from "axios";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeadCell,
 TableRow,
 Button,
} from "flowbite-react";
import { useEffect, useState } from "react";

export function CardComponent() {
 const [todos, setTodos] = useState([]);

 const fetchTodos = () => {
  axios
   .get("http://localhost:3000/api/get/todos")
   .then((response) => {
    setTodos(response.data)
    fetchTodos();
   })
   .catch((error) => console.error("Error fetching todos:", error));
 };

 useEffect(() => {
  fetchTodos();
 }, []);

 const handleMarkDone = async (id) => {
  try {
   await axios.post("http://localhost:3000/api/update/status/todos", { id });
   fetchTodos();
  } catch (err) {
   console.error("Error marking as done:", err);
  }
 };

 const handleDelete = async (id) => {
  try {
   await axios.delete(`http://localhost:3000/api/delete/todos/${id}`);
   fetchTodos();
  } catch (err) {
   console.error("Error deleting todo:", err);
  }
 };

 return (
  <div className="overflow-x-auto">
   <Table>
    <TableHead>
     <TableRow>
      <TableHeadCell>Title</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
      <TableHeadCell></TableHeadCell>
      <TableHeadCell></TableHeadCell>
     </TableRow>
    </TableHead>
    <TableBody className="divide-y">
     {todos.map((todo) => (
      <TableRow
       key={todo.id}
       className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
       <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {todo.title}
       </TableCell>
       <TableCell>
        <span
         className={`px-3 py-1 rounded text-sm font-semibold ${todo.is_done
          ? "text-green-400"
           : "text-yellow-400"
          }`}
        >
         {todo.is_done ? "Done" : "Pending"}
        </span>
       </TableCell>
       <TableCell>
        {!todo.is_done && (
         <Button
          color="green"
          size="xs"
          onClick={() => handleMarkDone(todo.id)}
         >
          Done task
         </Button>
        )}
       </TableCell>
       <TableCell>
        <Button
         color="red"
         size="xs"
         onClick={() => handleDelete(todo.id)}
        >
         Delete task
        </Button>
       </TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </div>
 );
}
