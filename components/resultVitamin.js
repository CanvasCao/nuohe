var resultVitamin = Vue.extend({
    props: ["imgUrl",],

    data: function () {
        return {}
    },


    template: '\
    <div class="resultSection">\
        <div class="resultHeader"  @click="toggleSilde">饮食建议</div>\
        <div class="resultContent">\
            <div style="margin-bottom: 1rem;">针对您的基因性能评价结果，为您提供相应的饮食建议和相应的补充剂量。</div>\
            <div><img :src=imgUrl width="100%"></div>\
        </div>\
    </div>\
    ',

    created: function () {
        var that = this;
    },
    methods: { toggleSilde: function () {
        var that = this;
        $(that.$el).find('.resultContent').slideToggle();
    },},
    mounted: function () {
        var that = this;

    },
    computed: {},
    components: {}


})
