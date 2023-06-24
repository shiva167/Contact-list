const express = require('express');
const port = 8000;
const path = require('path');
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/practice', function (req, res) {
    res.render('practice',{title:"karbe",cp});
})
var cp = [{ name: "Gaurav", phone: 6398073457 },
{ name: "Mayank", phone: 8954227560 }
];
app.post("/contact-list", function (req, res) {
    cp.push({
        name: req.body.my_name,
        phone:req.body.phone_number
    })
    return res.redirect('/practice');
})
app.listen(port, function (err) {
    if (err) {
        console.log("Error", err);
    }
    console.log("Server is running and Port no. ", port);
    
})