var honeyComb = Vue.extend({
    props: ['honeyCombArray'],

    data: function () {
        return {
            dX: -4,
            dY: -10,
            xRate: 7.7,
            yRate: 21.4,
            honeyStyleArr: [
                {left: 5, top: 2},
                {left: 7, top: 2},
                {left: 6, top: 3},
                {left: 4, top: 1},
                {left: 2, top: 1},//5
                {left: 4, top: 3},
                {left: 9, top: 2},
                {left: 3, top: 2},
                {left: 1, top: 2},
                {left: 11, top: 2},//10
                {left: 2, top: 3},
                {left: 10, top: 3},
            ],
        }
    },


    template: '\
     <div class="honeyContainer">\
          <transition-group name="list-complete">\
            <template v-for="(item,index) in honeyCombArray">\
            <div @click="toJimiComposition($event,index)" :style="honeyCombStyle(index)" v-bind:key="item" class="honeyComb list-complete-item"  :class="honeyCombClassName(index)">\
                <span class="honeyTxt">{{sliceStr(item.name)}}</span>\
            </div>\
            </template>\
          </transition-group>\
    </div>',

    created: function () {
        var that = this;
    },
    methods: {
        sliceStr: function (name) {
            if (name.length > 6) return name.slice(0, 6) + '...'
            else return name
        }
        ,
        toJimiComposition: function (e, index) {
            var that = this;
            location.href = 'jimiComposition.html?id=' + that.honeyCombArray[index].id;
        }
        ,
        honeyCombStyle: function (index) {
            var that = this;

            var json = {
                left: (that.honeyStyleArr[index].left * that.xRate + that.dX) + "%",
                top: (that.honeyStyleArr[index].top * that.yRate + that.dY) + "%",
                transition: "all " + index / 10 + "s ease"
            };
            return json;

        }
        ,
        honeyCombClassName: function (index) {
            var res = (index % 2 != 0) ? "alter" : "";//alter
            return res;
        }
    },
    mounted: function () {
        var that = this;
    },
    computed: {}


})
