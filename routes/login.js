const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended : false}))

router.get('/login-page',(req, res, next)=>{
    res.send(`
        <html>
            <body>
                <form action="/login-page" onsubmit="localStorage.setItem('username', document.getElementById('username').value)" method="POST"> 
                    Username: 
                    <input type="text" id="username" name="username">
                    <br> 
                    <button type="submit">Login</button>
                </form>
            </body>
        </html>`);
});
router.post('/login-page', (req, res, next)=>{
    console.log(`User Id : ${req.body.username}`);
    res.redirect('/message');
})

module.exports = router;