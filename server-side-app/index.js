const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const app = express();


dotenv.config();
app.use(express.json());


const connectDb =  async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_CREDENTIAL);
    console.log("server is connected")
  }

  catch(err) {
    console.log("Server is not connected", err.message);
  }
}

connectDb();
app.get("/", (request, response) => {
    let date = new Date();
    response.send("Today's date is");
  });

app.use("/user", userRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server is running on 3000 port!"));
