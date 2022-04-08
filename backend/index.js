const express = require("express");
const cors = require("cors");
require("dotenv").config();
require('./helpers/connect');
// set up express

const app = express();
app.use(express.json());
app.use(cors());




// set up routes

app.use("/users", require("./routes/users"));
app.use(require('./routes/payment'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
