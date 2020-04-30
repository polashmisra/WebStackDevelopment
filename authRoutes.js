// Route handlers to be written here
// The below route handler is used to enable the passport middleware in the ongoing activity 
const passport = require('passport');
module.exports = app => {
app.get('/auth/google',
    passport.authenticate('google',{
    scope: ['profile','email']
}));    

// The second route handler to handle the case which user visits /auth/google/callback

app.get('/auth/google/callback',passport.authenticate('google'));
};
