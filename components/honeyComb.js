var honeyComb = Vue.extend({
    props: [],

    data: function () {
        return {
            dX: -3,
            dY: -15,
            xRate: 8.2,
            yRate: 22.4,
            honeyArr: [
                {left: 2, top: 1, color: 'white'},
                {left: 3, top: 2},
                {left: 5, top: 2, color: 'white'},
                {left: 4, top: 1},
                {left: 5, top: 2, color: 'white'},//5
                {left: 1, top: 2},
                {left: 7, top: 2, color: 'white'},
                {left: 9, top: 2},
                {left: 10, top: 3, color: 'white'},
                {left: 6, top: 3},//10
            ],
            items: [],
        }
    },


    template: '\
     <div class="honeyContainer">\
          <transition-group name="list-complete">\
            <template v-for="(item,index) in items">\
            <div :style="honeyCombStyle(index)" v-bind:key="item" class="honeyComb list-complete-item"  :class="honeyCombClassName(index)">\
                <span class="honeyTxt">{{item}}</span>\
            </div>\
            </template>\
          </transition-group>\
    </div>',

    created: function () {
        var that = this;
    },
    methods: {
        honeyCombStyle: function (index) {
            var that = this;

            var json = {
                left: (that.honeyArr[index].left * that.xRate + that.dX) + "%",
                top: (that.honeyArr[index].top * that.yRate + that.dY) + "%",
                transition: "all " + index / 10 + "s ease"
            };

            return json

        },
        honeyCombClassName: function (index) {
            var res = (this.honeyArr[index].color == "white") ? "alter" : "";
            return res;
        }
    },
    mounted: function () {
        var that = this;
        this.items = ['抗过敏抗过敏', '抗过敏', '抗过敏抗过敏', '抗过敏', '抗过敏抗过敏', '抗过敏', '抗过敏抗过敏', '抗过敏', '抗过敏抗过敏', '抗过敏'];
    },
    computed: {}


// :class="(honeyArr[index].color=="white")?"alter":""
})
