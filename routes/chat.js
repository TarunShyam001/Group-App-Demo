const express = require('express');
const data = require('./data');
const bodyParser = require('body-parser');


const router = express.Router();

router.use(bodyParser.urlencoded({extended : false}))

// Serve messages
router.get('/message', (req, res, next) => {
    res.send(`
        <html>
            <body>
                ${data.getMessages()}
                <form action="/message" onsubmit="document.getElementById('username').value = localStorage.getItem('username')" method="POST">
                    <input id="message" name="message" type="text" placeholder="message" >
                    <input type="hidden" name="username" id="username">
                    <button type="submit"> Send </button>
                </form>
            </body>
        </html>
    `)
});

router.post('/message', (req, res, next) => {
    const message = `${req.body.username} : ${req.body.message}`;
    data.addMessage(message);
    console.log(data.getMessages());
    console.log(`${req.body.username} : ${req.body.message}`);
    res.redirect('/message')
})

module.exports = router;