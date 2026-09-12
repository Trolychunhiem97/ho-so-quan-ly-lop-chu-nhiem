// ======================================
// DỮ LIỆU LỚP 97
// ======================================



// Lấy danh sách

function layDanhSachHocSinh(){


let ds=localStorage.getItem(
"danhSachHocSinh97"
);



if(ds){

return JSON.parse(ds);

}



return danhSachHocSinh;


}




// Lưu danh sách

function luuDanhSachHocSinh(ds){


localStorage.setItem(

"danhSachHocSinh97",

JSON.stringify(ds)

);


}







// ======================================
// PHÂN TỔ
// ======================================


function capNhatToHocSinh(id,to){



let ds=layDanhSachHocSinh();



let hs=ds.find(

x=>x.id===id

);



if(hs){


hs.to=Number(to);


}



luuDanhSachHocSinh(ds);


}






// LẤY HỌC SINH THEO TỔ

function layHocSinhTheoTo(to){


let ds=layDanhSachHocSinh();


return ds.filter(

x=>x.to==to

);


}








// ======================================
// THI ĐUA TUẦN
// ======================================



function luuThiDua(obj){



let ds=JSON.parse(

localStorage.getItem(

"thiDua97"

)

)||[];



let vt=ds.findIndex(x=>

x.id===obj.id &&

x.tuan===obj.tuan

);



if(vt>=0){


ds[vt]=obj;


}

else{


ds.push(obj);


}



localStorage.setItem(

"thiDua97",

JSON.stringify(ds)

);


}






function layThiDua(){


return JSON.parse(

localStorage.getItem(

"thiDua97"

)

)||[];


}








// ======================================
// ĐIỂM KIỂM TRA
// ======================================


function luuDiem(){



}




