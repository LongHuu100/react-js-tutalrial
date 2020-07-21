function Bai1() {
    // Tinh Tong
    var tong = 0;
    for(var i = 0; i < 100; i++) {
        console.log("Gia tri cua i=" + i);
        tong = tong + i;
        console.log("Tong=" + tong);
    }
    console.log("tong final: ", tong);

    // Giai Thua
    /*
     * Định nghĩa : giai thừa của 1 số là tích các số liên tiếp từ 1 đến số đó.
     * Trường hợp đặc biệt, giai thừa của 0 và 1 là 1. Ví dụ: giai thừa của 5 là
     * 1*2*3*4*5 = 120
     */
    var tinhGiaithua = (n) => {
        var giai_thua = 1;
        if (n == 0 || n == 1) {
            return giai_thua;
        } else {
            for (var i = 2; i <= n; i++) {
                giai_thua *= i;
            }
            return giai_thua;
        }
    }
    console.log("tinhGiaithua", tinhGiaithua(5));
    return "Bai 1";
}

function Bai2() {
    var arr = [90,90,20,27,8,35,22,10,8];
    arr.splice(2, 0, 100);
    console.log("before Remove", arr);
    var removeDuplicate = function uniq(a) {
        console.log("Gia tri sau khi sap xep =", a.sort());
        return a.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    }
    console.log("remove duplicate", removeDuplicate(arr));
    return "Bai 2";
}

function Bai3() {
    var arr = [
        {
            "image": "https://cdn.printgo.vn/uploads/products/760080/400x400.to-roi-FIK-FL-4165494_1558211995.jpg",
            "name": "Tờ rơi / Flyer FIK-FL 4165494",
            "provider": "FIK",
            "view": "300",
            "like": "30",
            "price": "200",
            "unit": "Tờ"
        },
        {
            "image": "https://cdn.printgo.vn/uploads/products/776829/400x400.hop-giay-dung-2-banh-tung-thu-CTP-PB-010005-4_1591436185.jpg",
            "name": "Hộp giấy đựng 2 bánh trung thu",
            "provider": "ACS",
            "view": "120",
            "like": "40",
            "price": "500",
            "unit": "Hộp"
        },
        {
            "image": "https://cdn.printgo.vn/uploads/products/765269/400x400.PBP-PB-000041_1568000070.jpg",
            "name": "Túi giấy PBP-PB-000041",
            "provider": "PIT",
            "view": "3000",
            "like": "300",
            "price": "300",
            "unit": "Túi"
        }
    ];

    var createHtml = (item) => {
        console.log(item.image);
       var str = `<div class="ht-product-card home-05-column">
            <div class="product-image">
                <a title="Tờ rơi FIK-FL 4165494 cam cổ điển" href="https://printgo.vn/flyer/to-roi-flyer-fik-fl-4165494-i301" class="image-wrap">
                    <img class="lazy" alt="Tờ rơi FIK-FL 4165494 cam cổ điển" src="${item.image}">
                </a>
            </div>
            <div class="product-detail clearfix">
                <h5 class="pro-name">
                    <a href="https://printgo.vn/flyer/to-roi-flyer-fik-fl-4165494-i301" title="Tờ rơi / Flyer">Tờ rơi / Flyer                                                
                        <span class="prink">${item.name}</span>
                    </a>
                </h5>
                <p class="pro-price">
                    <span class="current-price">
                        <img src="https://printgo.vn/img/icon/icon-pro1.jpg">${item.like}</span>
                    <span class="old-price">
                                                        <img src="https://printgo.vn/img/icon/icon-pro2.jpg" data-pagespeed-url-hash="2298231173" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"> 989                                            </span>
                    <span class="old-price">
                                                        <img src="https://printgo.vn/img/icon/icon-pro3.jpg" data-pagespeed-url-hash="2592731094" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                                        <a href="https://printgo.vn/nha-in/fik.html">
                                                            <span class="prink"> FIK</span>
                                                        </a>
                                                    </span>
                </p>
                <div class="product_actions text-center">
                    <a href="https://printgo.vn/flyer/to-roi-flyer-fik-fl-4165494-i301" class="btn pri-btn">Giá chỉ từ <span class="prink">705 đ</span>/tờ</a>
                </div>
            </div>
        </div>`
        return str;
    }
    var htmls = arr.map(item => {
        return createHtml(item);
    }).join("");
    return htmls;
}

document.getElementById("bai3").innerHTML = Bai3();
