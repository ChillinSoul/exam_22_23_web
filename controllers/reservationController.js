let express = require('express')
let Reservation = require('../models/reservationModel.js')



exports.home = (req, res)=> {
  res.render('home')
}
exports.home_post = (req, res)=> {
  let reservation = new Reservation(req.body.destination, req.body.nbseat, req.body.assurance,[])
  reservation.save(req.session)
  res.render('person')
}

exports.validation = (req, res)=> {
  
  res.render('confirmation.ejs')
}
exports.confirmation = (req, res)=> {
  let reservation = new Reservation(req.session.destination, req.session.nbseat, req.session.insurance,req.session.passengers)
  reservation.savetoDB()
  res.render('confirmation.ejs')
}