bt_total = document.getElementById("bt_total");

//add an event listener to bt_total

bt_total.addEventListener("click", ()=>{
	
	var price = 45
	//get the value of the second text box
	var quantity = document.getElementById("nbseat").value;
	//calculate the total
	var total = price * quantity;
	if(document.getElementById("assurance").checked){
		total += 20;
	}
	if (quantity > 0) {
		//display the total
		document.getElementById("total").value = total;
	}
	
	
});