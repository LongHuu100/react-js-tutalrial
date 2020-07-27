/*
* Các e cần bổ sung thêm chức năng.
* - Nếu lớn hơn 10 page sẽ hiển thị theo cấu trúc: [5 page đầu] .... [1 page cuối].
* - Nếu page hiện tại lớn hơn 10 sẽ hiển thị theo cấu trúc: [page từ 10 - 3 đến 10] [page từ 10 đến 10 + 2]. VD page(7,8,9,10,11,12);
* */
function Pagination(number) {
    this.options = {
        activeClass: "active",
        disabledClass: "disabled"
    };
    this.$listContainer = $(".pagination");
    this.totalRecords = 0;
    this.records = this.createRerord(number);
    this.displayRecords = [];
    this.recPerPage = 10;
    this.page = 1;
    this.totalPages = 0;
    this.init = () => {
        this.totalRecords = this.records.length;
        if (this.totalRecords % this.recPerPage == 0) {
            this.totalPages = this.totalRecords/this.recPerPage;
        } else {
            this.totalPages = Math.floor(this.totalRecords/this.recPerPage) + 1;
        }
        this.renderPage();
        this.onClickListener();
        this.show(this.page);
    }
    this.renderHtml = () => {
        var tr;
        $('#emp_body').html('');
        for (var i = 0; i < this.displayRecords.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + this.displayRecords[i].name + "</td>");
            tr.append("<td>" + this.displayRecords[i].salary + "</td>");
            tr.append("<td>" + this.displayRecords[i].eye + "</td>");
            $('#emp_body').append(tr);
        }
        this.renderPage();
        return this;
    }
    this.onClickListener = () => {
        var _this = this;
        this.$listContainer.off('click').on('click', 'li', function (evt) {
            var $this = $(this);
            evt.preventDefault();
            if ($this.hasClass("disabled") || $this.hasClass("active")) {
                return false;
            }
            if($this.data('page-type') !== "dot")
                _this.show(parseInt($this.data('page')));
        });
    }
}

Pagination.prototype = {
    constructor: Pagination,
    show: function (page) {
        if (page < 1 || page > this.totalPages) {
            throw new Error('Page is incorrect.');
        }
        this.page = page;
        var displayRecordsIndex = Math.max(page - 1, 0) * this.recPerPage;
        var endRec = (displayRecordsIndex) + this.recPerPage;
        console.log("Tong records", this.records);
        this.displayRecords = this.records.slice(displayRecordsIndex, endRec);
        console.log("Record hien thi cho page hien tai", this.displayRecords);
        this.renderHtml();
    },
    createPageLink: function (listItems) {
        if(this.totalPages <= 10) {
            for (var i = 0; i < this.totalPages; i++) {
                listItems.push(this.buildItem(i + 1, i + 1, 'page'));
            }
            return listItems;
        }
        if(this.page < 6) {
            for (var i = 0; i <=5; i++) {
                listItems.push(this.buildItem(i + 1, i + 1, 'page'));
            }
            listItems.push(this.buildItem('...', this.totalPages - 1, 'dot'));
            listItems.push(this.buildItem(this.totalPages, this.totalPages, 'page'));
        } else {
            for (var i = (this.page - 3); i < this.page; i++) {
                listItems.push(this.buildItem(i + 1, i + 1, 'page'));
            }
            if(this.totalPages >= this.page + 1) {
                listItems.push(this.buildItem(this.page + 1, this.page + 1, 'page'));
            }
            if(this.totalPages >= this.page + 2) {
                listItems.push(this.buildItem(this.page + 2, this.page + 2, 'page'));
            }
        }
    },
    buildListItems: function () {
        var listItems = [];
        // First Link
        listItems.push(this.buildItem('First', 1, 'first'));

        // Pre Link
        var prev = this.page > 2 ? (this.page - 1) : 1;
        listItems.push(this.buildItem('Prev', prev, 'prev'));

        // Page Link
        this.createPageLink(listItems);

        // Next Link
        var next = this.page < this.totalPages ? this.page + 1 : this.totalPages;
        listItems.push(this.buildItem('Next', next, 'next'));

        // Last Link
        listItems.push(this.buildItem('Last', this.totalPages, 'last'));
        return listItems;
    },
    buildItem: function (text, page, type = 'page') {
        var $itemContainer = $('<li></li>'),
            $itemContent = type !== "dot" ? $('<a></a>') : $('<span style="cursor: none"></span>');
        $itemContainer.data('page', page);
        $itemContainer.data('page-type', type);
        $itemContainer.attr("class", "page-item");
        var theA = $itemContent.attr('href', "#").addClass("page-link").html(text);
        $itemContainer.append(theA);
        return $itemContainer;
    },
    renderPage: function () {
        var _this = this;
        this.$listContainer.children().remove();
        if(_this.totalPages <= 1)
            return;

        this.buildListItems().map(item => {
            this.$listContainer.append(item);
        });

        this.$listContainer.children().each(function () {
            let $this = $(this),
                pageType = $this.data('page-type');
            switch (pageType) {
                case 'page':
                    if ($this.data('page') === _this.page) {
                        $this.addClass(_this.options.activeClass);
                    }
                    break;
                case 'first':
                    $this.toggleClass(_this.options.disabledClass, _this.page === 1);
                    break;
                case 'last':
                    $this.toggleClass(_this.options.disabledClass, _this.page === _this.totalPages);
                    break;
                case 'prev':
                    $this.toggleClass(_this.options.disabledClass, _this.page === 1);
                    break;
                case 'next':
                    $this.toggleClass(_this.options.disabledClass, _this.page === _this.totalPages);
                    break;
                default:
                    break;
            }
        });
    }
}

Pagination.prototype.createRerord = (numbers) => {
    const nameRandom = ["Đại Dương Xanh", "C Thu Hằng", "Quỳnh Phan ", "Tung Nguyen", "Sâm Trần ", "KTS Trường Giang",
    "Đức Thắng", "Nguyễn Thủy"];
    const SalaryRandom = [50000000, 40000000, 45000000, 10000000];
    const eyeRandom = [20, 23, 20, 30];
    var arrList = [];
    for(var i=0 ; i<= numbers; i++) {
        arrList.push({
            name: nameRandom[Math.floor(Math.random() * nameRandom.length)],
            salary: SalaryRandom[Math.floor(Math.random() * SalaryRandom.length)],
            eye: eyeRandom[Math.floor(Math.random() * eyeRandom.length)]
        });
    }
    return arrList;
}

(() => {
    new Pagination(110).init();
})();
