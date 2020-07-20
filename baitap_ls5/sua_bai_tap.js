function Bai1() {
    // Tinh Tong
    var tong = 0;
    for(var i = 0; i < 100; i++) {
        tong += i;
    }
    console.log("tong", tong);

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
    var arr = [90,90,20,27,35,22,10,8,8];
    arr.splice(2, 0, 100);
    console.log("before Remove", arr);
    var removeDuplicate = function uniq(a) {
        return a.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    }
    console.log("remove duplicate", removeDuplicate(arr));
    return "Bai 2";
}

document.getElementById("bai2").innerHTML = Bai1();
