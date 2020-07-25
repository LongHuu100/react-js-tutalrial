// https://www.js-tutorials.com/jquery-tutorials/simple-example-pagination-using-jquery-bootstrap/

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
        this.displayRecords = this.records.slice(displayRecordsIndex, endRec);
        this.renderHtml();
        this.renderPage();
    },
    buildListItems: function () {
        var listItems = [];
        // First Link
        listItems.push(this.buildItem('First', 1, 'first'));

        // Pre Link
        var prev = this.page > 2 ? (this.page - 1) : 1;
        listItems.push(this.buildItem('Prev', prev, 'prev'));

        // Page Link
        for (var i = 0; i < this.totalPages; i++) {
            listItems.push(this.buildItem(i + 1, i + 1, 'page'));
        }

        // Next Link
        var next = this.page < this.totalPages ? this.page + 1 : this.totalPages;
        listItems.push(this.buildItem('Next', next, 'next'));

        // Last Link
        listItems.push(this.buildItem('Last', this.totalPages, 'last'));
        return listItems;
    },
    buildItem: function (text, page, type = 'page') {
        var $itemContainer = $('<li></li>'),
            $itemContent = $('<a></a>');
        $itemContainer.data('page', page);
        $itemContainer.data('page-type', type);
        $itemContainer.attr("class", "page-item");
        $itemContainer.append($itemContent.attr('href', "#").addClass("page-link").html(text));
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
    new Pagination(105).init();
})();