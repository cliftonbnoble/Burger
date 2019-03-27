let express = require("express");

let router = express.Router();

//Import the model to use it's database functions

let burger = require("../models/burger.js")

//Create Routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        console.log(data);
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, "0"
    ], function () {
        res.redirect("/");
        // res.json({ id: result.insertId});
    });
});

router.put("/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            //No rows changed means no ID exists.  404 Error
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res){
    let condition = "id = " + req.params.id;

    burger.deleteOne(condition, function(result){
        if (result.affectedRows == 0) {
            //No rows changed means no ID exists.  404 Error
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
        res.redirect("/");
    });
});

//Export Routes for Server.js to use
module.exports = router;