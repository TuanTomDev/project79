function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

if(sessionStorage.getItem("dangnhap")==null){
	window.location.href = "index.html";
}
function daysDifference(d0, d1) {
  var diff = new Date(+d1).setHours(12) - new Date(+d0).setHours(12);
  return Math.round(diff/8.64e7);
}
function cham(so){
	let format=so.split('.').join('');
	if(isNaN(format)){
		alert("Vui lòng nhập số tiền !");
		document.getElementById("tien").value="";
	}
	else{
		format=parseInt(format);
		format=format.toLocaleString();
		document.getElementById("tien").value=format;
	}
}
var today=new Date();

var id=today.getTime();
var addvl=document.getElementById("addvl");
var info=document.getElementById("info");
var thutruoc="k";
function add(){
	addvl.classList.add("hien");
}
function out(){
	addvl.classList.remove("hien");
}
function outinfo(){
	info.classList.remove("hien");
}
function check(){
	if(document.getElementById("thutruoc").checked){
		thutruoc="c"
	}
}
var firebase = new Firebase("https://quanly79-5fb81-default-rtdb.firebaseio.com");
var info=document.getElementById("info");
function addHoaDonVayLai() {
	var vaylai=firebase.child("vl").child(id);
	var ten=document.getElementById("ten").value;
	var cmnd=document.getElementById("cmnd").value;
	var sdt=document.getElementById("sdt").value;
	var diachi=document.getElementById("diachi").value;
	var thechap=document.getElementById("thechap").value;
	var tien=document.getElementById("tien").value.split('.').join('');
	var hinhthuc=document.getElementById("hinhthuc").value;
	var songay=document.getElementById("songay").value;
	var ky=document.getElementById("ky").value;
	var lai=document.getElementById("lai").value;
	var ngay=document.getElementById("ngay").value;
	var note=document.getElementById("note").value;
	var nhanvien=document.getElementById("nhanvien").value;
	var cong=parseInt(ky);
	var ngayphaidong = new Date(ngay);
	if(thutruoc=="k"){
	ngayphaidong.setDate(ngayphaidong.getDate()+(cong-1));
	};
	ngayphaidong=ngayphaidong.getFullYear()+"-"+(ngayphaidong.getMonth()+1)+"-"+ngayphaidong.getDate();
  	vaylai.set({
  			ten:ten,
	    	cmnd:cmnd,
	    	sdt:sdt,
	    	diachi:diachi,
	    	thechap:thechap,
	    	tien:tien,
	    	hinhthuc:hinhthuc,
	    	thutruoc:thutruoc,
	    	songay:songay,
	    	ky:ky,
	    	lai:lai,
	    	ngay:ngay,
	    	note:note,
	    	nhanvien:nhanvien,
	    	laidadong:0,
	    	ngaydadong:0,
	    	ngayphaidong:ngayphaidong,
	    	hoanthanh:0

  });
//  	Load();
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

function Load(){
var tongvay=0,tongdadong=0,tongdenhn=0,checktinh=0,con=0;
var phanTuCha=document.getElementById("data");
phanTuCha.innerHTML="<tr><td>Stt</td><td>Tên</td><td>Tài sản</td><td>VNĐ</td><td>Ngày Vay</td><td>Lãi đã đóng</td><td>Lãi đến hôm nay</td><td>Ngày phải đóng lãi</td><td>Tình trạng</td><td>Chức năng</td></tr>"
var firebase = new Firebase("https://quanly79-5fb81-default-rtdb.firebaseio.com");
var today=new Date();
var id=today.getTime();
var data=firebase.child("vl")
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
    var checkxl1= new Date(childData.ngayphaidong);
    if(document.getElementById("hoanthanh").checked==true) checkht=1;
    if(document.getElementById("xuly").checked==true){
    	checkxl=1;
    	if(daysDifference(today,checkxl1)<=0)
    		checkxl=0;
    }
    var search=document.getElementById("search").value;
    if(childData.hoanthanh==checkht && removeVietnameseTones(childData.ten).indexOf(removeVietnameseTones(search))!=-1 && checkxl==0){
    	s++;
    	var hang=document.createElement("tr");
    	var stt=document.createElement("td");
    	stt.innerHTML=s;
    	var ten=document.createElement("td");
    	ten.innerHTML=childData.ten;
    	var taisan=document.createElement("td");
    	taisan.innerHTML=childData.thechap;
    	var tien=document.createElement("td");
    	var format=parseInt(childData.tien);
    	tongvay+=format;
    	tien.innerHTML=format.toLocaleString()+" ("+childData.lai+"k/1 triệu)";
    	var ngayvay=document.createElement("td");
    	var ngay=childData.ngay.split("-");
    	ngayvay.innerHTML=ngay[2]+"/"+ngay[1]+"/"+ngay[0]+" ("+childData.songay+" ngày)";
    	var laidadong=document.createElement("td");
    	var format=parseInt(childData.laidadong);
    	tongdadong+=format;
    	laidadong.innerHTML=format.toLocaleString()+" ("+childData.ngaydadong+" ngày)";
//* 
    	var laihn=document.createElement("td");
    	ngay=new Date(childData.ngayphaidong);
    	ngay.setDate(ngay.getDate()-parseInt(childData.ky));
    	var tinhlai= new Date(today-1);
    	tinhlai=daysDifference(ngay,tinhlai)
    	if(childData.ngaydadong-childData.songay==0 || childData.hoanthanh==1){laihn.innerHTML="Hoàn thành"}
    	else if(today<ngay) laihn.innerHTML="0 (0 ngày)";
    	else{
    		format=parseInt(childData.lai*tinhlai*1000*(childData.tien/1000000));
    		laihn.innerHTML=format.toLocaleString()+" ("+tinhlai+"ngày)";
    	}
    	var ngayphaidong=document.createElement("td");
    	var ngayphaidong1=new Date(childData.ngayphaidong);
    	ngayphaidong1=ngayphaidong1.getFullYear()+"-"+(ngayphaidong1.getMonth()+1)+"-"+ngayphaidong1.getDate();
    	if(daysDifference(today,checkxl1)==0)
    	{	ngayphaidong.innerHTML="Hôm nay"}
    	else if(daysDifference(today,checkxl1)==1)
    	{	ngayphaidong.innerHTML="Ngày mai"}
    	else {ngayphaidong1=ngayphaidong1.split("-");ngayphaidong.innerHTML=ngayphaidong1[2]+"/"+ngayphaidong1[1]+"/"+ngayphaidong1[0];}
    	if(childData.hoanthanh==1) ngayphaidong.innerHTML="Hoàn thành";
    	var tinhtrang=document.createElement("td");
    	ngaytinhtrang=new Date(childData.ngayphaidong);
    	today=new Date();
    	if(childData.ngaydadong==childData.songay && ngayphaidong.innerHTML=="Hôm nay")
    	{tinhtrang.innerHTML="Hôm nay đóng gốc";tinhtrang.classList.add("xanh");}
    	else if(ngayphaidong.innerHTML=="Hôm nay") {tinhtrang.innerHTML="HN đóng lãi";tinhtrang.classList.add("xanh") }	
    	else if(childData.hoanthanh==1)
    	{tinhtrang.innerHTML="Hoàn thành";tinhtrang.classList.add("xanhla");}
    	else if(daysDifference(today,checkxl1)<0) {tinhtrang.innerHTML="Quá hạn";tinhtrang.classList.add("do") }

    	else {tinhtrang.innerHTML="Đang vay";tinhtrang.classList.add("vang") }
    	if(laihn.innerHTML!="Hoàn thành")
    	tongdenhn+=parseInt(laihn.innerHTML.split('.').join(''));
    	var chucnang=document.createElement("td");

    	    var nutxem=document.createElement("Button");
    	    nutxem.innerHTML="<i class=\"fa fa-info\" aria-hidden=\"true\"></i>";
    	    nutxem.classList.add("xanh");
    	    nutxem.addEventListener("click", function() {
    	    	info.classList.add("hien");
				var datainfo=firebase.child("vl").child(childSnapshot.key());
				datainfo.on('value', (snapshot) => {
					snapshot=snapshot.val();
					document.getElementById("if1").value=snapshot.ten;
					document.getElementById("if2").value=snapshot.cmnd;
					document.getElementById("if3").value=snapshot.diachi;
					document.getElementById("if4").value=snapshot.sdt;
					document.getElementById("if5").value=snapshot.thechap;
					var format=parseInt(snapshot.tien);
					document.getElementById("if6").value=format.toLocaleString()+" VNĐ";
					document.getElementById("if13").value="Lãi ngày (k/triệu)";
					document.getElementById("if7").value=snapshot.songay;
					document.getElementById("if8").value=snapshot.ky;
					document.getElementById("if9").value=snapshot.lai;
					document.getElementById("if10").value=snapshot.ngay;
					document.getElementById("if11").value=snapshot.note;
					document.getElementById("if12").value=snapshot.nhanvien;
					document.getElementById("if14").value=snapshot.thutruoc;
					document.getElementById("Update").addEventListener("click", function() {
						let r =confirm("Chắc chắn muốn sửa thông tin ?");
						if(r==true){
							let cong=parseInt(document.getElementById("if8").value);
							let ngayphaidong = new Date(document.getElementById("if10").value);
							ngayphaidong.setDate(ngayphaidong.getDate()+(cong-1));
							ngayphaidong=ngayphaidong.getFullYear()+"-"+(ngayphaidong.getMonth()+1)+"-"+ngayphaidong.getDate();
							datainfo.child("ten").set(document.getElementById("if1").value);
							datainfo.child("cmnd").set(document.getElementById("if2").value);
							datainfo.child("diachi").set(document.getElementById("if3").value);
							datainfo.child("sdt").set(document.getElementById("if4").value);
							datainfo.child("thechap").set(document.getElementById("if5").value);
							datainfo.child("tien").set(format);
							datainfo.child("songay").set(document.getElementById("if7").value);
							datainfo.child("ky").set(document.getElementById("if8").value);
							datainfo.child("lai").set(document.getElementById("if9").value);
							datainfo.child("ngay").set(document.getElementById("if10").value);
							datainfo.child("ngayphaidong").set(ngayphaidong);
							datainfo.child("note").set(document.getElementById("if11").value);
							datainfo.child("nhanvien").set(document.getElementById("if12").value);
							datainfo.child("hinhthuc").set(document.getElementById("if13").value);
							datainfo.child("thutruoc").set(document.getElementById("if14").value);
							info.classList.remove("hien");
							Load();
						}
					});
				});
			});
    	    var update=firebase.child("vl").child(childSnapshot.key());
    	    var nutdonglai=document.createElement("Button");
    	    nutdonglai.innerHTML="<i class=\"fa fa-money\" aria-hidden=\"true\"></i>";
    	    nutdonglai.classList.add("vang");
    	    if(tinhtrang.innerHTML=="Đóng gốc"){
    	    	nutdonglai.disabled = true;
    	    }else{
	    	  nutdonglai.addEventListener("click", function() {
		    	var donglai=childData.laidadong+(childData.ky*childData.lai*1000*(childData.tien/1000000));
		    	var ngaynew= new Date(childData.ngayphaidong);
		    	ngaynew.setDate(ngaynew.getDate()+parseInt(childData.ky));
		    	ngaynew=ngaynew.getFullYear()+"-"+(ngaynew.getMonth()+1)+"-"+ngaynew.getDate();
		    	var r =confirm("Bạn có chắc chắn muốn đóng lãi cho hóa đơn này ?");
		    	if(r==true){
		    		if(childData.thutruoc=="k" && childData.laidadong/(childData.lai*1000*(childData.tien/1000000))==(childData.songay-childData.ky))
		    		{
		    			update.child("laidadong").set(donglai); 
		    			update.child("ngaydadong").set(parseInt(childData.ngaydadong)+parseInt(childData.ky)); 		
		    			Load();
		    		}
		    		else{
			    		update.child("ngayphaidong").set(ngaynew);
			    		update.child("laidadong").set(donglai);
			    		update.child("ngaydadong").set(parseInt(childData.ngaydadong)+parseInt(childData.ky));	
			    		Load();		    			
		    		}
		    	}
				});
    		}
    	    var nutdonggoc=document.createElement("Button");
    	    nutdonggoc.innerHTML="<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>";
    	    nutdonggoc.classList.add("xanhla");
    	    nutdonggoc.addEventListener("click", function() {
    	    var r =confirm("Bạn có chắc chắn muốn đóng gốc và hoàn thành hóa đơn này ?");
	    		if(r==true){
    	   		update.child("hoanthanh").set(1);
	    		Load();
	    	}
			});
    	    var nutgiahan=document.createElement("Button");
    	    nutgiahan.innerHTML="<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>";
    	    nutgiahan.classList.add("xanhla");
    	    nutgiahan.addEventListener("click", function() {
    	    var r =prompt("Hóa đơn này có kỳ lãi là "+childData.ky+" ngày.\nNhập số ngày muốn gia hạn thêm cho hóa đơn này",childData.ky);
	    	if(r!=null){
	    		update.child("songay").set(parseInt(childData.songay)+parseInt(r));   		
	    		Load();
	    	}
			});

    	    var dongbotgoc=document.createElement("Button");
    	    dongbotgoc.innerHTML="<i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>";
    	    dongbotgoc.classList.add("nau");
    	    dongbotgoc.addEventListener("click", function() {
    	    var r =prompt("Hóa đơn này có gốc là "+parseInt(childData.tien).toLocaleString()+" VNĐ.\nNhập số tiền muốn đóng bớt cho hóa đơn này:",);
    	    r.oninput="cham(this.value)";
	    	if(r!=null){
	    		update.child("tien").set(parseInt(childData.tien)-r);   		
	    		Load();
	    	}
			});

			var nutdonghd=document.createElement("Button");
    	    nutdonghd.innerHTML="<i class=\"fa fa-star\" aria-hidden=\"true\"></i>";
    	    nutdonghd.classList.add("orange");
    	    var tonglai=childData.lai*1000*(childData.tien/1000000)*childData.songay;
    	    nutdonghd.addEventListener("click", function() {
    	    var r =confirm("Bạn có chắc chắn muốn đóng hóa đơn này ?");
    	    if(r==true) {
    	    	update.child("laidadong").set(parseInt(tonglai));
    	    	update.child("hoanthanh").set(1); 
    	    Load();}
			});
    	    var nutxoa=document.createElement("Button");
    	    nutxoa.innerHTML="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";
    	    nutxoa.classList.add("do");
    	    nutxoa.addEventListener("click", function() {
    	    var r =confirm("Bạn có chắc chắn muốn xóa khoản vay này ?");
    	    if(r==true) {firebase.child("vl").child(childSnapshot.key()).remove();
    	    Load();}
			});

    	hang.appendChild(stt);
    	hang.appendChild(ten);
    	hang.appendChild(taisan);
    	hang.appendChild(tien);
    	hang.appendChild(ngayvay);
    	hang.appendChild(laidadong);
    	hang.appendChild(laihn);
    	hang.appendChild(ngayphaidong);
    	hang.appendChild(tinhtrang);
    	if(document.getElementById("hoanthanh").checked!=true){
    	chucnang.appendChild(nutxem);
    	chucnang.appendChild(nutdonglai);
    	if(laihn.innerHTML=="Hoàn thành")
    		{chucnang.appendChild(nutdonggoc);nutdonglai.disabled=true;}
    	chucnang.appendChild(nutgiahan);
    	chucnang.appendChild(dongbotgoc);
    	chucnang.appendChild(nutdonghd);
    	}
    	chucnang.appendChild(nutxoa);
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
		var cot4=document.createElement("td");
		var cot5=document.createElement("td");
		var cot6=document.createElement("td");
		var cot7=document.createElement("td");
		var cot8=document.createElement("td");
		var cot9=document.createElement("td");
		var cot10=document.createElement("td");
		format=parseInt(tongvay);
		cot4.innerHTML=format.toLocaleString()+" VNĐ"
		format=parseInt(tongdadong);
		cot6.innerHTML=format.toLocaleString()+" VNĐ"
		format=parseInt(tongdenhn);
		if(document.getElementById("hoanthanh").checked!=true)
		cot7.innerHTML=format.toLocaleString()+" VNĐ"
		cot4.classList.add("chudo");cot6.classList.add("chudo");cot7.classList.add("chudo");
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
    	data.appendChild(hang);
}
});
};




