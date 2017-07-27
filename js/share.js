onload = function () {
    controller.directp({
        php: 'getWxConfig.php',
        params: {url: location.href.split('#')[0]}
    }, function (data) {
        // alert(JSON.stringify(data));
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appid, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
        });

        wx.error(function (res) {
            alert(JSON.stringify(res))
        });
        wx.ready(function () {
            if (searchJson.orderid && searchJson.username) {
                var title = '诺禾致源';
                var desc = searchJson.username+ '的美肤基因检测报告';
                var link = location.hostname + '/apps_T1/nuohe/html/welcome.html?' + jsonToSearch({
                        orderid: searchJson.orderid,
                        username: searchJson.username,
                    });
                var imgUrl = location.hostname + '/apps_T1/nuohe/img/jimi/logo.jpg';


                wx.onMenuShareAppMessage({
                    title: title,
                    desc: desc,
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function (e) {
                        // alert(JSON.stringify(e));
                    },
                    cancel: function (e) {
                        // alert(JSON.stringify(e));
                    }
                });

                wx.onMenuShareTimeline({
                    title: title + '-' + desc, // 分享标题
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // alert(JSON.stringify(e));
                    },
                    cancel: function () {
                        // alert(JSON.stringify(e));
                    }
                });
            } else {
                wx.hideOptionMenu();
            }


        });


    });
}
