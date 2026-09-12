// ==========================================
// DỮ LIỆU QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// ==========================================


// ================================
// KHỞI TẠO HỌC SINH
// ================================

function khoiTaoHocSinh(){

    let ds = localStorage.getItem("danhSachHocSinh");


    if(!ds){

        if(typeof danhSachHocSinh !== "undefined"){

            localStorage.setItem(
                "danhSachHocSinh",
                JSON.stringify(danhSachHocSinh)
            );

        }

    }

}



// ================================
// LẤY DANH SÁCH HỌC SINH
// ================================

function layDanhSachHocSinh(){

    let ds =
    localStorage.getItem("danhSachHocSinh");


    return ds ?
    JSON.parse(ds)
    :
    [];

}



// ================================
// LƯU DANH SÁCH HỌC SINH
// ================================

function luuDanhSachHocSinh(ds){


    localStorage.setItem(
        "danhSachHocSinh",
        JSON.stringify(ds)
    );


}



// ================================
// PHÂN TỔ
// ================================


function capNhatTo(id,toMoi){


    let ds = layDanhSachHocSinh();


    let hs = ds.find(
        x=>x.id==id
    );


    if(hs){

        hs.to = Number(toMoi);

    }


    luuDanhSachHocSinh(ds);


}



// ================================
// LẤY HỌC SINH THEO TỔ
// ================================


function layHocSinhTheoTo(to){


    let ds = layDanhSachHocSinh();


    return ds.filter(
        hs=>Number(hs.to)===Number(to)
    );


}




// =====================================
// DỮ LIỆU THI ĐUA TUẦN
// =====================================


function layThiDua(){


let data =
localStorage.getItem(
"thiDuaTuan97"
);


return data ?
JSON.parse(data)
:
[];


}




function luuThiDua(data){


localStorage.setItem(

"thiDuaTuan97",

JSON.stringify(data)

);


}




// =====================================
// LƯU ĐÁNH GIÁ CỦA TỔ TRƯỞNG
// =====================================


function luuDanhGiaTuan(obj){



let ds = layThiDua();



let cu = ds.find(

x=>

x.hocSinhId==obj.hocSinhId

&&

x.tuan==obj.tuan

);



if(cu){


Object.assign(cu,obj);


}

else{


ds.push(obj);


}



luuThiDua(ds);



}




// =====================================
// LẤY ĐIỂM THEO TUẦN
// =====================================


function layDanhGiaTheoTuan(tuan,to){



let ds = layThiDua();



return ds.filter(

x=>

x.tuan==tuan

&&

x.to==to

);



}




// =====================================
// RESET
// =====================================


function resetDuLieu(){


localStorage.clear();


alert(
"Đã xóa toàn bộ dữ liệu"
);


}
