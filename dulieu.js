// ======================================
// HỆ THỐNG DỮ LIỆU QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// ======================================



// ===============================
// KHỞI TẠO DỮ LIỆU HỌC SINH
// ===============================


function khoiTaoHocSinh(){


let duLieu =
localStorage.getItem(
"danhSachHocSinh"
);



if(!duLieu){


localStorage.setItem(

"danhSachHocSinh",

JSON.stringify(danhSachHocSinh)

);


}



}







// ===============================
// LẤY DANH SÁCH HỌC SINH
// ===============================


function layDanhSachHocSinh(){


let data = localStorage.getItem(

"danhSachHocSinh"

);



return data ?

JSON.parse(data)

:

[];

}







// ===============================
// LƯU DANH SÁCH HỌC SINH
// ===============================


function luuDanhSachHocSinh(data){



localStorage.setItem(

"danhSachHocSinh",

JSON.stringify(data)

);


}







// ===============================
// ĐỔI TỔ HỌC SINH
// ===============================


function capNhatToHocSinh(id,toMoi){



let ds = layDanhSachHocSinh();



let hs = ds.find(

x=>x.id===id

);



if(hs){


hs.to=toMoi;


}



luuDanhSachHocSinh(ds);


}








// ===============================
// LẤY HỌC SINH THEO TỔ
// ===============================


function layHocSinhTheoTo(to){



let ds = layDanhSachHocSinh();



return ds.filter(

x=>x.to===to

);


}








// ===============================
// ĐIỂM TUẦN
// ===============================



function layDiemTuan(){


let data = localStorage.getItem(

"diemTuan97"

);



return data ?

JSON.parse(data)

:

[];

}







function luuDiemTuan(data){



localStorage.setItem(

"diemTuan97",

JSON.stringify(data)

);


}








// ===============================
// THÊM ĐIỂM TUẦN
// ===============================



function themDiemTuan(obj){



let ds = layDiemTuan();



ds.push(obj);



luuDiemTuan(ds);


}






// ===============================
// NHẬN XÉT
// ===============================


function layNhanXet(){


let data =
localStorage.getItem(

"nhanXet97"

);



return data ?

JSON.parse(data)

:

[];

}







function luuNhanXet(data){



localStorage.setItem(

"nhanXet97",

JSON.stringify(data)

);


}
