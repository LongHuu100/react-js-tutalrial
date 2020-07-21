/*
var newobj = {
    hoTen: "Nguyen An",
    ngaySinh: "20/10/2000",
    gioiTinh: "nu",
    setGioiTinh: function (gt) {
        this.gioiTinh = gt;
    }
}

var getValueOfObject = () => {
    newobj.setGioiTinh("Nam")
    return newobj.hoTen + "|" + newobj.ngaySinh + "|" + newobj.gioiTinh;
}
*/

// Tạo đối tượng bằng một contructtion.
function newobj(thamsoTruyenVao) {
    this.thamso = thamsoTruyenVao;
    this.setThamso = function (newthamso) {
        this.thamso = newthamso;
    }
}
newobj.prototype.editThamSo = function (edit) {
    this.thamso = edit;
}

var createObj = new newobj("Hom nay Thu 2");
var thamso = createObj.thamso;
createObj.setThamso("Bay gio toi thu 2");
console.log("Tham so khoi tao: ", thamso);
console.log("Tham so sau set: ", createObj.thamso);


createObj.editThamSo("Tham So can Edit ..!");
console.log("Tham so can edit: ", createObj.thamso);
$('#demo').html(createObj.thamso);
