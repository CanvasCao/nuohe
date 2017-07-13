var resultPrinciple = Vue.extend({
    props: [],

    data: function () {
        return {
            //机理数组
            pArray: [
                {
                    desc: '抗氧化机理：',
                    imgUrl: '../img/jili/jili1.png'
                },
                {
                    desc: '抗氧糖化机理：',
                    imgUrl: '../img/jili/jili2.png'
                },
            ],
        }
    },


    template: "\
    <div class='resultSection'>\
        <div class='resultHeader'>机理</div>\
        <div class='resultContent'>\
            <template v-for='(item,index) in pArray'>\
                <div style='margin: 1.5rem 0 1.5rem;font-size: 1rem;'>{{item.desc}}</div>\
                <div><img :src=item.imgUrl style='width: 100%;display: block;margin: 0 auto;'></div>\
            </template>\
        </div>\
    </div>\
    ",

    created: function () {
        var that = this;
    },
    methods: {},
    mounted: function () {
        var that = this;

    },
    computed: {}


})
