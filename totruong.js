// ==========================================
// TỔ TRƯỞNG THI ĐUA LỚP 97
// GVCN TRẦN SÁNG
// Giao diện điện thoại
// ==========================================



// ================================
// LẤY NGƯỜI ĐĂNG NHẬP
// ================================


let nguoiDung = JSON.parse(

localStorage.getItem(
"nguoiDungDangNhap"
)

);



if(!nguoiDung){

alert(
"Chưa đăng nhập!"
);

window.location.href="index.html";

}




let soTo = nguoiDung.to;






// ================================
// KHỞI TẠO TUẦN 1 - 35
// ================================


function taoTuan(){


let select = 
document.getElementById(
"chonTuan"
);



for(let i=1;i<=35;i++){


let op=document.createElement(
"option"
);


op.value=i;

op.textContent=
"Tuần "+i;


select.appendChild(op);



}



}






// ================================
// HIỂN THỊ THÔNG TIN TỔ
// ================================


function hienThiTo(){


document.getElementById(

"thongTinTo"

).innerHTML=


`
👤 ${nguoiDung.ten}
<br>
📚 Quản lý: Tổ ${soTo}
`;



}








// ================================
// LẤY HỌC SINH TRONG TỔ
// ================================


function danhSachTo(){


let ds =
layDanhSachHocSinh();



return ds.filter(

hs=>Number(hs.to)===Number(soTo)

);


}









// ================================
// HIỂN THỊ DANH SÁCH
// ================================


function hienThiDanhSach(){



let ds=danhSachTo();



let tuan =
Number(

document.getElementById(
"chonTuan"
).value

);



let data =
JSON.parse(

localStorage.getItem(
"thiDua97"
)

)||[];




let html="";




ds.forEach(

(hs,i)=>{



let old=data.find(

x=>

x.hocSinhId===hs.id

&&

x.tuan===tuan

);




html +=`


<div class="student">


<h3>
👨‍🎓 ${i+1}. ${hs.hoTen}
</h3>



<label>
🗣 Phát biểu
</label>

<input

type="number"

class="phatBieu"

value="${old?.phatBieu||0}"

>



<label>
⭐ Điểm tốt
</label>

<input

type="number"

class="diemTot"

value="${old?.diemTot||0}"

>



<label>
📚 Học bài
</label>


<select class="hocBai">

<option

${old?.hocBai=="Tốt"?"selected":""}

>

Tốt

</option>


<option

${old?.hocBai=="Chưa tốt"?"selected":""}

>

Chưa tốt

</option>


</select>






<label>
📝 Làm bài
</label>


<select class="lamBai">


<option>

Đầy đủ

</option>


<option>

Chưa đầy đủ

</option>


</select>






<label>
💬 Nói chuyện
</label>


<input

type="number"

class="noiChuyen"

value="${old?.noiChuyen||0}"

>





<label>
⏰ Đi trễ
</label>


<input

type="number"

class="tre"

value="${old?.tre||0}"

>




<label>
🚫 Nghỉ không phép
</label>


<input

type="number"

class="nghi"

value="${old?.nghi||0}"

>




<label>
🧹 Vệ sinh
</label>


<select class="veSinh">


<option>
Tốt
</option>

<option>
Chưa tốt
</option>


</select>





<label>
💬 Nhận xét
</label>


<textarea class="nhanXet">

${old?.nhanXet||""}

</textarea>



<div class="score">

Điểm:
<span class="diem">
${old?.tongDiem||100}
</span>

</div>



</div>



`;



});




document.getElementById(

"danhSach"

).innerHTML=html;



}









// ================================
// LƯU KẾT QUẢ
// ================================


function luuThiDua(){



let tuan=

Number(

document.getElementById(
"chonTuan"
).value

);



let ds=danhSachTo();



let data =
JSON.parse(

localStorage.getItem(
"thiDua97"
)

)||[];





let cards =
document.querySelectorAll(
".student"
);





cards.forEach(

(card,index)=>{


let diem=100;



let phat =

Number(

card.querySelector(".phatBieu").value

);



let tot =

Number(

card.querySelector(".diemTot").value

);



let noi =

Number(

card.querySelector(".noiChuyen").value

);



let tre =

Number(

card.querySelector(".tre").value

);



let nghi =

Number(

card.querySelector(".nghi").value

);





diem += phat;

diem += tot*2;


diem -= noi*2;

diem -= tre*2;

diem -= nghi*5;



let obj={


hocSinhId:
ds[index].id,


to:soTo,


tuan:tuan,


phatBieu:phat,


diemTot:tot,


hocBai:

card.querySelector(".hocBai").value,



lamBai:

card.querySelector(".lamBai").value,



noiChuyen:noi,


tre:tre,


nghi:nghi,


veSinh:

card.querySelector(".veSinh").value,



nhanXet:

card.querySelector(".nhanXet").value,



tongDiem:diem



};





let vt=data.findIndex(

x=>

x.hocSinhId===obj.hocSinhId

&&

x.tuan===obj.tuan

);



if(vt>=0)

data[vt]=obj;

else

data.push(obj);



});




localStorage.setItem(

"thiDua97",

JSON.stringify(data)

);




alert(

"Đã lưu thi đua tuần "+tuan

);



}






// ================================
// VỀ TRANG CHỦ
// ================================


function veTrangChu(){


window.location.href=

"index.html";


}







// ================================
// KHỞI ĐỘNG
// ================================


taoTuan();


hienThiTo();


hienThiDanhSach();



document

.getElementById(
"chonTuan"
)

.addEventListener(

"change",

hienThiDanhSach

);
