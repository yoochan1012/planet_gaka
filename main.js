const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");

const user = require("./routes/user");
const config = require("./config/database");


mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log("Connected to Database " + config.database);
});

mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({secret: "secret"}));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
app.use("/user", user);
app.use(express.static(path.join(__dirname, "public")));


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const route = require('./routes/route');
app.use(bodyParser.json());
app.use("/api", route);

var request = require('request');

var url = 'http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService/getAstroEventInfo';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=Qb20%2FOauSukCG1UxgQYVJfYYUAorZ2Q49Az18ThBWNx%2FTwBT%2BN2p1WiZLXUx25m9L1ppjb45YrrfD%2BdfwrRTEA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent('2021'); /* */
queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent('12'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log(body);
});