const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");


const flash = require("connect-flash");
const session = require("express-session");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const UserRouter = require("./routes/user.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => console.log("connected to DB"))
    .catch(err => console.log(err)); 

async function main() {
    await mongoose.connect(MONGO_URL); 
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* flash locals */
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user; // ✅ ADD THIS
    
    next();
});


// app.get("/demouser", async(req,res)=>{
//     let fakeUser= new User({
//         email:"student@gmail.com",
//         username: "delta-student",
//     });
//    let registerUser = await User.register(fakeUser,"helloWorld");
//    res.send(registerUser);
// });


/* routes */
app.get("/", (req, res) => {
    res.send("Hi I am root");
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", UserRouter);



/* 404 */
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

/* error handler */
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
