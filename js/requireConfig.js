requirejs.config({
    baseUrl: 'js',
    paths: {
        echarts: 'tool/echarts.min',

    },
    shim: {
        //'JME': {
        //    //These script dependencies should be loaded before loading
        //    //backbone.js
        //    deps: ['echarts'],
        //    //Once loaded, use the global 'Backbone' as the
        //    //module value.
        //    //exports: 'JME'
        //},
    }
});