const express = require('express')
const router = express.Router()
const { Friends} = require('../models')
const FriensController= require('../Controllers/FriendsController') 

router.route("/").get(FriensController.getAllFriends)
router.route("/").post(FriensController.createFriend)
router.route("/").delete(FriensController.deleteFriend)

// router.delete("/:id",async(req,res)=>{
//     await Friends.destroy({where: {FriendsId:req.params.id,}})
//     res.json('deleted')
// })

module.exports = router