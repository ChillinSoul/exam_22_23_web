let User = require('../models/userModel.js')

exports.person = (req, res)=> {
	res.render('person')
  
}
exports.person_post = (req, res)=> {
	let user = new User(req.body.name, req.body.age)
  user.save(req.session)

  if (user.room(req.session)){
  	res.render('person')
  }
  else{
  	res.render('validation')
  }
}