const express = require('express');
const bodyParser = require('body-parser');


const router = express.Router();

// /admin/add-product => GET Request
router.use(bodyParser.urlencoded({extended : false}))

router.get('/login-page',(req, res, next)=>{
    res.send('<html><body><form action="/" onsubmit="localSTorage.setItem(`username`, document.getElementById(`username`).value)  method="POST"><label for="username">Username:</label><input type="text" id="username" name="username"><button type="submit">Login</button></form></body></html>');
    res.redirect('/');
});
router.post('/login-page', (req, res, next)=>{
    console.log(`User Id : ${req.body.userId}`);
    res.redirect('/');
})

module.exports = router;