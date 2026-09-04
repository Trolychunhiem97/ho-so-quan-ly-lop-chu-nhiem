// =================================================
// AI NHẬN XÉT CHỦ NHIỆM LỚP 97
// Trường THCS Trần Phú
// GVCN: Trần Sáng
// Phiên bản: Nhận xét tháng + học kỳ
// =================================================



// Kho câu mở đầu

const moDauTot = [

"Em có ý thức học tập và rèn luyện tốt.",
"Em luôn thể hiện tinh thần trách nhiệm trong học tập và các hoạt động của lớp.",
"Em duy trì được nề nếp học tập nghiêm túc và có nhiều cố gắng.",
"Em có thái độ học tập tích cực, biết thực hiện tốt nhiệm vụ được giao.",
"Em luôn có ý thức tự giác và tham gia tích cực các hoạt động tập thể."

];



const uuDiemTot = [

"Em chấp hành tốt nội quy trường lớp, có tinh thần đoàn kết và giúp đỡ bạn bè.",
"Em tích cực tham gia các hoạt động chung của lớp.",
"Em có sự tiến bộ ổn định trong quá trình học tập và rèn luyện.",
"Em biết phối hợp với giáo viên và bạn bè trong các hoạt động học tập.",
"Em có tinh thần tự học và ý thức hoàn thành nhiệm vụ."

];



const phatHuyTot = [

"Cần tiếp tục phát huy những ưu điểm đã đạt được.",
"Tiếp tục duy trì tinh thần tự giác để đạt kết quả cao hơn.",
"Cần phát huy khả năng của bản thân trong thời gian tới."

];





const moDauKha = [

"Em đã có nhiều cố gắng trong học tập và rèn luyện.",
"Em có ý thức thực hiện nhiệm vụ được giao.",
"Em đang từng bước hình thành thói quen học tập tích cực.",
"Em có sự tiến bộ trong quá trình rèn luyện."

];



const uuDiemKha = [

"Em cần duy trì sự cố gắng và phát huy tinh thần tự giác.",
"Em đã có chuyển biến tích cực trong học tập.",
"Em thực hiện tương đối tốt nội quy của lớp.",
"Em có khả năng tiến bộ nếu tiếp tục nỗ lực."

];



const phatHuyKha = [

"Cần chủ động hơn trong học tập và tham gia hoạt động tập thể.",
"Cần cố gắng duy trì kết quả ổn định hơn.",
"Cần mạnh dạn phát huy năng lực của bản thân."

];






const moDauCanCoGang = [

"Em cần quan tâm nhiều hơn đến việc học tập và rèn luyện.",
"Em cần có sự thay đổi tích cực trong ý thức học tập.",
"Em cần cố gắng hơn để hoàn thành tốt các nhiệm vụ được giao."

];



const uuDiemCanCoGang = [

"Giáo viên ghi nhận sự cố gắng của em trong thời gian qua.",
"Em vẫn có khả năng tiến bộ nếu có sự quyết tâm và cố gắng.",
"Em cần được động viên để hình thành thói quen học tập tốt hơn."

];



const phatHuyCanCoGang = [

"Cần phối hợp tốt hơn với gia đình và giáo viên để có sự tiến bộ.",
"Cần rèn luyện tính tự giác và ý thức trách nhiệm.",
"Cần tích cực hơn trong học tập và hoạt động của lớp."

];







// Lấy câu ngẫu nhiên

function layNgauNhien(mang){

return mang[
Math.floor(
Math.random()*mang.length
)
];

}







// ================================
// NHẬN XÉT THÁNG
// ================================


function taoNhanXetThang(hocSinh){


let diem =
Number(hocSinh.diem)||0;


let hk =
hocSinh.hanhKiem||"";



let nhanXet="";





if(diem>=90 && hk.includes("Tốt")){


nhanXet =

layNgauNhien(moDauTot)
+" "
+
layNgauNhien(uuDiemTot)
+" "
+
layNgauNhien(phatHuyTot);



}



else if(diem>=75){



nhanXet =

layNgauNhien(moDauKha)
+" "
+
layNgauNhien(uuDiemKha)
+" "
+
layNgauNhien(phatHuyKha);



}



else{


nhanXet =

layNgauNhien(moDauCanCoGang)
+" "
+
layNgauNhien(uuDiemCanCoGang)
+" "
+
layNgauNhien(phatHuyCanCoGang);



}



return nhanXet;


}








// ================================
// NHẬN XÉT HỌC KỲ / CUỐI NĂM
// ================================


function taoNhanXetHocKy(hocSinh){


let diem =
Number(hocSinh.diem)||0;


let hk =
hocSinh.hanhKiem||"";


let nhanXet="";





if(diem>=90 && hk.includes("Tốt")){


nhanXet =

"Trong học kỳ vừa qua, em đã thể hiện ý thức học tập và rèn luyện rất tốt. "
+
"Em luôn có tinh thần trách nhiệm, chấp hành nghiêm túc nội quy và tích cực tham gia các hoạt động của lớp. "
+
"Cần tiếp tục phát huy tinh thần tự giác, khả năng tự học để đạt được những kết quả cao hơn trong thời gian tới.";



}



else if(diem>=75){


nhanXet =

"Trong học kỳ vừa qua, em đã có nhiều cố gắng trong học tập và rèn luyện. "
+
"Em đã từng bước nâng cao ý thức thực hiện nhiệm vụ được giao. "
+
"Cần tiếp tục nỗ lực, chủ động hơn trong học tập và rèn luyện để phát huy tốt hơn năng lực của bản thân.";



}



else{


nhanXet =

"Trong học kỳ vừa qua, em cần quan tâm nhiều hơn đến việc học tập và rèn luyện. "
+
"Em cần xây dựng tinh thần tự giác, tích cực hơn trong việc thực hiện nội quy và nhiệm vụ học tập. "
+
"Giáo viên mong em có sự cố gắng, phối hợp cùng gia đình để đạt được sự tiến bộ trong thời gian tới.";



}



return nhanXet;


}






// Hàm cũ giữ lại để không lỗi các file đang gọi

function taoNhanXetAI(hocSinh){

return taoNhanXetThang(hocSinh);

}
