//Import ORM
let orm = require("../config/orm.js")

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    //The variables cols and vals are arrays
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res)
        });
    },
    updateOne: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        });
    },
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

//Export DB functions for the controller
module.exports = burger;

