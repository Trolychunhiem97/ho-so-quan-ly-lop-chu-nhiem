// ======================================
// ĐĂNG NHẬP HỆ THỐNG QUẢN LÝ LỚP 97
// GVCN TRẦN SÁNG
// ======================================



function xuLyDangNhap(){


    let username =
    document.getElementById("username").value.trim();


    let password =
    document.getElementById("password").value.trim();




    let taiKhoan = taiKhoan97.find(

        x =>

        x.username === username

        &&

        x.password === password

    );




    if(!taiKhoan){


        alert(
            "Sai tài khoản hoặc mật khẩu!"
        );


        return;


    }




    // LƯU NGƯỜI DÙNG

    localStorage.setItem(

        "nguoiDungDangNhap",

        JSON.stringify(taiKhoan)

    );





    // ===============================
    // ĐIỀU HƯỚNG THEO QUYỀN
    // ===============================


    if(taiKhoan.quyen==="gvcn"){


        // Giáo viên chủ nhiệm

        window.location.href=
        "index.html";


    }



    else if(taiKhoan.quyen==="to_truong"){


        // Tổ trưởng

        window.location.href=
        "totruong.html";


    }



    else if(taiKhoan.quyen==="hoc_tap"){


        // Lớp phó học tập

        window.location.href=
        "hoctap.html";


    }



    else if(taiKhoan.quyen==="lao_dong"){


        // Lớp phó lao động

        window.location.href=
        "laodong.html";


    }



    else if(taiKhoan.quyen==="loptruong"){


        window.location.href=
        "loptruong.html";


    }



}




// ======================================
// LẤY NGƯỜI ĐANG ĐĂNG NHẬP
// ======================================


function layNguoiDung(){


    let user =

    localStorage.getItem(
        "nguoiDungDangNhap"
    );


    return user ?

    JSON.parse(user)

    :

    null;


}






// ======================================
// ĐĂNG XUẤT
// ======================================


function dangXuat(){


localStorage.removeItem(

"nguoiDungDangNhap"

);


window.location.href="login.html";


}
