let db = require('../database.js')

class Reservation {
	reservationid = 0
	passengers = []
	destination = ""
	nbseat = 0
	insurance = false


	constructor(destination, nbseat, insurance,passengers){
		this.destination = destination
		this.nbseat = nbseat
		if (insurance == "on" || insurance == true){
			this.insurance = true
		}
		this.passengers = passengers
	}

	save(session){
		session.destination = this.destination
		session.nbseat = this.nbseat
		session.insurance = this.insurance
		session.passengers = this.passengers
	}
	savetoDB(){
		console.log("in savetoDB")
		let sql = "INSERT INTO reservation (destination, nbseat, insurance) VALUES (?,?,?)"
		db.query(sql, [this.destination, this.nbseat, this.insurance], (err, result)=>{
			if (err) throw err
			this.reservationid = result.insertId
			console.log("Reservation saved")
		})
		for (let i = 0; i < this.passengers.length; i++){
			let sql = "INSERT INTO users (name, age, idreservation) VALUES (?,?,?)"
			db.query(sql, [this.passengers[i].name, this.passengers[i].age, this.reservationid], (err, result)=>{
				if (err) throw err
				console.log("Passenger saved")
			})
		}
	}

}
module.exports = Reservation