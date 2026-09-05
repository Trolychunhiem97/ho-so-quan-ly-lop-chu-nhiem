// ======================================
// PHÂN QUYỀN TRỢ LÝ QUẢN LÝ LỚP 97
// TRƯỜNG THCS TRẦN PHÚ
// GVCN: TRẦN SÁNG
// ======================================



// Danh sách tài khoản


const taiKhoan97 = [


{
user:"gvcn",
pass:"123456",
ten:"GVCN Trần Sáng",
quyen:"gvcn"
},



{
user:"loptruong",
pass:"123456",
ten:"Lớp trưởng",
quyen:"loptruong"
},



{
user:"hoc_tap",
pass:"123456",
ten:"Lớp phó học tập",
quyen:"hoc_tap"
},



{
user:"lao_dong",
pass:"123456",
ten:"Lớp phó lao động",
quyen:"lao_dong"
},



{
user:"to_truong",
pass:"123456",
ten:"Tổ trưởng",
quyen:"to_truong"
}



];









// ======================================
// KIỂM TRA ĐĂNG NHẬP
// ======================================


function dangNhapTaiKhoan(user,pass){



let tk=

taiKhoan97.find(

(x)=>

x.user==user && x.pass==pass

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









// ======================================
// LẤY NGƯỜI DÙNG HIỆN TẠI
// ======================================



function layNguoiDung(){



return JSON.parse(

localStorage.getItem(

"nguoiDungDangNhap"

)

)

||null;



}









// ======================================
// KIỂM TRA QUYỀN
// ======================================



function kiemTraQuyen(quyenCan){



let user=

layNguoiDung();





if(!user){


alert(

"Vui lòng đăng nhập!"

);



location.href="dangnhap.html";


return false;


}






if(user.quyen=="gvcn"){


return true;


}






if(user.quyen==quyenCan){


return true;


}







alert(

"⚠ Bạn không có quyền truy cập chức năng này!"

);



return false;



}








// ======================================
// ĐĂNG XUẤT
// ======================================



function dangXuat(){



localStorage.removeItem(

"nguoiDungDangNhap"

);



location.href="dangnhap.html";



}
