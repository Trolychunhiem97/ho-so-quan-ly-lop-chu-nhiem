// ======================================
// PHÂN QUYỀN QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// ======================================


const taiKhoan97=[


{
username:"gvcn",
password:"123456",
ten:"GVCN Trần Sáng",
quyen:"gvcn",
to:0
},


{
username:"loptruong",
password:"123456",
ten:"Lớp trưởng",
quyen:"loptruong",
to:0
},


{
username:"hoctap",
password:"123456",
ten:"Lớp phó học tập",
quyen:"hoc_tap",
to:0
},


{
username:"laodong",
password:"123456",
ten:"Lớp phó lao động",
quyen:"lao_dong",
to:0
},


{
username:"to1",
password:"123456",
ten:"Tổ trưởng tổ 1",
quyen:"to_truong",
to:1
},


{
username:"to2",
password:"123456",
ten:"Tổ trưởng tổ 2",
quyen:"to_truong",
to:2
},


{
username:"to3",
password:"123456",
ten:"Tổ trưởng tổ 3",
quyen:"to_truong",
to:3
}



];





// ==========================
// ĐĂNG NHẬP
// ==========================


function dangNhapTaiKhoan(user,pass){


let tk=taiKhoan97.find(x=>

x.username==user

&&

x.password==pass

);



if(tk){


localStorage.setItem(
"nguoiDungDangNhap",
JSON.stringify(tk)
);



chuyenTrangTheoQuyen(tk);


return true;


}


return false;


}







// ==========================
// CHUYỂN TRANG
// ==========================


function chuyenTrangTheoQuyen(tk){



switch(tk.quyen){



case "gvcn":

window.location.href="index.html";

break;



case "to_truong":

window.location.href="totruong.html";

break;



case "hoc_tap":

window.location.href="hoctap.html";

break;



case "lao_dong":

window.location.href="laodong.html";

break;



default:

window.location.href="index.html";


}



}






// ==========================
// LẤY NGƯỜI ĐANG ĐĂNG NHẬP
// ==========================


function layNguoiDung(){


let data=

localStorage.getItem(
"nguoiDungDangNhap"
);



return data?

JSON.parse(data)

:

null;


}






// ==========================
// ĐĂNG XUẤT
// ==========================


function dangXuat(){


localStorage.removeItem(
"nguoiDungDangNhap"
);


window.location.href="login.html";


}





// ==========================
// KIỂM TRA QUYỀN
// ==========================


function laySoToNguoiDung(){


let u=layNguoiDung();


return u?

u.to

:

0;


}
