$(function(){
    // 点击pc端菜单项改变背景颜色
    $('.pc-nav').delegate('.nav-item', 'click', function () {
        if (!$(this).hasClass('nav-item-isClick')) {
            if ($('.nav-item-isClick').length > 0) {
                $('.nav-item-isClick').removeClass('nav-item-isClick');
            }
            $(this).addClass('nav-item-isClick');
        }
    });
    // 绑定点击手机端菜单图标动画，并展开或关闭菜单
    $('.mobile-nav').on('click', function () {
        if (!$('.m-menu').hasClass('show')) {
            $('.bar-2').delay(100);
            $('.bar-3').delay(200);
            $('.bar').animate({ 'right': '-30px', 'opacity': '0' }, 300);
            $('.fork').delay(300)
            $('.fork').animate({ "width": "42px", 'opacity': '1' }, 500);
            $('.m-menu').addClass('show');
            $('body').addClass('noscroll');
        } else {
            $('.m-menu').removeClass('show');
            $('.fork').animate({ "width": "0", 'opacity': '0' }, 500);
            $('.bar-2').delay(100);
            $('.bar-3').delay(200);
            $('.bar').animate({ 'right': '10px', 'opacity': '1' }, 300);
            $('body').removeClass('noscroll');
            $('.fa-angle-down').attr("class", "fa-solid fa-angle-right");
            $('.dropdown').animate({ 'height': '0' }, 400);
        }
    });
    // 点击手机端菜单项改变背景颜色和图标，展开或关闭菜单项
    $('.m-menu-item').on('click', function () {
        if ($(this).find('.fa-angle-right').length > 0) {
            $(this).find('.fa-angle-right').attr("class", "fa-solid fa-angle-down");
            let height = 62 * $(this).children('.dropdown').children().length + 'px';
            $(this).children('.dropdown').animate({ 'height': height }, 400);
        } else if ($(this).find('.fa-angle-down').length > 0) {
            $(this).find('.fa-angle-down').attr("class", "fa-solid fa-angle-right");
            $(this).children('.dropdown').animate({ 'height': '0' }, 400);
        } else {
            window.location.href = $(this).children('a').attr('href');
            $('.m-menu').removeClass('show');
            $('.fork').animate({ "width": "0", 'opacity': '0' }, 500);
            $('.bar-2').delay(100);
            $('.bar-3').delay(200);
            $('.bar').animate({ 'right': '10px', 'opacity': '1' }, 300);
        }
    });
    // 返回顶部锚点事件 
    let foot_h = $('footer').innerHeight();
    let doc_h = $(document).height();
    let win_h = $(window).height();
    $(window).on('scroll', function () {
        let top = $(this).scrollTop();
        if (top > 0) $('.anchor').fadeIn(300);
        else $('.anchor').fadeOut(300);
        if (top + win_h >= doc_h - foot_h + win_h * 0.08) $('.anchor .anchor-body a p, .anchor .anchor-body a i').css('color', '#fff');
        else $('.anchor .anchor-body a p, .anchor .anchor-body a i').css('color', '#000');
    })
    $(window).ready(function () {
        let top = $(this).scrollTop();
        if (top > 0) $('.anchor').fadeIn(300);
        else $('.anchor').fadeOut(300);
        if (top + win_h >= doc_h - foot_h + win_h * 0.08) $('.anchor .anchor-body a p, .anchor .anchor-body a i').css('color', '#fff');
        else $('.anchor .anchor-body a p, .anchor .anchor-body a i').css('color', '#000');
    })
})