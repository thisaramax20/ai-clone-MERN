const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/imageKitRoute");
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/imageKit", router);

//server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
