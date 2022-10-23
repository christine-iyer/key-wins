const { update } = require('../models/win')
const Win = require('../models/win')
const dataController = {
     //Index
     index(req, res,next){
          Win.find({}, (err,foundWins) => {
               if (err) {
                    res.status(400).send({
                         msg:err.message
                    })
               } else {
                    res.locals.data.wins = foundWins
                    next()
                    }
               })
          },
     //Destroy
     destroy(req,res,next) {
          Win.findByIdAndDelete(req.params.id, (err, deletedWin) => {
               if(err) {
                    res.status(400).send({
                         msg: err.message
                    })
               } else {
                    res.locals.data.win = deletedWin
                    next()
               }
          })
     },
     //Update
     update(req, res,next) {
          Win.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedWin) => {
               if (err){
                    res.status(400).send({
                         msg: err.message
                    })
               } else {
                    res.locals.data.win = updatedWin
                    next()
               }
          })
     },
     //Create
     create(req,res,next){
          req.body.Date = new Date()
          Win.create(req.body, (err, createdWin) => {
               if (err) {
                    res.status(400).send({
                         msg: err.message
                    })
               } else {
                    res.locals.data.win = createdWin
                    next()
               }
          })
     }, 
     //Edit
     //Show
     show(req,res,next) {
          Win.findById(req.params.id, (err, foundWin) => {
               if (err) {
                    res.status(400).send({
                         msg: err.message,
                         output: "Could not find a win with that ID"
                    })
               } else {
                    res.locals.data.win = foundWin
                    next()
               }
          })
     }
}
module.exports = dataController