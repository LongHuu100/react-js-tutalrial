/*
* Các e cần bổ sung thêm chức năng.
* - Khi click vào các indicators bên dưới banner sẽ chạy đến banner cần click đó.
* - Khi click vào 2 mũi tên bên phải và bên trái thì phải chuyển banner sang bên phải hoặc bên trái tương ứng
* */
function Carousel(interval) {
    const $container = $("#slidewindow");
    const $item = $(".item");
    const $indicators = $(".carousel-indicators");
    var ClassName = {
        CAROUSEL: 'carousel',
        ACTIVE: 'active'
    };
    this.current = 0;
    this.arrIndicators = [];
    this.total = $container.find($item).length;
    this.rotation = () => {
        if(this.current == this.total - 1) {
            $container.animate({
                right:'-=' + ( (this.total - 1) * 100)  + '%',
            }, 1000);
            this.current = 0;
        } else {
            $container.animate({
                right:'+=100%',
            }, 1000);
            this.current++;
        }
        this.arrIndicators.map( (item, id) => {
            if(this.current === id) {
                item.addClass(ClassName.ACTIVE);
            } else {
                item.removeClass(ClassName.ACTIVE);
            }
        })
    }
    this._interval = null;
    this.pause = () => {
        clearInterval(this._interval);
    }
    this.start = () => {
        this._interval = setInterval(this.rotation, 2000);
    }
    this.init = () => {
        var _this = this;
        $container.css({width:this.total * 100 + '%'});
        $item.find('.imgs').css({width: 100/this.total + '%'})
        $indicators.find("li").each(function( index ) {
            _this.arrIndicators.push($( this ));
        });
        this.start();
        $container.hover(this.pause, this.start)
    }
}

(() => {
    new Carousel(5000).init();
})();
