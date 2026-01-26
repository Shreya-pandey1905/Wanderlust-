const express = require("express");
const router =  express.Router();


//Index-users
router.get("/", (req, res) => {
    res.send("get for users");

});

//Show - userss

router.get("/:id", (req, res) => {
    res.send("GET for show users");
})

//Post - userss

router.post("/", (req, res) => {
    res.send("POST for show users");
})

//DELETE - userss

router.delete("//:id", (req, res) => {
    res.send("DELETE for show users");
});

module.exports = router;
