const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');


const router = express.Router();

router.use(bodyParser.urlencoded({extended : false}))

// Serve messages
router.get('/', (req, res) => {
    fs.readFile('username.txt', (err, data) => {
        if(err){
            console.log(err);
            data = 'No chat existed yet';
        }
        res.send(`
            ${data}
            <form action="/" onsubmit = "document.getElementById('username').value = localStorage.getItem('username')" method="POST">
                <input id="message" name="message" type="text" placeholder="message" >
                <input type="hidden" name="username" id="username">
                <button type="submit"> Send </button>
            </form>
        `)
    })
});

router.post('/', (req, res) => {
    console.log(`${req.body.username} : ${req.body.message}`);
    fs.writeFile("username.txt", `${req.body.username} : ${req.body.message}`, (err) =>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        } 
    })
})

module.exports = router;