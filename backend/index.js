import express from "express";
import { configDotenv } from "dotenv";
import { createToDo } from "./types.js";
import { updateToDo } from "./types.js";

const app = express();
configDotenv();
app.use(express.json())


app.post("/todo", (req, res)=> {
    
})

app.get("/todos", (req, res)=> {

})

app.put("/completed", (req, res)=> {

})

app.get("/", (req, res)=>{
    res.send("App is ok")

})



app.listen(process.env.PORT, () => {
  console.log(`App is running at port ${process.env.PORT} `);
});
