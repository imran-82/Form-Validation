let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = true;

function validateForm() {
	if (username.value == "") {
		document.getElementById("userError").innerHTML = "User Name is Empty";
		flag = false;
	} else if (username.value.length < 3) {
		document.getElementById("userError").innerHTML =
			"User Name require minimum 3 characters";
		flag = false;
	} else {
		document.getElementById("userError").innerHTML = "";
		flag = true;
	}

	if (password.value == "") {
		document.getElementById("passError").innerHTML = "Password is Empty";
		flag = false;
	} else {
		document.getElementById("passError").innerHTML = "";
		flag = true;
	}

	if (flag) {
		return true;
	} else {
		return false;
	}
}
