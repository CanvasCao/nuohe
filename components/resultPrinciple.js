var resultPrinciple = Vue.extend({
    props: ["pArray"],

    data: function () {
        return {
            dbclickTimer: null,
            firTime: null,
            secTime: null,
            zoom: 1,
            touchStartX: 0,
            dx: 0,//永远的偏移量
            touchEndX: 0,
            // dy:0,
            ifMaskShow: false,
            currentImgUrl: '',
        }
    },


    template: "\
    <div class='resultSection'>\
        <div class='resultHeader'  @click='toggleSilde'>机理</div>\
        <div class='resultContent'>\
            <template v-for='(item,index) in pArray'>\
                <div style='margin: 1.5rem 0 1.5rem;font-size: 1rem;'>{{item.desc}}</div>\
                <div><img @click='checkFullScreen($event)' :src=item.imgUrl style='width: 100%;display: block;margin: 0 auto;'></div>\
            </template>\
        </div>\
        <div id='picCheckMask' @click='clickMask' v-show='ifMaskShow'>\
            <img ref='maskimg' :src=currentImgUrl\
             @touchstart='touchstart($event)'\
             @touchmove='touchmove($event)'\
             @touchend='touchend($event)'>\
        </div>\
    </div>\
    ",

    created: function () {
        var that = this;
    },
    methods: {
        toggleSilde: function () {
            var that = this;
            $(that.$el).find('.resultContent').slideToggle();
        },
        touchstart: function (e) {
            var that = this;
            if (that.zoom == 2) {
                that.touchStartX = (e.touches[0].clientX);
            }
        },
        touchmove: function (e) {
            var that = this;
            if (that.zoom == 2) {
                var dx = e.touches[0].clientX - that.touchStartX;
                that.dx = (dx + that.touchEndX);
                $(that.$refs.maskimg).css({transform: 'translateX(-50%) translateY(-50%) translate3d(' + that.dx + 'px, 0px, 0px)'});
            }
        },
        touchend: function (e) {
            var that = this;
            if (that.zoom == 2) {
                that.touchEndX = that.dx;
            }
        },
        checkFullScreen: function (e) {
            var that = this;

            setTimeout(function () {
                that.ifMaskShow = true;
                that.currentImgUrl = e.target.src;
                $(that.$refs.maskimg).css({width: '80%'})
                    .css({transform: 'translateX(-50%) translateY(-50%) translate3d(0px, 0px, 0px)'})
                    .animate({width: '100%'});
            }, 400)
        },

        clickMask: function () {
            var that = this;

            //第一次点击
            if (!that.firTime) {
                that.firTime = new Date().getTime();
                that.dbclickTimer = setTimeout(function () {
                    that.ifMaskShow = false;
                    that.firTime = null;
                }, 400)
            } else {
                that.secTime = new Date().getTime();
                if ((that.secTime - that.firTime ) <= 400) {
                    clearTimeout(that.dbclickTimer);
                    that.firTime = null;
                    that.secTime = null;

                    if (that.zoom == 1) {
                        $(that.$refs.maskimg).animate({width: '200%'});
                        that.zoom = 2;
                    } else {
                        $(that.$refs.maskimg)
                            .animate({width: '100%'})
                            .css({transform: 'translateX(-50%) translateY(-50%) translate3d(0px, 0px, 0px)'});
                        that.zoom = 1;
                        that.dx = 0;
                        that.touchEndX = 0;
                    }
                }
            }


        }
    },
    mounted: function () {
        var that = this;

    },
    computed: {}


})
