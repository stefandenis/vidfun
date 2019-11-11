const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const session = require("express-session");
const { PORT = 5000 } = process.env;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const cookieParser = require("cookie-parser");
const passport = require("passport");
const mysql = require("mysql");

app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false

    // cookie: { secure: true }
  })
);

app.use(passport.initialize());
app.use(passport.session());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwertyhnjkl",
  database: "login"
});

connection.connect(err => {
  if (err) console.error("Error connection to database");
  else console.log("Database connected");
});

app.post("/register", (req, res) => {
  const { name, username, email, password } = req.body;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    connection.query(
      `insert into users(Name,Username,Email,Password) values('${name}','${username}','${email}','${hash}')`,
      function(error) {
        if (error) console.error(error);
      }
    );

    connection.query("SELECT LAST_INSERT_ID() as userID", function(
      error,
      results,
      fields
    ) {
      if (error) throw error;

      const userID = results[0];
      console.log(results[0]);
      req.login(userID, function(err) {
        res.redirect("http://localhost:3000");
      });
    });
  });
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
