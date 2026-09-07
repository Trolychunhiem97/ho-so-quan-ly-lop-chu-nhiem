// ======================================
// DỮ LIỆU QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// ======================================



// ================================
// KHỞI TẠO HỌC SINH
// ================================


function khoiTaoDuLieu(){


let ds =
localStorage.getItem(
"danhSachHocSinh"
);



if(!ds){


localStorage.setItem(

"danhSachHocSinh",

JSON.stringify(danhSachHocSinh)

);


}



}





// ================================
// HỌC SINH
// ================================


function layDanhSachHocSinh(){


return JSON.parse(

localStorage.getItem(
"danhSachHocSinh"
)

)||[];


}





function luuDanhSachHocSinh(ds){


localStorage.setItem(

"danhSachHocSinh",

JSON.stringify(ds)

);


}







// ================================
// ĐỔI TỔ + LƯU LỊCH SỬ
// ================================


function doiToHocSinh(id,toMoi){



let ds =
layDanhSachHocSinh();



let hs =
ds.find(

x=>x.id===id

);




if(hs){



let toCu = hs.to;



hs.to = toMoi;



luuDanhSachHocSinh(ds);




let lichSu =
layLichSuTo();



lichSu.push({

hocSinhId:id,

toCu:toCu,

toMoi:toMoi,

ngay:new Date()
.toLocaleDateString()

});



luuLichSuTo(lichSu);



}



}







// ================================
// LỊCH SỬ TỔ
// ================================


function layLichSuTo(){


return JSON.parse(

localStorage.getItem(
"lichSuTo97"
)

)||[];


}



function luuLichSuTo(data){


localStorage.setItem(

"lichSuTo97",

JSON.stringify(data)

);


}






// ================================
// LẤY HỌC SINH THEO TỔ
// ================================


function layHocSinhTheoTo(to){



let ds =
layDanhSachHocSinh();



return ds.filter(

hs=>hs.to===to

);


}








// ================================
// ĐIỂM TUẦN
// ================================


function layDiemTuan(){


return JSON.parse(

localStorage.getItem(
"diemTuan97"
)

)||[];


}





function luuDiemTuan(ds){


localStorage.setItem(

"diemTuan97",

JSON.stringify(ds)

);


}





function themDiemTuan(obj){



let ds =
layDiemTuan();



ds.push(obj);



luuDiemTuan(ds);



}








// ================================
// KHÓA TUẦN
// ================================


function layTrangThaiTuan(){


return JSON.parse(

localStorage.getItem(
"trangThaiTuan97"
)

)||[];


}




function luuTrangThaiTuan(data){


localStorage.setItem(

"trangThaiTuan97",

JSON.stringify(data)

);


}
// ==================================
// KIỂM TRA ĐIỂM ĐÃ NHẬP
// ==================================


function kiemTraDiemDaCo(
hocSinhId,
tuan
){


let ds = layDiemTuan();


return ds.find(

x=>

x.hocSinhId===hocSinhId
&&
x.tuan===tuan

);


}







// ==================================
// CẬP NHẬT ĐIỂM
// ==================================


function capNhatDiemTuan(obj){


let ds = layDiemTuan();



let cu = ds.find(

x=>

x.hocSinhId===obj.hocSinhId
&&
x.tuan===obj.tuan

);



if(cu){


cu.diem=obj.diem;

cu.nhanXet=obj.nhanXet;


}else{


ds.push(obj);


}



luuDiemTuan(ds);



}
// ======================================
// TẠO MÃ ĐIỂM DUY NHẤT
// ======================================


function taoMaDiem(hocSinhId, tuan){


return hocSinhId + "_" + tuan;


}




// ======================================
// KIỂM TRA ĐIỂM ĐÃ TỒN TẠI CHƯA
// ======================================


function timDiemHocSinh(hocSinhId,tuan){


let ds = layDiemTuan();



let ma = taoMaDiem(
hocSinhId,
tuan
);



return ds.find(

x=>x.maDiem===ma

);


}





// ======================================
// LƯU HOẶC CẬP NHẬT ĐIỂM
// ======================================


function luuHoacCapNhatDiem(obj){



let ds = layDiemTuan();



let ma = taoMaDiem(

obj.hocSinhId,

obj.tuan

);




let cu = ds.find(

x=>x.maDiem===ma

);




// Nếu đã có thì cập nhật

if(cu){


cu.diem=obj.diem;

cu.nhanXet=obj.nhanXet;

cu.nguoiNhap=obj.nguoiNhap;


}


// Nếu chưa có thì thêm mới

else{


obj.maDiem=ma;


ds.push(obj);


}




luuDiemTuan(ds);



}

