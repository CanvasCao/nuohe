var resultDocumentation = Vue.extend({
    props: ["documentHtml",],

    data: function () {
        return {}
    },


    template: '\
    <div class="resultSection">\
        <div class="resultHeader"  @click="toggleSilde">参考文献</div>\
        <div class="resultContent">\
            <div v-html="documentHtml"></div>\
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
    },
    mounted: function () {
        var that = this;

    },
    computed: {},
    components: {}


})
