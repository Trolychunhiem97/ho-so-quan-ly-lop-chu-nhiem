// =====================================
// DANH SÁCH HỌC SINH LỚP 97
// TRƯỜNG THCS TRẦN PHÚ
// GVCN: TRẦN SÁNG
// =====================================


// 0 = Chưa phân tổ
// 1 = Tổ 1
// 2 = Tổ 2
// 3 = Tổ 3


const danhSachHocSinh = [


{
    id:1,
    hoTen:"Vũ Ngọc Ánh",
    to:0
},


{
    id:2,
    hoTen:"Trần Thị Ngọc Diệp",
    to:0
},


{
    id:3,
    hoTen:"Nguyễn Anh Duy",
    to:0
},


{
    id:4,
    hoTen:"Lý Gia Huy",
    to:0
},


{
    id:5,
    hoTen:"Hứa Bảo Khang",
    to:0
},


{
    id:6,
    hoTen:"Nguyễn Hoàng Khánh Linh",
    to:0
},


{
    id:7,
    hoTen:"Nguyễn Hoàng Nhật Linh",
    to:0
},


{
    id:8,
    hoTen:"Trương Đỗ Thục Linh",
    to:0
},


{
    id:9,
    hoTen:"Lê Quốc Long",
    to:0
},


{
    id:10,
    hoTen:"Nguyễn Bùi Hoàng Long",
    to:0
},


{
    id:11,
    hoTen:"Lâm Thị Trúc Ly",
    to:0
},


{
    id:12,
    hoTen:"Trần Lê Nhật Minh",
    to:0
},


{
    id:13,
    hoTen:"Vũ Thị Trà My",
    to:0
},


{
    id:14,
    hoTen:"Đỗ Phạm Hoàng Nam",
    to:0
},


{
    id:15,
    hoTen:"Bùi Thị Kim Ngân",
    to:0
},


{
    id:16,
    hoTen:"Hoàng Nguyễn Tuấn Ngọc",
    to:0
},


{
    id:17,
    hoTen:"Lô Thị Minh Nhi",
    to:0
},


{
    id:18,
    hoTen:"Nguyễn Thị Quỳnh Như",
    to:0
},


{
    id:19,
    hoTen:"Phạm Hoàng Thiên Phú",
    to:0
},


{
    id:20,
    hoTen:"Ngô Như Quỳnh",
    to:0
},


{
    id:21,
    hoTen:"Vũ Ngọc Như Quỳnh",
    to:0
},


{
    id:22,
    hoTen:"Trần Thị Thủy Tiên",
    to:0
},


{
    id:23,
    hoTen:"Hoàng Duy Thành",
    to:0
},


{
    id:24,
    hoTen:"Phạm Trường Thành",
    to:0
},


{
    id:25,
    hoTen:"Hoàng Thị Anh Thư",
    to:0
},


{
    id:26,
    hoTen:"Vũ Ngọc Anh Thư",
    to:0
},


{
    id:27,
    hoTen:"Trần Hoàng Bảo Trân",
    to:0
},


{
    id:28,
    hoTen:"Lô Thanh Trúc",
    to:0
},


{
    id:29,
    hoTen:"Nguyễn Thị Kiều Vi",
    to:0
},


{
    id:30,
    hoTen:"Nguyễn Thanh Vũ",
    to:0
},


{
    id:31,
    hoTen:"Hoàng Thị Thảo Vy",
    to:0
},


{
    id:32,
    hoTen:"Lâm Huỳnh Thảo Vy",
    to:0
},


{
    id:33,
    hoTen:"Nguyễn Ngô Hoàng Yến",
    to:0
}



];




// ===============================
// LẤY DANH SÁCH THEO TỔ
// ===============================


function layHocSinhTheoTo(soTo){


return danhSachHocSinh.filter(

hs => hs.to === soTo

);


}



// ===============================
// ĐỔI TỔ HỌC SINH
// (Dành cho GVCN)
// ===============================


function doiToHocSinh(id,soTo){


let hs = danhSachHocSinh.find(

x=>x.id===id

);



if(hs){


hs.to = soTo;


}


}
