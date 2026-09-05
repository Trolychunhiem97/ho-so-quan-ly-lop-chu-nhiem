// =================================================
// DỮ LIỆU GỐC HỌC SINH LỚP 97
// TRỢ LÝ QUẢN LÝ LỚP
// GVCN TRẦN SÁNG
// =================================================


// DANH SÁCH HỌC SINH LỚP 97

const danhSachHocSinh = [

"Vũ Ngọc Ánh",
"Trần Thị Ngọc Diệp",
"Nguyễn Anh Duy",
"Lý Gia Huy",
"Hứa Bảo Khang",
"Nguyễn Hoàng Khánh Linh",
"Nguyễn Hoàng Nhật Linh",
"Trương Đỗ Thục Linh",
"Lê Quốc Long",
"Nguyễn Bùi Hoàng Long",
"Lâm Thị Trúc Ly",
"Trần Lê Nhật Minh",
"Vũ Thị Trà My",
"Đỗ Phạm Hoàng Nam",
"Bùi Thị Kim Ngân",
"Hoàng Nguyễn Tuấn Ngọc",
"Lô Thị Minh Nhi",
"Nguyễn Thị Quỳnh Như",
"Phạm Hoàng Thiên Phú",
"Ngô Như Quỳnh",
"Vũ Ngọc Như Quỳnh",
"Trần Thị Thủy Tiên",
"Hoàng Duy Thành",
"Phạm Trường Thành",
"Hoàng Thị Anh Thư",
"Vũ Ngọc Anh Thư",
"Trần Hoàng Bảo Trân",
"Lô Thanh Trúc",
"Nguyễn Thị Kiều Vi",
"Nguyễn Thanh Vũ",
"Hoàng Thị Thảo Vy",
"Lâm Huỳnh Thảo Vy",
"Nguyễn Ngô Hoàng Yến"

];





// =================================================
// TÊN KHO DỮ LIỆU
// =================================================


const KEY_HOSO = "hoSoHocSinh97";






// =================================================
// KHỞI TẠO HỒ SƠ 33 HỌC SINH
// =================================================


function khoiTaoHoSoHocSinh(){


let daCo = localStorage.getItem(KEY_HOSO);



if(daCo){

return JSON.parse(daCo);

}





let danhSach = danhSachHocSinh.map(

(ten,index)=>{


return {

stt:index+1,

hoTen:ten,

ngaySinh:"",

gioiTinh:"",

phuHuynh:"",

soDT:"",

diaChi:"",

hoanCanh:"",

uuDiem:"",

hanChe:"",

diemThiDua:100,

xepLoai:"",

lichSu:[]

};


}

);





localStorage.setItem(

KEY_HOSO,

JSON.stringify(danhSach)

);



return danhSach;


}








// =================================================
// LẤY DANH SÁCH HỒ SƠ
// =================================================


function layHoSoHocSinh(){


return khoiTaoHoSoHocSinh();


}







// =================================================
// LƯU HỒ SƠ
// =================================================


function luuHoSoHocSinh(ds){


localStorage.setItem(

KEY_HOSO,

JSON.stringify(ds)

);


}







// =================================================
// TÌM HỌC SINH
// =================================================


function timHocSinh(ten){


let ds = layHoSoHocSinh();



return ds.find(

hs=>hs.hoTen==ten

);


}







// =================================================
// CẬP NHẬT HỌC SINH
// =================================================


function capNhatHocSinh(

ten,

duLieu

){



let ds = layHoSoHocSinh();



let hs = ds.find(

x=>x.hoTen==ten

);



if(hs){


Object.assign(

hs,

duLieu

);



luuHoSoHocSinh(ds);



return true;


}



return false;


}







// =================================================
// THÊM LỊCH SỬ HỌC SINH
// =================================================


function themLichSu(

ten,

loai,

noiDung

){



let hs = timHocSinh(ten);



if(!hs)

return false;





hs.lichSu.push({

ngay:

new Date()

.toLocaleDateString(),


loai:loai,


noiDung:noiDung


});





luuHoSoHocSinh(

layHoSoHocSinh()

);



return true;


}







// =================================================
// LẤY DANH SÁCH TÊN HỌC SINH
// =================================================


function layDanhSachTen(){


return danhSachHocSinh;


}







// =================================================
// SỐ LƯỢNG HỌC SINH
// =================================================


function soLuongHocSinh(){


return danhSachHocSinh.length;


}







// =================================================
// RESET HỒ SƠ (CHỈ DÙNG KHI CẦN)
// =================================================


function resetHoSoHocSinh(){


localStorage.removeItem(KEY_HOSO);


khoiTaoHoSoHocSinh();


}
