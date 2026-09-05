// =================================
// SERVICE WORKER
// TRỢ LÝ QUẢN LÝ LỚP 97
// =================================


const CACHE_NAME =
"quanlylop97-v1";



const FILES=[

"index.html",

"dangnhap.html",

"phanquyen.js",

"ai_nhanxet.js",

"style_mobile.css",

"tonghop_nam.html",

"xuat_tonghop_word.html",

"backup.html"

];





// Cài đặt

self.addEventListener(

"install",

event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(FILES);

})

);


}

);







// Mở ứng dụng

self.addEventListener(

"fetch",

event=>{


event.respondWith(


caches.match(

event.request

)

.then(response=>{


return response ||

fetch(event.request);


})


);


}

);
