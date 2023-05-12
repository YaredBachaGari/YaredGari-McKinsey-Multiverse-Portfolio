require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt'); 
const cors = require('cors');
const cookieParser = require("cookie-parser"); 
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { Users } = require('../models')
const registrationHandler = require('../Controllers/RegistrationController')
const UsersController = require('../Controllers/UsersController')

router.post('/', UsersController.createNewUser)
router.get('/', UsersController.getAllUsers)
router.get('/:id', UsersController.getOneUser)
router.put('/:id', UsersController.UpdateUser)
router.delete('/:id', UsersController.DeleteUser)

// router.post('/',
//             body('FirstName').not().isEmpty().trim().escape(), 
//             body('LastName').not().isEmpty().trim().escape(), 
//             body('email').isEmail().normalizeEmail(), 
//             body('password').isString().isLength({ min: 6 }).not().isLowercase().not().isUppercase().not().isNumeric().not().isAlpha(),
//             registrationHandler.registration)

//Users registration end point 
// router.post("/", body('FirstName').not().isEmpty().trim().escape(), 
// body('LastName').not().isEmpty().trim().escape(), 
// body('email').isEmail().normalizeEmail(), 
// body('password').isString().isLength({ min: 6 }).not().isLowercase().not().isUppercase().not().isNumeric().not().isAlpha(),
// async(req, res, next)=>{
//     try{
//         const validationErrors = validationResult(req);
//         if (!validationErrors.isEmpty()) {
//           return res.status(400).json({ validationErrors: validationErrors.array() });
//         }
//         const {UserId, FirstName, LastName, AvatarImage, email, password, role} = req.body;
//         const bcryptedpassword = await bcrypt.hash(password, SALT_COUNT)
//         const allUsers = await Users.findAll({where:{email:email}}) // find if the email exist. if not do the following 
//         if(allUsers.length === 0 ){
//             const newUser = await Users.create({UserId, FirstName, LastName, AvatarImage, email, password:bcryptedpassword, role})
//             const token = jwt.sign({ id: newUser.id, username: newUser.FirstName }, process.env.JWT_SECRET) 
//             res.json(token);
//         }else{
//             res.send('This user already exist')
//         }
//     }catch(error){
//         next(error)
//     }
// })

// router.get("/", async(req, res) => {
//     const {email, password} = req.body
//     const subscribedUser = await Users.findOne({where:{email}})
//     const isAMatch = await bcrypt.compare(password, subscribedUser.password) // returns a boolean

//     const AllUsers = await Users.findAll()
//     res.json(AllUsers)
// })

// router.delete("/:id",async(req,res)=>{
//     await Users.destroy({where: {UserId:req.params.id,}})
//     res.json('deleted')
// })

// router.put('/:id', async(req,res)=>{
//     await Users.update(req.body, { 
//         where: {UserId: req.params.id }
//     });
//     res.json('updated')
// })

module.exports = router