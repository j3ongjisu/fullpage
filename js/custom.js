$(function () {

    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        navigation: false,
        css3: false,
        responsiveWidth: 700,
        responsiveHeight: 1200,
        afterRender: function () {
            alert('full is nothing !!!').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    });


})