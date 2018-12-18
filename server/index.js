require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
// const session = require("express-session");
// const passport = require("passport");
// const Auth0Strategy = require("passport-auth0");
const blog_controller = require("./controllers/blog_controller");
// const { SESSION_SECRET: secret } = process.env;

const app = express();

app.use(json());
app.use(cors());

// app.use(
//   session({
//     secret,
//     saveUninitialized: true,
//     resave: false,
//     cookie: {
//       maxAge: 1209600000 // two weeks
//     }
//   })
// );

// const strategy = new Auth0Strategy(
//   {
//     domain: process.env.AUTH0_DOMAIN,
//     clientID: process.env.AUTH0_CLIENT_ID,
//     clientSecret: process.env.AUTH0_CLIENT_SECRET,
//     callbackURL: "/login"
//   },
//   function(accessToken, refreshToken, extraParam, profile, done) {
//     return done(null, profile);
//   }
// );

// passport.use(strategy);
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

// app.use(passport.initialize());
// app.use(passport.session());
// app.get(
//   "/login",
//   passport.authenticate("auth0", {
//     successRedirect: `${process.env.REACT_APP_CLIENT}/dashboard`,
//     failureRedirect: "/"
//   })
// );

app.use(express.static(`${__dirname}/../build`));

app.get("/success", (req, res) => {
  res.status(200).json(req.user);
});
app.get("/api/blog/:id", blog_controller.getPost);
app.get("/api/blogs", blog_controller.read);
app.post("/api/blogs", blog_controller.create);

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db), console.log("Database Connected"))
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
