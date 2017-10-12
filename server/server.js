// --IMPORTS--
require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , user_controller = require('./controllers/user_controller')
    , products_controller = require('./controllers/products_controller');

// --SETUP APP--
const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
//important to have this at top of file
app.use(passport.initialize());
app.use(passport.session());

// --MASSIVE--
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // will make db calls here in the future
    const db = app.get('db')

    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            db.create_user([user.name, user.email, user.picture, user.identities[0].user_id]).then(user => {
                return done(null, user[0].id)
            })
        }
    })
}
))

// --ENDPOINTS--
// --AUTH ENDPOINTS--
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: '/auth'
}))
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(404).send('User not found.')
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/logout')
})

passport.serializeUser(function (id, done) {
    done(null, id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_current_user([id])
        .then(user => {
            done(null, user[0])
        })
})


// --CONTROLLER ENDPOINTS--
app.post('/api/add/user', user_controller.createUser);

app.post('/api/add/product', products_controller.createProduct);

app.get('/api/users', user_controller.allUsers);
app.get('/api/list/users/:label', user_controller.autoCompleteUsersList);
app.delete('/api/user/delete/:employeeid', user_controller.deleteUser);

// --SETUP APP TO LISTEN TO PORT--
const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))