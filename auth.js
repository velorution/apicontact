const passport = require("passport-localapikey")


passport.use(new LocalAPIKeyStrategy(
    function(apikey, done) {
      User.findOne({ apikey: "ABCD" }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  module.exports = passport;


  