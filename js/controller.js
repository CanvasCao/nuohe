//response.js
;(function () {
    var standardWidth = 375;
    var standardFontSize = 12;

    $('html').attr({'data-dpr': 2})
        .css({
            'font-size': $(window).width() / standardWidth * standardFontSize + 'px',
            width: '100%',
            height: '100%',
            //overflow: 'hidden'
        })
})()


//ajax封装json jsonp 本地json用direct 服务端jsonp用directp...
;
(function (w, d, $, undefined) {
    window.debug = true;
    var jimiHost = 'http://n1.jimi.la/Novogene/';
    var controller = {};
    controller.index = 10000;
    controller.directp = function (json, cb, cbError) {
        var jsonpCallback = json.jsonpCallback || ('jsonpCallback' + controller.index++);
        $.ajax({
            type: "get",
            url: jimiHost + json.php,
            data: json.params || {},
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            jsonpCallback: jsonpCallback,
            // timeout: 5000,
            success: function (data) {
                if (typeof data == 'string') {
                    data = JSON.parse(data);
                }
                cb(data);
            },
            error: function (err) {
                console.log('ERROR!');
                console.log(JSON.stringify(err));
                // cbError(err);
            }
        });
    };
    controller.direct = function (json, cb, cbError) {
        $.ajax({
            type: "get",
            url: '../json/' + json.php,
            data: json.params || {},
            success: function (data) {
                if (typeof data == 'string') {
                    data = JSON.parse(data);
                }
                cb(data);
            },
            error: function (err) {
                // console.log('ERROR!');
                // console.log(JSON.stringify(err));
                // cbError(err);
            }
        });
    };
    w.controller = controller;
})(window, document, $)

//小菊花...
;
(function (w, d, $, undefined) {
    var loaderIndex = 0;
    var loaderHelper = {
        $container: null,
        init: function () {
            var that = this;
            that.createDom();
            that.initCSS();
            that.bindEvent();
        },
        createDom: function () {
            var that = this;
            $('body').append(
                '<div id="loader">' +

                '<div id="loaderMiddle">' +

                '<div class="ball-clip-rotate"><div></div></div>' +
                '<div style="text-align: center;font-size: 1.0rem;color: white;" id="loaderText"></div>' +

                '</div>' +
                '</div>'
            );

            that.$container = $('#loader');
            that.$text = that.$container.find('#loaderText');

        },
        initCSS: function () {
            var that = this;
        },
        bindEvent: function () {
            var that = this;
        },
        show: function (json) {
            var that = this;
            if (that.$container) {
                that.$container.show();
            } else {
                that.init();
                that.$container.show();
            }
            var json = json || {};
            that.setText(json.text || '加载中...');
        },
        hide: function () {
            var that = this;
            if (that.$container) {
                that.$container.hide();
            }
        },
        setText: function (text) {
            var that = this;
            that.$text.html(text);
        }
    };

    window.loaderHelper = loaderHelper;
})(window, document, $);

//globalManager 全局...
;
(function (w, d, $, undefined) {
    var globalManager = {};
    var GM = globalManager;
    w.GM = w.globalManager = globalManager;
})(window, document, $);


//封装$_GET
;
(function (w, d, $, undefined) {
    String.prototype.searchToJson = function () {
        var search = window.location.search.replace('?', "");
        var kvArr = search.split('&');
        var finalJson = {};
        for (i = 0; i < kvArr.length; i++) {
            var kvSplit = kvArr[i].split('=');
            finalJson[kvSplit[0].toLowerCase()] = decodeURIComponent(kvSplit[1]);
        }
        return finalJson;
    };

    window.jsonToSearch = function (json) {
        var arr = [];
        for (var k in json) {
            arr.push(k + '=' + json[k]);
        }
        return arr.join('&');
    };
})(window, document, $);