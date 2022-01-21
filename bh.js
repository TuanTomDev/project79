if(sessionStorage.getItem("dangnhap")==null){
	window.location.href = "index.html";
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

	function daysDifference(d0, d1) {
  var diff = new Date(+d1).setHours(12) - new Date(+d0).setHours(12);
  return Math.round(diff/8.64e7);	
  }
function cham(so,parent){
	let format=so.split('.').join('');
	if(isNaN(format)){
		alert("Vui lòng nhập số tiền !");
		parent.value="";
	}

	else{
		format=parseInt(format);
		format=format.toLocaleString();
		parent.value=format;
	}
}

var firebase = new Firebase("https://quanly79-5fb81-default-rtdb.firebaseio.com");
var info=document.getElementById("info");
function outinfo(){
	info.classList.remove("hien");
}
var today=new Date();
var mai=new Date();mai.setDate(mai.getDate()+1);
var id=today.getTime();
function add(){
	addvl.classList.add("hien");
}
function out(){
	addvl.classList.remove("hien");
}
window.onload=function(){
Load();
};

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str.toLowerCase();
}

function addHoaDonBatHo(){
	var vaylai=firebase.child("bh").child(id);
	var ten=document.getElementById("ten").value;
	var cmnd=document.getElementById("cmnd").value;
	var sdt=document.getElementById("sdt").value;
	var diachi=document.getElementById("diachi").value;
	var batho=document.getElementById("batho").value.split('.').join('');
	var duakhach=document.getElementById("duakhach").value.split('.').join('');
	var hinhthuc=document.getElementById("hinhthuc").value;
	var songay=document.getElementById("songay").value;
	var songaydong=document.getElementById("songaydong").value;
	var ngay=document.getElementById("ngay").value;
	var note=document.getElementById("note").value;
	var nhanvien=document.getElementById("nhanvien").value;
	var ngayphaidong = new Date(ngay);
	ngayphaidong.setDate(ngayphaidong.getDate()+(parseInt(songaydong)-1));
	ngayphaidong=ngayphaidong.getFullYear()+"-"+(ngayphaidong.getMonth()+1)+"-"+ngayphaidong.getDate();
  	vaylai.set({
  			ten:ten,
	    	cmnd:cmnd,
	    	sdt:sdt,
	    	diachi:diachi,
	    	batho:batho,
	    	duakhach:duakhach,
	    	hinhthuc:hinhthuc,
	    	songay:songay,
	    	songaydong:songaydong,
	    	ngay:ngay,
	    	note:note,
	    	nhanvien:nhanvien,
	    	laidadong:0,
	    	ngayphaidong:ngayphaidong,
	    	hoanthanh:0
  });
  Load();
}

