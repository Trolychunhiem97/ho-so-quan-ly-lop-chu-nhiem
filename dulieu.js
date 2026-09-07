// ==================================================
// DỮ LIỆU QUẢN LÝ LỚP 97
// TRỢ LÝ QUẢN LÝ LỚP - GVCN TRẦN SÁNG
// ==================================================



// ==================================================
// KHỞI TẠO DỮ LIỆU HỌC SINH
// ==================================================

function khoiTaoDuLieu(){


    let duLieu =
    localStorage.getItem(
        "danhSachHocSinh97"
    );



    // Nếu chưa có dữ liệu lưu

    if(!duLieu){


        if(typeof danhSachHocSinh !== "undefined"){


            let ds =
            danhSachHocSinh.map(
                (hs,index)=>{


                    return {


                        id:index+1,


                        hoTen:
                        hs.hoTen 
                        ||
                        hs.ten
                        ||
                        "",


                        to:
                        hs.to || 0,


                        ghiChu:""


                    };


                }
            );



            localStorage.setItem(

                "danhSachHocSinh97",

                JSON.stringify(ds)

            );


        }


    }



}






// ==================================================
// LẤY DANH SÁCH HỌC SINH
// ==================================================


function layDanhSachHocSinh(){


    let ds =

    localStorage.getItem(

        "danhSachHocSinh97"

    );



    if(ds){


        return JSON.parse(ds);


    }



    khoiTaoDuLieu();



    ds =

    localStorage.getItem(

        "danhSachHocSinh97"

    );



    return ds ?

    JSON.parse(ds)

    :

    [];



}






// ==================================================
// LƯU DANH SÁCH HỌC SINH
// ==================================================


function luuDanhSachHocSinh(ds){



    localStorage.setItem(


        "danhSachHocSinh97",


        JSON.stringify(ds)


    );



}






// ==================================================
// PHÂN TỔ HỌC SINH
// TỔ 1 - TỔ 2 - TỔ 3
// ==================================================


function capNhatToHocSinh(id,toMoi){



    let ds =

    layDanhSachHocSinh();



    let hs =

    ds.find(

        x=>x.id==id

    );



    if(hs){



        hs.to =
        Number(toMoi);



    }



    luuDanhSachHocSinh(ds);



}







// ==================================================
// LẤY HỌC SINH THEO TỔ
// ==================================================


function layHocSinhTheoTo(to){



    let ds =

    layDanhSachHocSinh();



    return ds.filter(

        hs=>

        Number(hs.to)

        ===

        Number(to)


    );



}






// ==================================================
// LẤY DANH SÁCH 3 TỔ
// ==================================================


function layDanhSachTo(){


return [


{
id:1,
ten:"Tổ 1"
},


{
id:2,
ten:"Tổ 2"
},


{
id:3,
ten:"Tổ 3"
}


];


}






// ==================================================
// DỮ LIỆU THI ĐUA TUẦN
// 35 TUẦN
// ==================================================


function layThiDuaTuan(){


let data =

localStorage.getItem(

"thiDuaTuan97"

);



return data ?

JSON.parse(data)

:

[];




}






function luuThiDuaTuan(data){


localStorage.setItem(

"thiDuaTuan97",

JSON.stringify(data)

);


}







// ==================================================
// LƯU ĐIỂM HỌC SINH THEO TUẦN
// ==================================================


function luuDiemTuan(

hocSinhId,

tuan,

diem,

nhanXet

){



let ds =

layThiDuaTuan();





let cu =

ds.find(

x=>

x.hocSinhId==hocSinhId

&&

x.tuan==tuan


);





if(cu){



cu.diem=diem;

cu.nhanXet=nhanXet;



}

else{



ds.push({


hocSinhId:hocSinhId,


tuan:tuan,


diem:diem,


nhanXet:nhanXet



});



}



luuThiDuaTuan(ds);



}






// ==================================================
// LẤY ĐIỂM MỘT HỌC SINH
// ==================================================


function layDiemHocSinh(id,tuan){



let ds=

layThiDuaTuan();



let kq=

ds.find(

x=>

x.hocSinhId==id

&&

x.tuan==tuan


);



return kq || null;



}






// ==================================================
// RESET DỮ LIỆU
// CHỈ DÙNG KHI CẦN
// ==================================================


function resetDuLieu(){


localStorage.removeItem(

"danhSachHocSinh97"

);



localStorage.removeItem(

"thiDuaTuan97"

);



alert(

"Đã xóa dữ liệu quản lý lớp"

);



location.reload();



}



