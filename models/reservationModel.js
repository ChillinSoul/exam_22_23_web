class Reservation {

	passengers = []
	destination = ""
	nbseat = 0
	insurance = false


	constructor(destination, nbseat, insurance){
		this.destination = destination
		this.nbseat = nbseat
		if (insurance == "on") {
			this.insurance = true
		}
	}

	save(session){
		session.destination = this.destination
		session.nbseat = this.nbseat
		session.insurance = this.insurance
		session.passengers = this.passengers
	}
	addpassenger(passenger){
		passengers.push(passenger)
		session.passengers = this.passengers
	}

}
module.exports = Reservation