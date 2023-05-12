const express = require("express");
const router = express.Router();
const { Friends, Users } = require("../models");
const { v4 } = require("uuid");

const getAllFriends = async (req, res) => {
  try {
    const AllFriends = await Friends.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    res.json(AllFriends);
  } catch (error) {
    res.json(error.message);
  }
};

const createFriend = async (req, res) => {
  const { UserId, FriendId } = req.body;
  console.log(UserId,FriendId)
  if (!UserId || !FriendId)
    return res.status(400).json({ error: "No friend to create" });
  const UniqueFriendID = v4();
  try {
    const check = await Friends.findOne({
      where: { UserId: UserId,FriendsId:FriendId },
    });
    console.log(check)
    if (check) {
      await Friends.destroy({
        where: { id: check.id },
      });
      res.json({ BtnText: "Follow", action: "unfriend successful" });
    } 
    if (!check) {
      const friend = await Friends.create({
        id: UniqueFriendID,
        UserId: UserId,
        FriendsId: FriendId,
      });
      res.json({ friend:friend });
    }
  } catch (error) {
    res.json(error.message);
  }
};
const deleteFriend = async (req, res) => {
  if (!req?.params?.id)
    return res
      .status(400)
      .json({ error: "No Id is passed to delete friendship" });
  try {
    const deletedfriend = await Friends.destroy({
      where: { FriendsId: req.params.id },
    });
    if (!deletedfriend)
      return res
        .status(204)
        .json({ message: "No friend found to be deleted." });
    res.json(deletedfriend);
  } catch (error) {
    res.json({ error: "no matching id is found" });
  }
};

module.exports = {
  getAllFriends,
  createFriend,
  deleteFriend,
};
