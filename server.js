const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.use( express.static( "public" ) );


// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.listen(3000);