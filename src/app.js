const express = require("express");

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "../public");

const fs = require ("fs");
//console.log(fs);

app.use(express.static(publicPath));




const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>
console.log(`servidor corriendo ${PORT}`)
);





app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
});
