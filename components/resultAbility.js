var resultAbility = Vue.extend({
    props: [
        'abilityName',
        'abilityResult',
        'dataTable',
        'yourScore',
        'chineseScore',
        'tags',
    ],

    data: function () {
        return {
            tagPositionArray: [
                {left: '65%', top: '0%'},
                {left: '70%', top: '40%'},
                {left: '65%', top: '80%'},
                {right: '65%', top: '0%'},
                {right: '70%', top: '40%'},
                {right: '65%', top: '80%'},
            ],
        }
    },


    template: '\
     <div class="resultSection">\
     \
      <div class="resultHeader" @click="toggleSilde">{{abilityName}}</div>\
      \
      <div class="resultContent">\
        <div class="recon-title">您的基因检测结果</div>\
        <div class="recon-cirCon">\
            <img src="../img/xingneng.png">\
            <div class="recon-cirTxt">{{abilityResult}}</div>\
            <template v-for="(item,index) in tags">\
                <div class="recon-tag" :style="getTagStyle(index)" :class="getTagClass(index)">{{item}}</div>\
            </template>\
        </div>\
        <div class="recon-tabBtns"><span class="current">基因位点详情</span><span>得分详情</span></div>\
        \
         <div class="recon-tabUl">\
         \
            <div class="recon-tabLi"><gene-table :data-table="dataTable"></gene-table></div>\
            <div class="recon-tabLi"><peity-circle :your-score="yourScore" :chinese-score="chineseScore"></peity-circle></div>\
         </div>\
      </div>\
     </div>\
    ',

    created: function () {
        var that = this;
    },
    methods: {
        toggleSilde: function () {
            var that = this;
            $(that.$el).find('.resultContent').slideToggle();
        },
        getTagStyle: function (index) {
            return this.tagPositionArray[index];
        },
        getTagClass: function (index) {
            //大于2的是
            if (index > 2) {
                return 'recon-tagLeft';//位置在左边的箭头在右边...
            } else {
                return 'recon-tagRight';
            }
        }
    },
    mounted: function () {
        var that = this;

        //时间紧迫 jq凑数一下...
        var $C = $(this.$el);
        $C.find('.recon-tabBtns>span').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            var index = $(this).index();
            $C.find('.recon-tabLi').eq(index).fadeIn().siblings().hide();
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
