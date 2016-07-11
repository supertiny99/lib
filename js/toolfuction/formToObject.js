/****************************
/jquery 扩展,form 表单格式化成 对象
/ 2014-06-04 By Ahoo
****************************/
(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        $(this.serializeArray()).each(function () {
            serializeObj[this.name] = this.value;
        });
        return serializeObj;
    };
})(jQuery);