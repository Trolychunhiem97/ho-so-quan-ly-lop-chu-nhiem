function taoNhanXetAI(hocSinh){

let diem = Number(hocSinh.diem);
let hanhKiem = hocSinh.hanhKiem;

let nhanXet="";


if(diem >= 95 && hanhKiem=="Tốt"){

nhanXet =
"Em có ý thức học tập và rèn luyện rất tốt. " +
"Em luôn chấp hành nghiêm túc nội quy, tích cực tham gia các hoạt động của lớp. " +
"Cần tiếp tục phát huy tinh thần tự giác và trách nhiệm.";

}


else if(diem >=85){

nhanXet =
"Em có nhiều cố gắng trong học tập và rèn luyện. " +
"Em đã thực hiện tương đối tốt các nhiệm vụ được giao. " +
"Cần tiếp tục nỗ lực để đạt kết quả cao hơn.";

}


else if(diem >=70){

nhanXet =
"Em đã có sự cố gắng trong quá trình học tập và rèn luyện. " +
"Cần tích cực hơn trong việc thực hiện nội quy và hoàn thành nhiệm vụ.";

}


else{

nhanXet =
"Em cần quan tâm hơn đến việc học tập và rèn luyện. " +
"Cần có sự thay đổi tích cực để đạt kết quả tốt hơn trong thời gian tới.";

}


return nhanXet;


}
