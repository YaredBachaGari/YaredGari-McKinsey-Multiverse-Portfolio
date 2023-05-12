const express = require('express')
const router = express.Router()
const { Likes} = require('../models')

router.get("/", async(req, res) => {
    const AllLikes = await Likes.findAll()
    res.json(AllLikes)
})

router.post("/",async(req,res)=>{
    const like = req.body
    await Likes.create(post)
    res.json(like)
})

router.delete("/:id",async(req,res)=>{
    await Likes.destroy({where: {FriendsId:req.params.id,}})
    res.json('deleted')
})

module.exports = router