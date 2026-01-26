const express = require("express");
const app = express();
const user = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const { error, log } = require("console");
// const cookieParser = require("cookie-parser");



// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(cookieParser("secretcode"));

// app.get("/getsignedcoookie", (req, res) => {
//     res.cookie("made-in", "India", { signed: true });
//     res.send("signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified");

// })
// app.get("/getCookies", (req, res) => {
//     res.cookie("greet", "hello");
//     res.cookie("Bonjour", "France");
//     res.send("send you some cookies");
// });

// app.get("/greet", (req, res) => {
//     let { name = "anonymous" } = req.cookies;
//     res.send(`Hi,${name}`);
// })



app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("hi i m root");
})



const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true
};

app.use(session(sessionOptions));

// app.use(
//     session({
//         secret: "mysupersecretstring",
//         resave: false,
//         saveUninitialized: true,
//     })
// );

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
   
//     res.send(`you sent a request ${req.session.count} times`)
// });


app.use(flash());    




app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;

    if (name === "anonymous") {
        req.flash("error", "User not registered");
    } else {
        req.flash("success", "User registered successfully");
     }

    // res.redirect("/hello");
});



app.listen(3000, () => {
    console.log("server is listening to port 3000")

});

