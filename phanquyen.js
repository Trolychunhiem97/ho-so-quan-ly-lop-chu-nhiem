// =================================================
// PHÂN QUYỀN HỆ THỐNG QUẢN LÝ LỚP 97
// TRƯỜNG THCS TRẦN PHÚ
// GVCN: TRẦN SÁNG
// =================================================



// Lấy người dùng đang đăng nhập

function layNguoiDung(){


let user =

localStorage.getItem(

"nguoiDungDangNhap"

);



if(!user){

return null;

}



return JSON.parse(user);



}





// Kiểm tra quyền

function coQuyen(quyenCanKiemTra){



let user=

layNguoiDung();



if(!user){

return false;

}





// Admin được toàn quyền

if(user.quyen=="admin"){

return true;

}





// Kiểm tra quyền cụ thể

return user.quyen.includes(

quyenCanKiemTra

);



}







// Hiển thị thông tin người dùng

function hienThiNguoiDung(){



let user=

layNguoiDung();



let khuVuc=

document.getElementById(

"nguoiDung"

);



if(khuVuc && user){


khuVuc.innerHTML=

"👤 Xin chào: <b>"

+

user.ten

+

"</b>";



}

}





// Ẩn hiện menu theo quyền

function apDungPhanQuyen(){



let user=

layNguoiDung();



if(!user){

return;

}






// Các nhóm chức năng



let adminOnly=[


"menuBackup",

"menuTongHop",

"menuBaoCao",

"menuAI"


];





let thiDua=[


"menuThiDua",

"menuThiDuaThang"


];






let hocTap=[


"menuHocTap"


];






let laoDong=[


"menuLaoDong"


];






let toTruong=[


"menuToTruong"


];







// Nếu không phải admin

if(user.quyen!="admin"){



adminOnly.forEach(id=>{


let el=

document.getElementById(id);



if(el){

el.style.display="none";

}


});



}






// Quyền thi đua

if(

!coQuyen("thidua")

&&

user.quyen!="admin"

){


thiDua.forEach(id=>{


let el=

document.getElementById(id);



if(el){

el.style.display="none";

}


});



}








// Quyền học tập

if(

!coQuyen("hoc_tap")

&&

user.quyen!="admin"

){


hocTap.forEach(id=>{


let el=

document.getElementById(id);



if(el){

el.style.display="none";

}


});


}








// Quyền lao động

if(

!coQuyen("lao_dong")

&&

user.quyen!="admin"

){


laoDong.forEach(id=>{


let el=

document.getElementById(id);



if(el){

el.style.display="none";

}


});


}








// Quyền tổ trưởng

if(

!coQuyen("totruong")

&&

user.quyen!="admin"

){


toTruong.forEach(id=>{


let el=

document.getElementById(id);



if(el){

el.style.display="none";

}


});


}



}







// Đăng xuất

function dangXuat(){



if(

confirm(

"Đăng xuất khỏi hệ thống?"

)

){



localStorage.removeItem(

"nguoiDungDangNhap"

);



location.href="dangnhap.html";



}


}





// Chạy khi mở trang

window.addEventListener(

"load",

function(){


hienThiNguoiDung();


apDungPhanQuyen();


}

);
