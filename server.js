const express = require('express');
const server = express();

server.get("/", (req, res) => {
  res.send("Chill.Clan is fucking ready (Bitch)")
});

function keepAlive(){
    server.listen(3050, ()=>{console.log("lISTER:3050 Ready")});
}

console.log("Web Server Ready")

module.exports = keepAlive;