
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt'); 
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { Users } = require('../models')
const  {v4} = require('uuid')


//Authentication controller 
let registration = async(req, res)=>{
    const {FirstName, LastName, email, password} = req.body
    if(!FirstName || !LastName || !email || !password) return res.status(400).json({'message':'full name along with email and password are required'})
    const anyUsers = await Users.findAll({where:{email:email}})  // check for duplicate 
    if(anyUsers.length>0) return res.status(409).json({'message':'This user already exist'})
    try {
        const UniqueId = v4()
        const bcryptedpassword = await bcrypt.hash(password, 10)    // encrypt( hash and salt) the password
        const newUser = await Users.create({UserId:UniqueId, FirstName, LastName, AvatarImage:'', email, password:bcryptedpassword, refreshToken:''})
        const token = jwt.sign({ id: newUser.id, username: newUser.FirstName }, process.env.ACCESS_TOKEN_SECRET) 
        res.status(200).json({'Success':'successfully registered','accessToken':token});
    } catch (error) {
        res.status(500).json({'message':error.message})  // server error 
    }
}

module.exports = {registration}