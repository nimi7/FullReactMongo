const app = require("./routers/router");
require("./DB/DB");
const express = require('express');

const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const path = require("path");

// connectDB();
app.use(express.static(path.join(__dirname, 'public')));

// Added to serve client static files
app.use(express.static(path.resolve(__dirname, 'client/build')));
//DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  // const root = path.join(__dirname, "/client/build");
  // app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname , 'client','build','index.html'));
  });
};

app.listen(PORT, () => {
  console.log(`shut up start on port: ${PORT}`);
});
