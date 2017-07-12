var resultAbility = Vue.extend({
    props: [],

    data: function () {
        return {
            dataTable: [
                {
                    b: false,
                    data: ["检测基因", "Rs-Number", "正常基因", "你的基因"]
                },
                {
                    b: false,
                    data: ["IRF4", "rs1001179", "CC", "CC"],
                },
                {
                    b: true,
                    data: ["IRF4", "rs1001179", "CC", "CC"],
                },
                {
                    b: false,
                    data: ["IRF4", "rs1001179", "CC", "CC"],
                },

            ],
        }
    },


    template: '\
     <div class="resultSection">\
     \
      <div class="resultHeader">晒黑反应</div>\
      \
      <div class="resultContent">\
        <div class="recon-title">您的基因检测结果</div>\
        <div class="recon-cirCon"><img src="../img/xingneng.png"><div class="recon-cirTxt">性能弱</div></div>\
        <div class="recon-tabBtns"><span class="current">基因位点详情</span><span>得分详情</span></div>\
        \
         <div class="recon-tabUl">\
            <div class="recon-tabLi">\
            <table class="recon-table">\
            <template v-for="(item,index) in dataTable">\
                <tr :class="trClassName(index)">\
                <template v-for="(item2,index2) in item.data"><td>{{item2}}</td></template>\
                </tr>\
            </template>\
            </table>\
            <div class="recon-tableExplain">注： <span class="spec">蓝色</span>字体为突变基因和基因型</div>\
         </div>\
            <div class="recon-tabLi">\
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
                 <div class="recon-tabLiRow">\
                <div class="recon-bar"><span class="low">低</span><span class="high">高</span><span class="youScore"><span>你的得分</span></span><span class="chineseScore"><span>中国人平均水平</span></span></div>\
           </div>\
            </div>\
         </div>\
      </div>\
     </div>\
    ',

    created: function () {
        var that = this;
    },
    methods: {
        trClassName: function (index) {
            var that = this;
            return that.dataTable[index].b ? "spec" : "";
        }
    },
    mounted: function () {
        var that = this;


        //tab栏切换...
        $('.recon-tabBtns>span').click(function () {
            $(this).addClass('current').siblings().removeClass('current');

            var index = $(this).index();
            $('.recon-tabLi').eq(index).fadeIn().siblings().hide();
        }).eq(0).click();


        $(".recon-peityCir").attr('data-peity', '{ "fill": ["#3285FE", "#eeeeee"], "innerRadius": ' + $(window).width() / 375 * 12 * 3.2 + ', "radius": ' + $(window).width() / 375 * 12 * 3.5 + ' }');


        //圆环...
        var $circle = $(".recon-peityCir")
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
