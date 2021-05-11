let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

let text_username = document.querySelector(".text_username");
let text_email = document.querySelector(".text_email");
let text_password = document.querySelector(".text_password");

let bool_signup1 = false;
let bool_signup2 = false;
let bool_signup3 = false;
username.addEventListener("click", ()=>{
	if(!bool_signup1){
		bool_signup1 = true;
		text_username.style.transform="translate(25%, 3px)";

	}
	else if(username.value !== ""){
		bool_signup1 = true;
		text_username.style.transform="translate(25%, 3px)";
	}
	else {
	  bool_signup1 = false;
	  text_username.style.transform="translate(30%, 20px)";
	}

})

email.addEventListener("click", ()=>{
	if(!bool_signup2){
		bool_signup2 = true;
		text_email.style.transform="translate(25%, 3px)";
	}
	else if(email.value !== ""){
		bool_signup2 = true;
		text_email.style.transform="translate(25%, 3px)";
	}
	else {
	  bool_signup2 = false;
	  text_email.style.transform="translate(30%, 20px)";
	}

})
password.addEventListener("click", ()=>{
	if(!bool_signup3){
		bool_signup3 = true;
		text_password.style.transform="translate(25%, 3px)";
	}
	else if(password.value !== ""){
		bool_signup3 = true;
		text_password.style.transform="translate(25%, 3px)";
	}
	else {
	  bool_signup3 = false;
	  text_password.style.transform="translate(30%, 20px)";
	}

})

		 /*input*/
 username.addEventListener("input", ()=>{
	 if(username.value !==""){
		text_username.style.transform="translate(25%, 3px)";
	}
	else if(username.value =="") {
		text_username.style.transform="translate(30%, 20px)";
	}
 })
 email.addEventListener("input", ()=>{
	if(email.value !==""){
	    text_email.style.transform="translate(25%, 3px)";
    }
    else if(username.value =="") {
	    text_email.style.transform="translate(30%, 20px)";
    }
})
password.addEventListener("input", ()=>{
	if(password.value !==""){
	    text_password.style.transform="translate(25%, 3px)";
    }
    else if(password.value =="") {
	    text_password.style.transform="translate(30%, 20px)";
    }
})

document.getElementById("cancel").addEventListener("click", ()=>{
	window.location ="Login.html";
})