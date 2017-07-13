var peityCircle = Vue.extend({
    props: [],

    data: function () {
        return {}
    },


    //组件最外层一定要套一个父容器...
    template: '\
    <div>\
         <div class="recon-tabLiRow">\
                      <div class="recon-peityCon">\
                          <span class="recon-peityCir">3.1/100</span>\
                          <div class="recon-peityTxt">\
                             <div><span class="spec" style="font-size: 1.5rem;">66.8</span><span style="font-size: 0.8rem;">分</span></div>\
                             <div style="font-size: 1rem;">能力检测</div>\
                          </div>\
                      </div>\
                      <div class="recon-peityRight"><div>你的得分：66.8分</div><div>中国人平均水平：80.4分</div></div>\
                      <div style="clear:both;"></div>\
         </div>\
         \
         <div class="recon-tabLiRow">\
             <div class="recon-bar"><span class="low">低</span><span class="high">高</span><span class="youScore"><span>你的得分</span></span><span class="chineseScore"><span>中国人平均水平</span></span>\
         </div>\
    </div>\
    ',

    created: function () {
        var that = this;
    },
    methods: {},
    mounted: function () {
        var that = this;


        //tab栏切换...
        var $C = $(this.$el);
        var $circle = $C.find(".recon-peityCir");
        $circle.attr('data-peity', '{ "fill": ["#3285FE", "#eeeeee"], "innerRadius": ' + $(window).width() / 375 * 12 * 3.2 + ', "radius": ' + $(window).width() / 375 * 12 * 3.5 + ' }');


        //圆环...

        var count = 0;
        var timer = setInterval(function () {
            $circle.html((count += 0.5).toString() + '/100').peity("donut");
            if (count >= 66.8) {
                clearInterval(timer);
            }
        }, 2);


    },
    computed: {}


})
