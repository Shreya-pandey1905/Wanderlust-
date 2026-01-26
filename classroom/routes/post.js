const express = require("express");
const router =  express.Router();

// Posts Route

//Index-users
router.get("/", (req,res)=>{
    res.send("get for posts");

});

//Show - userss

router.get("/:id", (req, res) => {
    res.send("GET for show posts");
});

//Post - userss

router.post("/", (req, res) => {
    res.send("POST for show posts");
});

//DELETE - userss

router.delete("/:id", (req, res) => {
    res.send("DELETE for show posts");
});


module.exports = router;
