// ======================================
// PHÂN QUYỀN QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// ======================================


const taiKhoan97 = [



// =================
// GIÁO VIÊN CHỦ NHIỆM
// =================

{
    username:"gvcn",
    password:"123456",
    ten:"GVCN Trần Sáng",
    quyen:"gvcn",
    to:0
},





// =================
// LỚP TRƯỞNG
// =================

{
    username:"loptruong",
    password:"123456",
    ten:"Lớp trưởng",
    quyen:"loptruong",
    to:0
},





// =================
// LỚP PHÓ HỌC TẬP
// =================

{
    username:"hoctap",
    password:"123456",
    ten:"Lớp phó học tập",
    quyen:"hoc_tap",
    to:0
},





// =================
// LỚP PHÓ LAO ĐỘNG
// =================

{
    username:"laodong",
    password:"123456",
    ten:"Lớp phó lao động",
    quyen:"lao_dong",
    to:0
},






// =================
// TỔ TRƯỞNG
// =================


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






// ======================================
// ĐĂNG NHẬP
// ======================================


function dangNhapTaiKhoan(user,pass){



let taiKhoan = taiKhoan97.find(

x =>

x.username===user

&&

x.password===pass

);



if(taiKhoan){



localStorage.setItem(

"nguoiDungDangNhap",

JSON.stringify(taiKhoan)

);



return true;


}



return false;



}







// ======================================
// LẤY NGƯỜI DÙNG HIỆN TẠI
// ======================================


function layNguoiDung(){



let user = localStorage.getItem(

"nguoiDungDangNhap"

);



if(user){


return JSON.parse(user);


}


return null;


}







// ======================================
// ĐĂNG XUẤT
// ======================================


function dangXuat(){



localStorage.removeItem(

"nguoiDungDangNhap"

);



window.location.href="index.html";


}







// ======================================
// KIỂM TRA QUYỀN
// ======================================


function laGVCN(){


let user=layNguoiDung();


return user && user.quyen==="gvcn";


}





function laToTruong(){


let user=layNguoiDung();


return user && user.quyen==="to_truong";


}





function laySoToNguoiDung(){


let user=layNguoiDung();


if(user){


return user.to;


}


return 0;


}
