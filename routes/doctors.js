const express = require("express");
const router = express.Router();
const passport = require("passport");

// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   })
// );

router.get(
  "/google/signup",
  (req, res, next) => {
    req.session.route = "signup";
    console.log(req.session.route);
    return next();
  },
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/login",
  (req, res, next) => {
    req.session.route = "login";
    return next();
  },
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
//   //   console.log(req.user);
//   //   console.log("vvfvfv");
//   res.redirect(`${process.env.CLIENT_URL}/`);
// });

router.get("/google/redirect", (req, res, next) => {
  passport.authenticate(
    "google",
    {
      scope: ["profile", "email"],
    },
    function (err, user, info) {
      console.log(err, user, info);
      if (!user)
        return res.redirect(
          `${process.env.CLIENT_URL}/error?err=${info?.message}`
        );
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect(`${process.env.CLIENT_URL}/`);
      });
    }
  )(req, res, next);
});

router.get("/login", (req, res) => {
  //   console.log(req.user);
  //   console.log("gug");
  if (req.user) return res.send(req.user);
  else return res.send(null);
});

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect(`${process.env.CLIENT_URL}/`);
  });
});

// router.get("/", async (req, res) => {
//   const user = await User.find({}).populate("tasks").exec();
//   console.log(user);
//   res.send(user);
// });

module.exports = router;
