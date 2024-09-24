const { Router } = require('express')

const route = Router()

route.get('/', (req, res) => {
    // TODO : Send current user
    res.send({
        "user": {
            "email": "jordannono2245@gmail.com",
            "token": "jwt.token.here",
            "username": "jordan",
            "bio": "I work at statefarm",
            "image" : "null"
        }
    })
})


module.exports = route 