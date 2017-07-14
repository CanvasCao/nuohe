var resultGuide = Vue.extend({
    props: ["honeyCombArray", "productArray", "adviseOtherArray"],

    data: function () {
        return {}
    },


    template: '\
    <div class="resultSection">\
        <div class="resultHeader">美肤指导</div>\
        <div class="resultContent">\
            <div class="resultTitleBg">护肤建议</div>\
            <div>优选成分</div>\
            <honey-comb :honey-comb-array="honeyCombArray"></honey-comb>\
            <div>产品建议</div>\
            <div class="carousel">\
                <template v-for="(item,index) in productArray">\
                    <div class="carouselSection">\
                        <img class="carouselImg" :src="item.imgUrl">\
                        <div class="carouselDesc">{{item.desc}}</div>\
                    </div>\
                </template>\
                <i v-show="productArray.length>1" class="carouselLeft ion-arrow-left-b"></i>\
                <i v-show="productArray.length>1" class="carouselRight ion-arrow-right-b"></i>\
            </div>\
            \
            <div class="resultTitleBg">其它建议</div>\
            <div class="adviseOther">\
                <template v-for="item in adviseOtherArray">\
                    <span>{{item}}</span>\
                </template>\
            </div>\
        </div>\
    </div>\
    ',

    created: function () {
        var that = this;
    },
    methods: {},
    mounted: function () {
        var that = this;

        var $C = $(this.$el);
        var $carouselSections = $C.find('.carouselSection');
        var len = $carouselSections.length;
        var $carouselLeft = $C.find('.carouselLeft');
        var $carouselRight = $C.find('.carouselRight');
        var index = 0;
        $carouselLeft.click(function () {
            var indexNext = (index + 1) >= len ? 0 : (index + 1);
            $carouselSections.eq(index).css({left: '0%'}).stop().animate({left: '-100%'});
            $carouselSections.eq(indexNext).css({left: '100%'}).stop().animate({left: '0%'});
            index = (index + 1) >= len ? 0 : (index + 1);
        });
        $carouselRight.click(function () {
            var indexNext = (index - 1) < 0 ? (len-1) : (index -1);
            $carouselSections.eq(index).css({left: '0%'}).stop().animate({left: '100%'});
            $carouselSections.eq(indexNext).css({left: '-100%'}).stop().animate({left: '0%'});
            index = (index - 1) < 0 ? (len-1) : (index -1);
        });

    },
    computed: {},
    components: {
        "honey-comb": function (resolve) {
            require(["../components/honeyComb.js"],
                function () {
                    resolve(honeyComb);
                })
        },
    }


})
