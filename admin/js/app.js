document
.getElementById('btn')
.addEventListener('click',(event)=>{
    event.preventDefault(); // ngăn chặn form gửi dữ liệu mặc định
    
    var tensp = document.getElementById('tensp').value;
    var giasp = document.getElementById('giasp').value;
    var giakm = document.getElementById('giakm').value;
    var ngaydang = document.getElementById('ngaydang').value;
    var danhmuc = document.getElementById('danhmuc').value;
    var luotxem = document.getElementById('luotxem').value;
    var spHot = document.getElementById('spHot').value;
    var anHien = document.getElementById('anHien').value;
    var tinhChat = document.getElementById('tinhChat').value;
    var mauSac = document.getElementById('mauSac').value;
    var canNang = document.getElementById('canNang').value;
    var fileInput = document.getElementById('fileInput').value;

    // tạo 1 đối tượng chứa dữ liệu sản phẩm
    var newProduct = {
        tensp:tensp,
        giasp:giasp,
        gia_km:giakm,
        ngay_dang:ngaydang,
        id_nhasx:danhmuc,
        luot_xem:luotxem,
        sp_hot:spHot,
        an_hien:anHien,
        tinh_chat:tinhChat,
        mau_sac:mauSac,
        can_nang:canNang,
        img:fileInput
    };

    //gọi API để thêm sản phẩm mới
    fetch("http://localhost:3000/admin/sp/addsp",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newProduct),
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error("Failed to add product");
        }
        return response.json();
    })
    .then((data)=>{
        document.getElementById('message').innerHTML = "product added successfully";
    })
    .catch((error)=>{
        document.getElementById("massage").innerHTML = 
            "Error:" + error.message;
    });
    window.location='quanlysp.html'
});






