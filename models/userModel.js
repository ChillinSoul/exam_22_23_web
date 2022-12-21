class User{
	constructor(name, age){
	this.name = name;
	this.age = age;
  }
  save(session){
  	
  	session.passengers.push(this)
  }	
  room(session){
  	//if there is room in the passengerlist
  	if (session.passengers.length < session.nbseat){
  		return true
  	}
  	else{
  		return false
  	}
  }
}
module.exports = User
