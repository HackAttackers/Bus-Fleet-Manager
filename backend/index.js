const express = require("express");
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

const reports = require("./routes/reports");

const app = express();

app.arguments(express.json());
app.arguments(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server started at port " + port);
});

app.use("/reports", reports);

// Use relationLoadStratergy:"join" for db server resources OR "query" for backend server resources. For efficiency in each query where relational data is needed i.e. include or select is needed
// _count - returns the count of number of data
// _avg - returns tha average of int or float values ( number fields)
// _sum - returns the sum of  number fields
// for pagination use cursor with take and skip for performance
// or simply take and skip, if want to jump to an exact page, otherwise if sequntial loading of pages then use cursor
