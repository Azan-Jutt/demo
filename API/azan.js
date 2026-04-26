const express = require ('express');
const app = express ();
   //api
   app.get ('/', (req,res) => {
res.send ('Hello API ');
   });

app.listen (3000,() => {
console.log (' server is running on port');
});