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
// sản phẩm theo nhà sản xuất:
const params = new URLSearchParams(location.search);
let id = params.get('id');
// let str111=``;
// fetch(`http://localhost:3000/list_nhasx`).then(res =>res.json()).then(data =>{
//     data.forEach(nsx => str111+=showten(nsx));
//     document.getElementById("sptheonsx").innerHTML=str111;
// });
fetch(`http://localhost:3000/sp_nhasx/${id}`).then(res=>res.json()).then(data =>{
    str = ``;
    data.forEach(sp =>str+=show1sp(sp));
    document.getElementById("splist").innerHTML= `
    <div id="sptheonsx">
        <div id="data">${str}</div>
    </div>
    `;
});
// const showten = (nsx) => {
//     return`
//     <h3 class="text-white texts">Sản Phẩm Của ${nsx.name_cate}</h3> 
//     `

// }
const show1sp = (sp)=>{
    return `
<div class="sp">
    <a href="chitietsp.html?id=${sp.id_sp}"><img src="${sp.img}" alt="" width="280px" height="220px"></a>
    <div class="dow">
        <p class="texts" ><b>${sp.tensp}</b></p>
        <span class="product-sale">
            <img src="./images/lua.png" alt="">
            <span>Giá cực sốc</span>
        </span>
        <p><del>${Number(sp.giasp).toLocaleString('vi')} VNĐ</del></p>
        <p class="text-danger"><b>Giá Bán: ${Number(sp.gia_km).toLocaleString('vi')} VNĐ</b> <br></p>
        <input type="number" name="soluong" min="1" max="50">
        <p hidden>masp:${sp.id}</p>
        <button onclick="addcart(this)">Thêm Vào Giỏ Hàng</button>
        <div class="installment texts">
            <b>Trả góp 0%</b>
        </div>
    </div>
</div>
    `
};