// =================================================
// AI NHẬN XÉT QUẢN LÝ LỚP 97
// TRƯỜNG THCS TRẦN PHÚ
// GVCN: TRẦN SÁNG
// =================================================



// Tạo nhận xét cá nhân dựa trên dữ liệu học sinh


function taoNhanXetHocSinh(hs){



let nhanXet="";



let diem = Number(hs.diem) || 0;



let hocTap = hs.hocTap || "";

let laoDong = hs.laoDong || "";

let yThuc = hs.yThuc || "";






// Nhóm học sinh xuất sắc

if(diem >= 110){


nhanXet =

`Em ${hs.ten} đạt kết quả nổi bật với ${diem} điểm. 
Em có ý thức học tập tốt, tích cực tham gia các hoạt động của lớp,
có tinh thần trách nhiệm và là tấm gương tích cực để các bạn noi theo.`;


}






// Nhóm học sinh tốt

else if(diem >=100){



nhanXet =

`Em ${hs.ten} duy trì kết quả tốt trong quá trình học tập và rèn luyện.
Em có ý thức thực hiện nội quy, hoàn thành nhiệm vụ được giao.
Cần tiếp tục phát huy tinh thần tự giác để đạt kết quả cao hơn.`;


}






// Nhóm khá

else if(diem >=90){



nhanXet =

`Em ${hs.ten} đã có nhiều cố gắng trong học tập và rèn luyện.
Em cần tích cực hơn trong việc chuẩn bị bài, tham gia hoạt động lớp
và nâng cao tinh thần tự giác.`;


}






// Nhóm cần cố gắng

else{



nhanXet =

`Em ${hs.ten} cần được quan tâm và hỗ trợ thêm trong thời gian tới.
Em cần chú ý hơn đến việc học tập, ý thức kỷ luật và thực hiện nhiệm vụ của lớp.`;


}







// Bổ sung nhận xét theo học tập


if(hocTap.includes("Tốt") || hocTap.includes("Đầy đủ")){


nhanXet +=

" Em có tinh thần học tập nghiêm túc.";


}

else if(hocTap.includes("Chưa")){


nhanXet +=

" Em cần chú ý hơn việc chuẩn bị bài và hoàn thành nhiệm vụ học tập.";


}






// Bổ sung lao động


if(laoDong.includes("Tích cực") || laoDong.includes("Tốt")){


nhanXet +=

" Em tích cực tham gia công việc chung của lớp.";


}

else if(laoDong.includes("Chưa")){


nhanXet +=

" Em cần nâng cao ý thức tham gia lao động và giữ gìn vệ sinh chung.";


}




return nhanXet;



}









// =================================================
// Tạo nhận xét cho toàn bộ lớp
// =================================================



function taoNhanXetLop97(danhSach){



let ketQua=[];



danhSach.forEach(hs=>{


ketQua.push({


ten:

hs.ten,


diem:

hs.diem,


nhanXet:

taoNhanXetHocSinh(hs)



});


});






localStorage.setItem(

"nhanXetAI97",

JSON.stringify(ketQua)

);



return ketQua;



}








// =================================================
// Nhận xét chung tập thể lớp
// =================================================



function taoNhanXetChungLop97(thongKe){



let nx="";



if(thongKe.xuatSac > 5){



nx =

"Tập thể lớp có nhiều học sinh đạt thành tích nổi bật, duy trì tốt phong trào học tập và rèn luyện.";



}

else if(thongKe.tot > thongKe.kha){



nx =

"Đa số học sinh có ý thức tốt, tập thể lớp duy trì được nền nếp và tinh thần đoàn kết.";



}

else{



nx =

"Lớp cần tiếp tục tăng cường công tác tự quản, nâng cao ý thức học tập và rèn luyện của học sinh.";



}





localStorage.setItem(

"nhanXetTongHop97",

nx

);



return nx;



}






// =================================================
// Lấy nhận xét đã lưu
// =================================================



function layNhanXetAI97(){


return JSON.parse(

localStorage.getItem(

"nhanXetAI97"

)

)

||[];


}
