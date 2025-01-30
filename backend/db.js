
import mongoose from "mongoose"
import { configDotenv } from "dotenv"
configDotenv()

export  const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mithungowdahc12a:hZqPPzQMwz9KFaRh@cluster0.vkne8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MOngoDB connected");
};

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

export const todo = mongoose.model("todos", todoSchema)