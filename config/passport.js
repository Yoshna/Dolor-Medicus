const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const Doctor = require("../models/doctors");

passport.use(
  new googleStrategy(
    {
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: `${process.env.SERVER_URL}/auth/google/redirect`,
      passReqToCallback: true,
      proxy: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log("fvf");
      console.log(req.session);
      if (req.session.route === "signup") {
        let doctor = await Doctor.findOne({ googleId: profile.id });
        if (doctor) {
          done(null, doctor, { message: "Logged in" });
        } else {
          doctor = new Doctor({
            name: profile.displayName,
            googleId: profile.id,
            emailId: profile.emails[0].value,
          });
          await doctor.save();
          done(null, doctor, { message: "Saved" });
        }
      } else {
        let doctor = await Doctor.findOne({ googleId: profile.id });
        if (doctor) {
          done(null, doctor, { message: "Logged in" });
        } else {
          return done(null, false, { message: "Please Sign up " });
        }

        //   }
      }
    }
  )
);

passport.serializeUser((doctor, done) => {
  done(null, doctor._id);
});
passport.deserializeUser(async (id, done) => {
  const doctor = await Doctor.findById(id);
  done(null, doctor);
});
