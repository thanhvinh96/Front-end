let str_items =`<li class="nav-item texts"><a href="/home/index.html">Trang Chủ</a></li>`;
fetch(`http://localhost:3000/list_nhasx`).then(res =>res.json()).then(data =>{
    data.forEach(nsx => str_items+=showMenu(nsx));
    document.getElementById("menu").innerHTML=str_items;
});
const showMenu = (nsx) =>{
    return `
    <li class="nav-item texts">
        <a href="sptheonsx.html?id=${nsx.nhasx_id}">${nsx.name_cate}</a>
    </li>`
};
//hiển thị chi tiết sản phẩm
const params = new URLSearchParams(location.search);
let id = params.get('id');
let str = ``;
console.log(`http://localhost:3000/sp/${id}`);
fetch(`http://localhost:3000/sp/${id}`).then(res=> res.json()).then(sp =>{
    let str = showChitietsp(sp);
    document.getElementById("chitietsanpham").innerHTML =`
    <div id=chitietsp>
        <h3 class="text-white text-center texts">Chi Tiết Sản Phẩm <hr></h3>
         <div id="data">${str}</div>
    </div>
    `;
});
const showChitietsp=(sp)=>{
    return `
    <div class="tong">
        <div id="left">
            <div><img src="${sp.img}"width="280px" height="220px"></div>
            <div id="middle">
                <h4>${sp.tensp}</h4>
                <p>Giá Gốc: <del>${sp.giasp}</del></p>
                <p class="text-danger"><b>Giá Bán: ${sp.gia_km}</b> <br></p>
                <button>Thêm Vào Giỏ Hàng</button>
            </div>
        </div>
        <div id="right">
            <p>Màu Sắc:${sp.mau_sac}</p>
            <p>Cân Nặng: ${sp.can_nang} kg</p>
            <p>Dung Lượng CPU: ${sp.cpu}</p>
            <p>RAM: ${sp.ram}</p>
            <p>ĐĨA: ${sp.dia}</p>
            <p>MÀN HÌNH: ${sp.man_hinh}</p>
            <p>THÔNG TIN PIN: ${sp.thong_tin_pin}</p>
            <p>CÔNG NGHỆ MÀN HÌNH: ${sp.cong_nghe_man_hinh}</p>
            <p>CỔNG KẾT NỐI: ${sp.cong_ket_noi}</p>
        </div>
    </div>
    <div class="service">
        <div class="title-service texts">
            <h2>DỊCH VỤ TIỆN ÍCH</h2>
        </div>
        <div class="service-detail">
            <div class="item">
                <div class="icon-service">
                    <img src="./image/promo-1.png" alt="">
                </div>
                <div class="content-service">
                    Mua Mã Thẻ Cào
                    <br>
                    <span class="color-red">Giảm 3%</span>
                    cho mệnh giá từ <br> 100.000 trở lên
                </div>
            </div>
            <div class="item">
                <div class="icon-service">
                    <img src="./image/promo-4.png" alt="">
                </div>
                <div class="content-service">
                    Dịch Vụ Đóng Tiền
                    <br>
                    Điện, Nước, Internet,
                    <br>
                    Cước điện thoại trả sau
                </div>
            </div>
            <div class="item">
                <div class="icon-service">
                    <img src="./image/promo-2.png" alt="">
                </div>
                <div class="content-service">
                    Mua Thẻ Game
                    <br>
                    <span class="color-red">Giảm 2%</span>
                    Cho tất cả nhà mạng, <br> áp dụng cho mệnh giá từ <br> 300.000 trở lên
                </div>
            </div>
            <div class="item">
                <div class="icon-service">
                    <img src="./image/promo-3.png" alt="">
                </div>
                <div class="content-service">
                    Dịch Vụ Vệ Sinh
                    <br>
                    Máy lạnh, Máy giặt, Quạt
                </div>
            </div>
        </div>
    </div>
    `
}