const express = require("express")
const actions = require("../helpers/actionModel")

const router = express.Router()

router.post('/actions',(req, res) => {
    actions.get()
    .then(action => {
     if(!req.body.description || !req.body.project_id || !req.body.notes){
         res.status(400).json({
             message: "Please enter all information"
         })
     } else {
         actions.insert(req.body)
         .then(action => {
             res.status(201).json(action)
         })
         .catch(err => {
             res.status(500).json({
                 message: "Something went wrong, please try again later"
             })
         })
     }
    })
 })


module.exports = router