const userData = require('../dataSet/userData')
const asyncHandler = require('express-async-handler')
const generateToken = require('../Configuration/generateToken')

const loginController = asyncHandler(async (req, res) => {
  const {name, password} = req.body
  const user = await userData.findOne({name})
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  }
  else {
    res.status(401)
    res.send("Invalid Username and Password")
  }
})

// registering User
const registerController = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body

  if (!name || !email || !password) {
    res.send(400)
    throw Error('All inputs fields Required')
  }

  // checking user already exist in the database
  const userExist = await userData.findOne({email})

  if (userExist) {
    throw new Error('user Already Exists')
  }

  // check username already exists

  const userName = await userData.findOne({name})
  if (userName) {
    throw new Error('Username Already Taken')
  }

  const user = await userData.create({name, email, password})

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('User Registration Error')
  }
})

module.exports = {loginController, registerController}
