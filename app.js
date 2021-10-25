function prayerTimes(latitude, longitude) {
	fetch("http://api.aladhan.com/v1/calendar?latitude=" + latitude + "&longitude=" + longitude + "&method=2")
		.then((response) => response.json())
		.then(function (response) {
			let date = new Date();
			let today = date.getDate() - 1;
			console.log(today);
			console.log(response.data[today]);
		});
}

function success(position) {
	prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
	alert("Cannot accsess the position.");
}

function userLocation() {
	if (!navigator.geolocation) {
		alert("Geolocation was not found in your browser.");
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
}

function index() {
	let app = document.getElementById("app");
	let h3 = document.createElement("h3");
	h3.innerHTML = "Prayer Times";

	app.appendChild(h3);

	userLocation();
}

index();
