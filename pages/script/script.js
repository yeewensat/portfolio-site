/* toggle between adding and reoving the "responsive" class to navigation when the user clics on the icon */
function toggleResponsiveMenu() {
	var x = document.getElementById("topNavigation");
	if (x.className == "navigation") {
		x.className += " responsive";
	} else {
		x.className = "navigation"
	}
}
