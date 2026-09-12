// =====================================================
// TỔ TRƯỞNG QUẢN LÝ THI ĐUA LỚP 97
// GVCN: TRẦN SÁNG
// =====================================================



// ===============================
// THÔNG TIN TỔ TRƯỞNG
// SAU NÀY LẤY TỪ PHÂN QUYỀN
// ===============================


let taiKhoanToTruong = {


    ten:"Tổ trưởng Tổ 1",


    to:1


};






// ===============================
// KHỞI TẠO 35 TUẦN
// ===============================


function taoDanhSachTuan(){


let select =

document.getElementById(
"chonTuan"
);



for(let i=1;i<=35;i++){


let option=

document.createElement(
"option"
);



option.value=i;


option.textContent=

"Tuần "+i;



select.appendChild(option);


}



}






// ===============================
// HIỂN THỊ THÔNG TIN
// ===============================


function hienThiThongTin(){


document.getElementById(

"tenToTruong"

).innerHTML=

taiKhoanToTruong.ten;




document.getElementById(

"hienThiTo"

).innerHTML=

"Tổ "+taiKhoanToTruong.to;


}







// ===============================
// LẤY HỌC SINH TRONG TỔ
// ===============================


function layDanhSachTo(){


let ds=

layDanhSachHocSinh();




return ds.filter(

hs=>

hs.to==taiKhoanToTruong.to

);



}








// ===============================
// HIỂN THỊ BẢNG
// ===============================


function taiDuLieu(){



let ds=

layDanhSachTo();



let tuan=

Number(

document.getElementById(

"chonTuan"

).value

);



let data=

JSON.parse(

localStorage.getItem(

"thiDuaTuan97"

)

||

"[]"

);




let html="";




ds.forEach(

(hs,index)=>{


let old=

data.find(

x=>

x.hocSinhId==hs.id

&&

x.tuan==tuan

);



html+=`

<tr data-id="${hs.id}">


<td>${index+1}</td>


<td>
<b>${hs.hoTen}</b>
</td>



<td>

<input 
type="number"
data-field="phatBieu"
value="${old?.phatBieu||0}">

</td>



<td>

<input 
type="number"
data-field="diemTot"
value="${old?.diemTot||0}">

</td>



<td>

<select data-field="hocBai">

<option ${old?.hocBai=="Tốt"?"selected":""}>
Tốt
</option>

<option ${old?.hocBai=="Chưa tốt"?"selected":""}>
Chưa tốt
</option>


</select>


</td>




<td>

<select data-field="lamBai">


<option ${old?.lamBai=="Đầy đủ"?"selected":""}>
Đầy đủ
</option>


<option ${old?.lamBai=="Chưa đầy đủ"?"selected":""}>
Chưa đầy đủ
</option>


</select>


</td>




<td>

<input

type="number"

data-field="noiChuyen"

value="${old?.noiChuyen||0}">

</td>



<td>

<input

type="number"

data-field="tre"

value="${old?.tre||0}">

</td>




<td>

<input

type="number"

data-field="nghiKhongPhep"

value="${old?.nghiKhongPhep||0}">

</td>




<td>

<select data-field="veSinh">


<option ${old?.veSinh=="Tốt"?"selected":""}>
Tốt
</option>


<option ${old?.veSinh=="Chưa tốt"?"selected":""}>
Chưa tốt
</option>



</select>


</td>




<td class="tongDiem">

${old?.tongDiem||100}

</td>




<td>

<textarea data-field="nhanXet">

${old?.nhanXet||""}

</textarea>


</td>



</tr>


`;



});




document.getElementById(

"bangDuLieu"

).innerHTML=

html;



}









// ===============================
// TÍNH ĐIỂM
// ===============================


function tinhDiem(row){



let diem=100;




let phatBieu=

Number(

row.querySelector(

'[data-field="phatBieu"]'

).value

);



let diemTot=

Number(

row.querySelector(

'[data-field="diemTot"]'

).value

);



let noiChuyen=

Number(

row.querySelector(

'[data-field="noiChuyen"]'

).value

);



let tre=

Number(

row.querySelector(

'[data-field="tre"]'

).value

);



let nghi=

Number(

row.querySelector(

'[data-field="nghiKhongPhep"]'

).value

);




// cộng


diem += phatBieu;

diem += diemTot*2;




// trừ


diem -= noiChuyen*2;

diem -= tre*2;

diem -= nghi*5;



if(diem<0)

diem=0;



row.querySelector(

".tongDiem"

).innerHTML=

diem;



return diem;


}








// ===============================
// LƯU THI ĐUA
// ===============================


function luuThiDua(){



let tuan=

Number(

document.getElementById(

"chonTuan"

).value

);



let data=

JSON.parse(

localStorage.getItem(

"thiDuaTuan97"

)

||

"[]"

);






document.querySelectorAll(

"#bangDuLieu tr"

)

.forEach(row=>{



let obj={



hocSinhId:

Number(

row.dataset.id

),



to:

taiKhoanToTruong.to,



tuan:tuan,



phatBieu:

Number(

row.querySelector(

'[data-field="phatBieu"]'

).value

),



diemTot:

Number(

row.querySelector(

'[data-field="diemTot"]'

).value

),



hocBai:

row.querySelector(

'[data-field="hocBai"]'

).value,



lamBai:

row.querySelector(

'[data-field="lamBai"]'

).value,



noiChuyen:

Number(

row.querySelector(

'[data-field="noiChuyen"]'

).value

),



tre:

Number(

row.querySelector(

'[data-field="tre"]'

).value

),



nghiKhongPhep:

Number(

row.querySelector(

'[data-field="nghiKhongPhep"]'

).value

),



veSinh:

row.querySelector(

'[data-field="veSinh"]'

).value,



nhanXet:

row.querySelector(

'[data-field="nhanXet"]'

).value,



tongDiem:

tinhDiem(row)


};





let index=

data.findIndex(

x=>

x.hocSinhId==obj.hocSinhId

&&

x.tuan==obj.tuan

);





if(index>=0){

data[index]=obj;

}

else{

data.push(obj);

}



});




localStorage.setItem(

"thiDuaTuan97",

JSON.stringify(data)

);




alert(

"Đã lưu thi đua tuần "+tuan

);



}







// ===============================
// QUAY VỀ TRANG CHỦ
// ===============================


function veTrangChu(){


window.location.href=

"trangchu.html";


}







// ===============================
// KHỞI ĐỘNG
// ===============================


taoDanhSachTuan();


hienThiThongTin();


taiDuLieu();
