var geneTable = Vue.extend({
    props: [
        'dataTable',
    ],

    data: function () {
        return {}
    },


    template: '\
    <div>\
        <table class="recon-table">\
                <template v-for="(item,index) in dataTable">\
                    <tr :class="trClassName(index)">\
                    <template v-for="(item2,index2) in item.data">\
                        <td width="25%">{{item2}}</td>\
                    </template>\
                    </tr>\
                </template>\
        </table>\
        <div class="recon-tableExplain">注： <span class="spec">蓝色</span>字体为突变基因和基因型</div>\
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

    },
    computed: {}


})
