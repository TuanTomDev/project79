function dangnhap(){
	var email=document.getElementById("email").value;
	var pass=document.getElementById("pass").value;
	var firebase = new Firebase("https://quanly79-5fb81-default-rtdb.firebaseio.com");
	firebase.child(email).on('value', (snapshot) => {
		if(pass==snapshot.val()){
		window.location.href = "QL1.html";
		sessionStorage.setItem("dangnhap", "ok");
		return true;
		}
		else alert("Tài khoản hoặc mặt khẩu không chính xác !");
		return false;
	});
	return false;
}