function Load(){
var tonggiaokhach=0,tonglai1ngay=0,tonglaidadong=0,tongconlai=0,checktinh=0,con=0;
var phanTuCha=document.getElementById("data");
phanTuCha.innerHTML="<tr><td>Stt</td><td>Tên</td><td>Tiền giao khách</td><td>Tỷ lệ</td><td>Thời gian</td><td>Tiền đã đóng</td><td>Tiền 1 ngày</td><td>Còn phải đóng</td><td>Tình trạng</td><td>Ngày phải đóng</td><td>Chức năng</td></tr>"
var data=firebase.child("bh")
data.on('value', (snapshot) => {
	var s=0;
	con=snapshot.numChildren();
	snapshot.forEach(function(childSnapshot) {
		checktinh++;
		var data=document.getElementById("data");
    var childData = childSnapshot.val();

//xoa qua han
	var quahan1=new Date(childData.ngay);
	var quahan2=parseInt(childData.songay);
	var quahan3=childData.hoanthanh;
	quahan1.setDate(quahan1.getDate()+quahan2);
	if(daysDifference(quahan1,today)>=365 && quahan3==1){
	firebase.child("bh").child(childSnapshot.key()).remove();
	Load();
	}

    var checkht=0,checkxl=0;
    var checkxl1=new Date(childData.ngayphaidong);
    if(document.getElementById("hoanthanh").checked==true) checkht=1;
    if(document.getElementById("xuly").checked==true){
    		checkxl=1;
    		if(daysDifference(today,checkxl1)<=0)
    			checkxl=0;
    }
    var checkhn=new Date(childData.ngayphaidong);
    var search=document.getElementById("search").value;
    if(childData.hoanthanh==checkht && removeVietnameseTones(childData.ten).indexOf(removeVietnameseTones(search))!=-1 && checkxl==0){
    	
    	s++;
    	var hang=document.createElement("tr");
    	var stt=document.createElement("td");
    	stt.innerHTML=s;
    	var ten=document.createElement("td");
    	ten.innerHTML=childData.ten;
    	var duakhach=document.createElement("td");
    	var format=parseInt(childData.duakhach);
    	tonggiaokhach+=format;
    	duakhach.innerHTML=format.toLocaleString()+" VNĐ";
    	var tyle=document.createElement("td");
    	tyle.innerHTML="10 ăn "+childData.duakhach/childData.batho*10;
    	var thoigian=document.createElement("td");
    	var ngay=childData.ngay.split("-");
    	var han=new Date(childData.ngay);
    	han.setDate(han.getDate()+parseInt(childData.songay));
    	thoigian.innerHTML=ngay[2]+"/"+ngay[1]+" đến "+han.getDate()+"/"+(han.getMonth()+1)+" ("+childData.songay+"ngày)";
    	var laidadong=document.createElement("td");
    	format = parseInt(childData.laidadong);
    	tonglaidadong+=format;
    	laidadong.innerHTML=format.toLocaleString()+" VNĐ"+" ("+(format/childData.batho*(childData.songay/childData.songaydong))+"Kỳ)";
//*
    	var lai1ngay=document.createElement("td");
    	format =parseInt(childData.batho/childData.songay);
    	tonglai1ngay+=format;
    	lai1ngay.innerHTML=format.toLocaleString()+"VNĐ";
    	var conphaidong=document.createElement("td");
    	format=parseInt(childData.batho-childData.laidadong);
    	tongconlai+=format;
    	conphaidong.innerHTML=format.toLocaleString()+" VNĐ"+"  ("+(format/childData.batho*(childData.songay/childData.songaydong))+"Kỳ)";
    	var tinhtrang=document.createElement("td");
    	if(checkhn.getDate()==today.getDate() && checkhn.getMonth()==today.getMonth() && checkhn.getFullYear()==today.getFullYear())
    		{tinhtrang.innerHTML="HN đóng họ";tinhtrang.classList.add("xanh") }
    	else if(today - checkhn >= 1) {tinhtrang.innerHTML="Chậm họ";tinhtrang.classList.add("do") }
    	else {tinhtrang.innerHTML="Đang vay";tinhtrang.classList.add("vang") }
    	var tinhngay=childData.ngayphaidong.split("-");
    	var ngayphaidong=document.createElement("td");
    	if(tinhtrang.innerHTML=="HN đóng họ") ngayphaidong.innerHTML="Hôm nay";
    	else if(checkhn.getDate()==mai.getDate() && checkhn.getMonth()==mai.getMonth() && checkhn.getFullYear()==mai.getFullYear()) 
    	ngayphaidong.innerHTML="Ngày mai";
    	else
    	ngayphaidong.innerHTML=tinhngay[2]+"/"+tinhngay[1]+"/"+tinhngay[0];
    	var chucnang=document.createElement("td");
    	if(childData.laidadong==childData.batho)
    	{tinhtrang.innerHTML="Hoàn thành";tinhtrang.classList.add("xanhla");ngayphaidong.innerHTML="Hoàn thành"; }

    	    var nutxem=document.createElement("Button");
    	    nutxem.innerHTML="<i class=\"fa fa-info\" aria-hidden=\"true\"></i>";
    	    nutxem.classList.add("xanh");
    	    nutxem.addEventListener("click", function() {
    	    	info.classList.add("hien");
				var datainfo=firebase.child("bh").child(childSnapshot.key());
				datainfo.on('value', (snapshot) => {
					snapshot=snapshot.val();
					document.getElementById("if1").value=snapshot.ten;
					document.getElementById("if2").value=snapshot.cmnd;
					document.getElementById("if3").value=snapshot.diachi;
					document.getElementById("if4").value=snapshot.sdt;
					let format1=parseInt(snapshot.batho);
					document.getElementById("if5").value=format1.toLocaleString();
					let format2=parseInt(snapshot.duakhach);
					document.getElementById("if6").value=format2.toLocaleString();
					if(snapshot.hinhthuc==1)
					document.getElementById("if7").value="Theo ngày";
					document.getElementById("if8").value=snapshot.songay;
					document.getElementById("if9").value=snapshot.songaydong ;
					format=snapshot.ngay.split("-");
					document.getElementById("if10").value=snapshot.ngay;
					document.getElementById("if11").value=snapshot.note;
					document.getElementById("if12").value=snapshot.nhanvien;
					document.getElementById("Update").addEventListener("click", function() {
						let r =confirm("Chắc chắn muốn sửa thông tin ?");
						if(r==true){
							let cong=parseInt(document.getElementById("if9").value);
							let ngayphaidong = new Date(document.getElementById("if10").value);
							ngayphaidong.setDate(ngayphaidong.getDate()+(cong-1));
							ngayphaidong=ngayphaidong.getFullYear()+"-"+(ngayphaidong.getMonth()+1)+"-"+ngayphaidong.getDate();
							datainfo.child("ten").set(document.getElementById("if1").value);
							datainfo.child("cmnd").set(document.getElementById("if2").value);
							datainfo.child("diachi").set(document.getElementById("if3").value);
							datainfo.child("sdt").set(document.getElementById("if4").value);
							datainfo.child("batho").set(document.getElementById("if5").value.split('.').join(''));
							datainfo.child("duakhach").set(document.getElementById("if6").value.split('.').join(''));
							datainfo.child("hinhthuc").set(document.getElementById("if7").value);
							datainfo.child("songay").set(document.getElementById("if8").value);
							datainfo.child("songaydong").set(document.getElementById("if9").value);
							datainfo.child("ngay").set(document.getElementById("if10").value);
							datainfo.child("ngayphaidong").set(ngayphaidong);
							datainfo.child("note").set(document.getElementById("if11").value);
							datainfo.child("nhanvien").set(document.getElementById("if12").value);
							info.classList.remove("hien");
							Load();
						}
					});
				});
			});
    	  var update=firebase.child("bh").child(childSnapshot.key());
    	  var nutdonglai=document.createElement("Button");
    	  nutdonglai.innerHTML="<i class=\"fa fa-money\" aria-hidden=\"true\"></i>";
    	  nutdonglai.classList.add("vang");
    	  nutdonglai.addEventListener("click", function() {
	    	var donglai=childData.laidadong+(childData.batho/childData.songay*childData.songaydong);
	    	var ngaynew= new Date(childData.ngayphaidong);
	    	ngaynew.setDate(ngaynew.getDate()+parseInt(childData.songaydong));
	    	var checkdonglai=0;
	    	ngaynew=ngaynew.getFullYear()+"-"+(ngaynew.getMonth()+1)+"-"+ngaynew.getDate();  	
	    	var r =confirm("Bạn có chắc chắn muốn đóng họ cho hóa đơn này ?");
	    	if(r==true){
    	   	update.child("laidadong").set(donglai);
	    		update.child("ngayphaidong").set(ngaynew);
	    		checkdonglai=1;
	    		Load();
	    	}
	    	if(donglai==childData.batho && checkdonglai==1){
	    		update.child("hoanthanh").set(1);
	    		Load();
	    	}
			});
    	    
    	    var nutgiahan=document.createElement("Button");
    	    nutgiahan.innerHTML="<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>";
    	    nutgiahan.classList.add("xanhla");
    	    nutgiahan.addEventListener("click", function() {
    	    var no=childData.batho-childData.laidadong;
    	    var daoho=childData.duakhach-no;
    	    var r =confirm("Hóa đơn này còn nợ "+no.toLocaleString()+" VND.\nSau khi đảo họ tiền đưa khách sẽ là "+daoho.toLocaleString()+"VNĐ");
	    		if(r==true){
	    		update.child("songay").set(parseInt(childData.songay)+parseInt(r));   		
	    		Load();
	    	}
			});

    	    var nutdonghd=document.createElement("Button");
    	    nutdonghd.innerHTML="<i class=\"fa fa-star\" aria-hidden=\"true\"></i>";
    	    nutdonghd.classList.add("orange");
    	    var batho=parseInt(childData.batho);
    	    nutdonghd.addEventListener("click", function() {
    	    var r =confirm("Bạn có chắc chắn muốn đóng hóa đơn này ?");
    	    if(r==true) {
    	    	update.child("hoanthanh").set(1);
    	    	update.child("laidadong").set(batho);
    	    	Load();}
			});

    	    var nutxoa=document.createElement("Button");
    	    nutxoa.innerHTML="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";	
    	    nutxoa.classList.add("do");
    	    nutxoa.addEventListener("click", function() {
    	    var r =confirm("Bạn có chắc chắn muốn xóa khoản vay này ?");
    	    if(r==true) {firebase.child("bh").child(childSnapshot.key()).remove();
    	    Load();}
			});

    	hang.appendChild(stt);
    	hang.appendChild(ten);
    	hang.appendChild(duakhach);
    	hang.appendChild(tyle);
    	hang.appendChild(thoigian);
    	hang.appendChild(laidadong);
    	hang.appendChild(lai1ngay);
    	hang.appendChild(conphaidong);
    	hang.appendChild(tinhtrang);
    	hang.appendChild(ngayphaidong);
    	if(checkht==0){
    	chucnang.appendChild(nutxem);
    	chucnang.appendChild(nutdonglai);
    	chucnang.appendChild(nutgiahan);
    	chucnang.appendChild(nutdonghd);
    	chucnang.appendChild(nutxoa);
    	}
    	else{chucnang.appendChild(nutxoa);}
    	hang.appendChild(chucnang);
    	data.appendChild(hang);
    }
    });
	if(checktinh==con){
		var data=document.getElementById("data");
    	var hang=document.createElement("tr");
		var cot1=document.createElement("td");
		var cot2=document.createElement("td");
		var cot3=document.createElement("td");
		format=parseInt(tonggiaokhach);
		cot3.innerHTML=tonggiaokhach.toLocaleString()+" VNĐ";
		cot3.classList.add("chudo");
		var cot4=document.createElement("td");
		var cot5=document.createElement("td");
		var cot6=document.createElement("td");
		format=parseInt(tonglaidadong);
		cot6.innerHTML=tonglaidadong.toLocaleString()+" VNĐ";
		var cot7=document.createElement("td");
		format=parseInt(tonglai1ngay);
		cot7.innerHTML=tonglai1ngay.toLocaleString()+" VNĐ";
		var cot8=document.createElement("td");
		format=parseInt(tongconlai);
		cot8.innerHTML=tongconlai.toLocaleString()+" VNĐ";
		var cot9=document.createElement("td");
		var cot10=document.createElement("td");
		var cot11=document.createElement("td");
		cot6.classList.add("chudo");cot7.classList.add("chudo");cot8.classList.add("chudo");
    	hang.appendChild(cot1);
    	hang.appendChild(cot2);
    	hang.appendChild(cot3);
    	hang.appendChild(cot4);
    	hang.appendChild(cot5);
    	hang.appendChild(cot6);
    	hang.appendChild(cot7);
    	hang.appendChild(cot8);
    	hang.appendChild(cot9);
    	hang.appendChild(cot10);
    	hang.appendChild(cot11);
    	data.appendChild(hang);
}
});
}