// --IMPORTS--
require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , user_controller = require('./controllers/user_controller')
    , products_controller = require('./controllers/products_controller')
// , http = require('http').Server(app)
// , io = require('socket.io');

// --SETUP APP--
const app = express();
app.use( express.static( `${__dirname}/../build` ) );

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

    // db.find_in_employee_table([profile._json.email])
    // .then(email => {
    //     // console.log('1email[0].email',email[0].email) // console.log('2profile._json.email',profile._json.email) // if (email[0].email===profile._json.email  // ){ console.log('3Its a Match!!') }
    //     if (email.length === 0){
    //         //REDIRECT?
    //     } 
    // })
    
    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            //  if (!user[0].employed){
            //     console.log('NOT employed')
            //     return done(null, null)
            // }
            console.log('5current user')
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            db.create_user([user.name, user.email, user.picture, user.identities[0].user_id]).then(user => {
                console.log('6create new user')
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
    successRedirect: '/#/profile',
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
    res.redirect(302, '/#/logout')
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


// --USER ENDPOINTS--
app.post('/api/add/user', user_controller.createUser);
app.put('/api/edit/user', user_controller.editUser);
app.get('/api/users', user_controller.allUsers);
app.get('/api/list/users', user_controller.autoCompleteUsersList);
app.delete('/api/user/delete/:employeeid', user_controller.deleteUser);
app.get('/api/user/:id', user_controller.getActiveUser);
// app.get('/api/email/auth/:id', user_controller.isUserInEmployeeTable);


// --PRODUCT ENDPOINTS--
app.put('/api/transaction', products_controller.newPurchase);
app.put('/api/sendpoints', user_controller.sendPoints);
app.post('/api/add/product', products_controller.createProduct);

app.get('/api/products', products_controller.allProducts);
app.get('/api/product/:id', products_controller.singleProduct);
app.get('/api/user/transactions/:id', products_controller.myTransactions);
app.get('/api/user/pointhistory/:id', products_controller.myPointHistory);
app.delete('/api/product/delete/:productid', products_controller.deleteProduct);


// -- LAST END POINT -- DO NOT PUT ANY END POINTS BELOW HERE --
const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// --SOCKET--
// io.on('connection', function(socket){
//     console.log('a user connected');
//   });

// --SETUP APP TO LISTEN TO PORT--
const PORT = 8082;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))





//      ------ CODE GRAVEYARD ------

                // if(app.get('/api/email/auth/'+profile._json.email).then(email => {
                //     return email
                // })){
                //     console.log('1profile._json.email:')
                // }else{
                //     console.log('1profile._json.email:')

                // }

    // app.get('/api/email/auth/'+profile._json.email,(req, res) => {
    //     console.log('api is calling!')
    //     if (!req.email) {
    //         return res.status(404).send('email not found')
    //     }
    //     return res.status(200).send(req.email);
    // })

    // if(app.get('/api/email/auth/'+profile._json.email, (res).then(res => {
    //    console.log('res.data',res.data)
    //     return res.data;
    // }))===profile._json.email){
    //     console.log('IF',profile._json.email)
    //     console.log('res.data',res.data)

    // }else{
    //     console.log('ESLE',profile._json.email)
    //     console.log('res.data',res.data)

    // }