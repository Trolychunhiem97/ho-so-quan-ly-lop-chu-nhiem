// ======================================
// DỮ LIỆU QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// ======================================



// ======================================
// KHỞI TẠO DỮ LIỆU BAN ĐẦU
// ======================================


function khoiTaoDuLieu(){


    let ds = localStorage.getItem(
        "danhSachHocSinh"
    );


    // Nếu chưa có dữ liệu
    // lấy từ danhsach.js


    if(!ds){


        if(typeof danhSachHocSinh !== "undefined"){


            localStorage.setItem(

                "danhSachHocSinh",

                JSON.stringify(danhSachHocSinh)

            );


        }


    }



}





// ======================================
// LẤY DANH SÁCH HỌC SINH
// ======================================


function layDanhSachHocSinh(){


    let ds = localStorage.getItem(
        "danhSachHocSinh"
    );



    if(ds){


        return JSON.parse(ds);


    }




    // fallback lấy từ danhsach.js


    if(typeof danhSachHocSinh !== "undefined"){


        return danhSachHocSinh;


    }



    return [];



}





// ======================================
// LƯU DANH SÁCH HỌC SINH
// ======================================


function luuDanhSachHocSinh(ds){


    localStorage.setItem(

        "danhSachHocSinh",

        JSON.stringify(ds)

    );


}





// ======================================
// ĐỔI TỔ HỌC SINH
// ======================================


function doiToHocSinh(id,toMoi){



    let ds = layDanhSachHocSinh();



    let hs = ds.find(

        x=>x.id===id

    );



    if(hs){


        hs.to = toMoi;


    }



    luuDanhSachHocSinh(ds);



}







// ======================================
// LẤY HỌC SINH THEO TỔ
// ======================================


function layHocSinhTheoTo(to){



    let ds = layDanhSachHocSinh();



    return ds.filter(

        hs=>hs.to===to

    );



}







// ======================================
// DỮ LIỆU ĐIỂM TUẦN
// ======================================


function layDiemTuan(){



    let ds = localStorage.getItem(

        "diemTuan97"

    );



    return ds ?

    JSON.parse(ds)

    :

    [];



}







function luuDiemTuan(ds){


    localStorage.setItem(

        "diemTuan97",

        JSON.stringify(ds)

    );


}







// ======================================
// THÊM HOẶC CẬP NHẬT ĐIỂM
// ======================================


function luuDiem(obj){



    let ds = layDiemTuan();



    let old = ds.find(

        x=>

        x.hocSinhId===obj.hocSinhId

        &&

        x.tuan===obj.tuan

    );




    if(old){


        old.diem=obj.diem;

        old.nhanXet=obj.nhanXet;


    }

    else{


        ds.push(obj);


    }



    luuDiemTuan(ds);



}





// ======================================
// XÓA DỮ LIỆU CŨ (KHI CẦN RESET)
// ======================================


function resetDuLieu(){



    localStorage.removeItem(

        "danhSachHocSinh"

    );


    localStorage.removeItem(

        "diemTuan97"

    );


    alert(

        "Đã reset dữ liệu"

    );

}
