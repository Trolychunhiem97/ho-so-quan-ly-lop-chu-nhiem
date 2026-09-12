// =================================
// NHẬP THI ĐUA TỔ TRƯỞNG
// LỚP 97
// =================================



let nguoiDung = layNguoiDung();


if(!nguoiDung || nguoiDung.quyen!="to_truong"){


alert("Bạn không có quyền truy cập");


window.location.href="index.html";


}




let soTo = nguoiDung.to;



document.getElementById(
"nguoiNhap"
).innerHTML=

"👤 "+nguoiDung.ten+
" - Tổ "+soTo;



// ==============================
// TẠO 35 TUẦN
// ==============================


let select =
document.getElementById(
"chonTuan"
);



for(let i=1;i<=35;i++){


let op=document.createElement("option");


op.value=i;


op.textContent="Tuần "+i;


select.appendChild(op);


}



// ==============================
// HIỂN THỊ HỌC SINH
// ==============================



function hienThi(){


let ds =
layHocSinhTheoTo(soTo);



let box =
document.getElementById(
"dsHocSinh"
);



box.innerHTML="";



ds.forEach(hs=>{


box.innerHTML+=`

<div class="card">


<h2>
${hs.hoTen}
</h2>



<label>
Phát biểu
</label>

<input 
type="number"
id="pb_${hs.id}"
value="0">



<label>
Điểm tốt
</label>

<input 
type="number"
id="dt_${hs.id}"
value="0">



<label>
Học bài, làm bài
</label>

<select id="hb_${hs.id}">

<option value="1">
Đầy đủ
</option>

<option value="0">
Chưa tốt
</option>

</select>



<label>
Nói chuyện
</label>

<input 
type="number"
id="nc_${hs.id}"
value="0">



<label>
Đi trễ
</label>

<input 
type="number"
id="tre_${hs.id}"
value="0">



<label>
Nghỉ không phép
</label>

<input 
type="number"
id="kp_${hs.id}"
value="0">



<label>
Vệ sinh
</label>

<select id="vs_${hs.id}">

<option>
Tốt
</option>

<option>
Chưa tốt
</option>


</select>



<label>
Nhận xét
</label>


<textarea
id="nx_${hs.id}">
</textarea>



<button onclick="
luu(${hs.id})
">

💾 Lưu

</button>



</div>


`;



});


}



hienThi();





// ==============================
// LƯU
// ==============================


function luu(id){


let obj={


hocSinhId:id,


to:soTo,


tuan:Number(
document.getElementById("chonTuan").value
),


phatBieu:
Number(
document.getElementById("pb_"+id).value
),


diemTot:
Number(
document.getElementById("dt_"+id).value
),


hocBai:
document.getElementById("hb_"+id).value,


noiChuyen:
Number(
document.getElementById("nc_"+id).value
),


diTre:
Number(
document.getElementById("tre_"+id).value
),


nghiKhongPhep:
Number(
document.getElementById("kp_"+id).value
),


veSinh:
document.getElementById("vs_"+id).value,


nhanXet:
document.getElementById("nx_"+id).value


};



luuDanhGiaTuan(obj);



alert(
"Đã lưu dữ liệu "+
"Tuần "+obj.tuan
);


}
