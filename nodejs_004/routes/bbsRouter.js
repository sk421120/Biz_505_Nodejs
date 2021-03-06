const express = require("express");
const router = express.Router();

const { tbl_bbs } = require("../models/index");

router.get("/write", (req,res)=>{
    res.render("write");
});

router.post("/write", (req,res)=>{
    tbl_bbs.create(req.body).then((result) =>{
            res.json(result);
        });
});

router.get("/update", (req,res)=>{
    let id = req.query.id;
    tbl_bbs.findByPk(id).then( (result) =>{
        res.render("write", {BVO:result});
    } )
})

router.post("/update", (req,res)=>{
    let b_id = req.query.id;
    res.body.b_id = b_id;
});

module.exports = router;