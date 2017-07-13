var resultAbility = Vue.extend({
    props: [],

    data: function () {
        return {}
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
         \
            <div class="recon-tabLi"><gene-table></gene-table></div>\
            <div class="recon-tabLi"><peity-circle></peity-circle></div>\
         </div>\
         </div>\
      </div>\
     </div>\
    ',

    created: function () {
        var that = this;
    },
    methods: {
    },
    mounted: function () {
        var that = this;

        var $C = $(this.$el);

        $C.find('.recon-tabBtns>span').click(function () {
            $(this).addClass('current').siblings().removeClass('current');

            var index = $(this).index();
            $('.recon-tabLi').eq(index).fadeIn().siblings().hide();
        }).eq(0).click();
    },
    computed: {},
    components: {
        'peity-circle': function (resolve) {
            require(['../components/peityCircle.js'],
                function () {
                    resolve(peityCircle);
                })
        },
        'gene-table': function (resolve) {
            require(['../components/geneTable.js'],
                function () {
                    resolve(geneTable);
                })
        },
    },

})
