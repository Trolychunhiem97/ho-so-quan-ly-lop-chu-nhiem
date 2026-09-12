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
ten:"Tổ trưởng Tổ 1",
quyen:"to_truong",
to:1
},



{
username:"to2",
password:"123456",
ten:"Tổ trưởng Tổ 2",
quyen:"to_truong",
to:2
},



{
username:"to3",
password:"123456",
ten:"Tổ trưởng Tổ 3",
quyen:"to_truong",
to:3
}



];





// ĐĂNG NHẬP

function dangNhapTaiKhoan(user,pass){


let tk=taiKhoan97.find(x=>

x.username===user &&

x.password===pass

);



if(tk){


localStorage.setItem(

"nguoiDungDangNhap",

JSON.stringify(tk)

);


return true;


}



return false;


}






// LẤY NGƯỜI DÙNG

function layNguoiDung(){


return JSON.parse(

localStorage.getItem(

"nguoiDungDangNhap"

)

)||null;


}







// ĐĂNG XUẤT

function dangXuat(){


localStorage.removeItem(

"nguoiDungDangNhap"

);


window.location.href="index.html";


}





// KIỂM TRA

function laGVCN(){

let u=layNguoiDung();

return u && u.quyen==="gvcn";

}



function laToTruong(){

let u=layNguoiDung();

return u && u.quyen==="to_truong";

}





// LẤY TỔ

function laySoToNguoiDung(){


let u=layNguoiDung();


return u ? u.to :0;


}
