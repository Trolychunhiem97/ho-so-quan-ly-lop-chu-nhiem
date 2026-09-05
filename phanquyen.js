// =====================================
// PHÂN QUYỀN QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// =====================================



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




// =====================================
// HÀM ĐĂNG NHẬP
// =====================================


function dangNhapTaiKhoan(username,password){



let user = taiKhoan97.find(

(item)=>

item.username===username
&&
item.password===password

);



if(user){


localStorage.setItem(

"nguoiDungDangNhap",

JSON.stringify(user)

);


return true;


}



return false;


}






// =====================================
// LẤY NGƯỜI ĐANG ĐĂNG NHẬP
// =====================================


function layNguoiDung(){


let data = localStorage.getItem(

"nguoiDungDangNhap"

);



if(data){


return JSON.parse(data);


}


return null;


}







// =====================================
// KIỂM TRA QUYỀN GVCN
// =====================================


function laGVCN(){


let user = layNguoiDung();



return user && user.quyen==="gvcn";


}






// =====================================
// KIỂM TRA QUYỀN
// =====================================


function coQuyen(quyen){


let user = layNguoiDung();



return user && user.quyen===quyen;


}







// =====================================
// ĐĂNG XUẤT
// =====================================


function dangXuat(){



localStorage.removeItem(

"nguoiDungDangNhap"

);



window.location.href="index.html";


}
