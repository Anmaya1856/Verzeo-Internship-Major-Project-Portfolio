const express = require("express");
const sendmail = require("./mail");
const app = express();
const path = require("path");
const sendMail = require("./mail");
const { resolveSoa } = require("dns");
const PORT = 8080;

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static(__dirname+'/views'));

app.post("/email", (req, res) => {
  console.log("Data: ", req.body);
  const { phone, email, text, name, inquiry } = req.body;
  sendMail(phone, email, text, name, inquiry, (err, data) => {
    if (err) {
      res.status(500).json({ message: "interal error" });
    } else {
      res.json({ message: "Email sent!!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Index.html"));
});

app.listen(PORT, () => {
  console.log("server is starting on PORT", 8080);
});
