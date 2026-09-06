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


