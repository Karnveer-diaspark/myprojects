const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')
const router = express.Router()


router.get('/users/getAll',async (req, res) => {
    
    try
    {
        let user = await User.find()
        if(user.length){
         res.send(user);
         console.log("user",user)
        }
    }catch(error) {
        res.status(500).send(error)       
    }
})

 // Create a new user
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

 //Login a registered user
router.post('/users/login', async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})



router.post('/users/me/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/me/logoutall', auth, async (req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})


router.get('/users/me', auth, async (req, res) => {
    // View logged in user profile
    res.send(req.user)
})





module.exports = router