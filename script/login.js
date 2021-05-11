var Text_phone = document.querySelector(".text_Phone");
var text_password = document.querySelector(".text_Password");
var phone_Sigin= document.getElementById("phone_Sigin");
var password_Sigin = document.getElementById("password_Sigin");
var textInput1 = false;
var textInput2 = false;
               /*email*/
phone_Sigin.addEventListener("click", ()=>{
	if(!textInput1){
		textInput1 = true;
		Text_phone.style.transform="translate(25%, 20px)";
	}
	else if(!phone_Sigin.value == ""){
		Text_phone.style.transform="translate(25%, 20px)";	
	}
	else {
		textInput1 = false;
		Text_phone.style.transform="translate(32%, 42px)";
	}
});

password_Sigin.addEventListener("click", ()=>{
	if(!textInput2){
		textInput2 = true;
		text_password.style.transform="translate(25%, 20px)";
	}
	else if(!password_Sigin.value == ""){
		text_password.style.transform="translate(25%, 20px)";	
	}
	else {
		textInput2 = false;
		text_password.style.transform="translate(32%, 42px)";
	}
});

function Signup(){
 window.location="Signup.html";
}


