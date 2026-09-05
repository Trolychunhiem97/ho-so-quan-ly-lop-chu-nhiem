// =================================
// PHÂN QUYỀN QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// =================================


const taiKhoan97 = [

{
    username:"gvcn",
    password:"123456",
    ten:"GVCN Trần Sáng",
    quyen:"gvcn"
},


{
    username:"loptruong",
    password:"123456",
    ten:"Lớp trưởng",
    quyen:"loptruong"
},


{
    username:"hoctap",
    password:"123456",
    ten:"Lớp phó học tập",
    quyen:"hoc_tap"
},


{
    username:"laodong",
    password:"123456",
    ten:"Lớp phó lao động",
    quyen:"lao_dong"
},


{
    username:"totruong",
    password:"123456",
    ten:"Tổ trưởng",
    quyen:"to_truong"
}


];




// ==============================
// ĐĂNG NHẬP
// ==============================


function dangNhapTaiKhoan(user,pass){


let taiKhoan = taiKhoan97.find(

(x)=>

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





// ==============================
// LẤY NGƯỜI DÙNG
// ==============================


function layNguoiDung(){


let user=

localStorage.getItem(

"nguoiDungDangNhap"

);



if(user){

return JSON.parse(user);

}



return null;


}




// ==============================
// ĐĂNG XUẤT
// ==============================


function dangXuat(){


localStorage.removeItem(

"nguoiDungDangNhap"

);


location.href="dangnhap.html";


}
