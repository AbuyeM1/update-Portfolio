const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
 app.use(express.static("assets"));

 require("./routes/routes")(app);

 

 app.listen(PORT, function () {
     console.log("App now Listening On: http://localhost:" + PORT);
 });