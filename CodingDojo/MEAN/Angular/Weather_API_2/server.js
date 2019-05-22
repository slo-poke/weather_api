const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/dist/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.all("*", (re,res,next) => {
//     res.sendFile(path.resolve("./public/dist/public/index.html"));
// })

app.listen(4200, function() {
    console.log("Listening on port 4200...");
})



// weather api key:
// 3cd05c3b93150237bc96811ac7c659cd
// Boise: http://api.openweathermap.org/data/2.5/weather?q=Boise&appid=3cd05c3b93150237bc96811ac7c659cd

