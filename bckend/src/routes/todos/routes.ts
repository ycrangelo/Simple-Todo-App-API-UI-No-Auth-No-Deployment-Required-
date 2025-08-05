import { Request, Response, Router } from 'express';
import { db } from "../../database/dbConnect";
import { todoSchema } from "../../database/schema/todoSchema";
import { eq } from 'drizzle-orm';
const router = Router()


//get method
router.get("/get/Todos/", async (req: Request, res: Response) => {
 try {
    //query to database
  const todos = await db.select().from(todoSchema);

  res.status(200).json(todos);
  
 } catch (error) {
  
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal server error" });
 };
});

//create new todo
router.post("/post/todos", async (req: Request, res: Response) => {
  const { title } = req.body;
  console.log("inside todolist create")
 try {
   //check if if title is null
    if (!title) {
    return res.status(400).json({ error: "Missing title" });
  };
const newTodo = await db.insert(todoSchema).values({
  title: title
});
  
  return res.status(201).json({ message: "Todo created", todo: newTodo });
  
 } catch (error) {
   console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal server error" });
 };
});

//delete todos
router.delete("/delete/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.delete(todoSchema).where(eq(todoSchema.id, Number(id)));

   res.status(200).json({ message: "deleted successfully." });
   
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo." });
 };
});

//update
router.post("/update/status/todos", async (req: Request, res: Response) => {
 const {id}= req.body;
 try {
  if (!id) {
   return res.status(400).json({ error: "missing id" });
  }
  
  await db.update(todoSchema).set({ is_done: true }).where(eq(todoSchema.id, id));

  res.status(200).json({ message: "updated successfully." });

 } catch (error) {
   console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal server error" });
 };
});






export default router;




