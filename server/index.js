require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

// const secured = require("./middleware/secured");

const blog_controller = require("./controllers/blog_controller");

const app = express();

app.use(json());
app.use(cors());
// app.use(secured());

app.use(express.static(`${__dirname}/../build`));

app.get("/api/blog/:id", blog_controller.getPost);
app.get("/api/blogs", blog_controller.read);
app.post("/api/blogs", blog_controller.create);

//AUTH0

const { SESSION_SECRET: secret } = process.env;

app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: false
  })
);

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: "/login"
  },
  function(accessToken, refreshToken, extraParam, profile, done) {
    return done(null, profile);
  }
);

passport.use(strategy);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get("/success", (req, res) => {
  res.status(200).json(req.user);
});

app.use(passport.initialize());
app.use(passport.session());
app.get(
  "/login",
  passport.authenticate("auth0", function(req, res, next) {
    if (!user) {
      return res.redirect(`${process.env.REACT_APP_CLIENT}/`);
    } else {
      return res.redirect(`${process.env.REACT_APP_CLIENT}/dashboard`);
    }
  })
);

massive(process.env.DATABASE_URL)
  .then(db => app.set("db", db), console.log("Database Connected"))
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
