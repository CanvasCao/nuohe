var peityCircle = Vue.extend({
    props: ['yourScore', 'chineseScore','autoPlay'],
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
                             <div><span class="spec" style="font-size: 1.5rem;">{{yourScore}}</span><span style="font-size: 0.8rem;">分</span></div>\
                             <div style="font-size: 1rem;">您的得分</div>\
                          </div>\
                      </div>\
                      <div class="recon-peityRight"><div>您的得分：{{yourScore}}分</div><div>中国人平均水平：{{chineseScore}}分</div></div>\
                      <div style="clear:both;"></div>\
         </div>\
         \
         <div class="recon-tabLiRow">\
             <div class="recon-bar">\
                <span class="low">低</span>\
                <span class="high">高</span>\
                <span class="youScore" :style="calYourScorePos()"><span>你的得分</span></span>\
                <span class="chineseScore" :style="calChiScorePos()"><span>中国人平均水平</span></span>\
             </div>\
         </div>\
    </div>\
    ',

    created: function () {
        var that = this;
    },
    methods: {
        calYourScorePos: function () {
            if (Math.abs(this.yourScore - this.chineseScore) < 3) {
                if ((this.yourScore - this.chineseScore) > 0) {
                    return {left: (parseFloat(this.chineseScore) + 3) + '%'};
                } else if ((this.yourScore - this.chineseScore) < 0) {
                    return {left: (parseFloat(this.chineseScore) - 3) + '%'};
                } else {
                    return {left: this.yourScore + '%'};
                }
            }
            return {left: this.yourScore + '%'};
        },
        calChiScorePos: function (score) {
            return {left: this.chineseScore + '%'};
        }
    },
    mounted: function () {
        var that = this;

        //tab栏切换...
        var $C = $(this.$el);
        var $circle = $C.find(".recon-peityCir");
        $circle.attr('data-peity', '{ "fill": ["#3285FE", "#eeeeee"], "innerRadius": ' + $(window).width() / 375 * 12 * 3.2 + ', "radius": ' + $(window).width() / 375 * 12 * 3.5 + ' }');

        console.log(typeof that.autoPlay)

        if(that.autoPlay){
            var count = 0;
            var timer = setInterval(function () {
                $circle.html((count += 0.5).toString() + '/100').peity("donut");
                if (count >= that.yourScore) {
                    clearInterval(timer);
                }
            }, 2);
        }else{
            $circle.html(that.yourScore.toString() + '/100').peity("donut");
        }







    },
    computed: {}


})
