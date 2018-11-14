var string="";
var data="";
var important="";

//首页轮播
$(".focusBox").hover(function () {
            $(this).find(".prev,.next").stop(true, true).fadeTo("show", 1)
          }, function () {
            $(this).find(".prev,.next").fadeOut()
          });

          $(".news_img").slide({
            titCell: ".num li",
            mainCell: ".pic",
            effect: "fold",
            autoPlay: true,
            trigger: "click",
                //下面startFun代码用于控制文字上下切换
                startFun: function (i) {
                  $(".news_img .txt li").eq(i).animate({ "bottom": 0 }).siblings().animate({ "bottom": -36 });
                }
              });
              $(".news_img").slide({ mainCell: ".bd ul", effect: "fold", autoPlay: true });
//首页要闻
$(".news").slide();
document.write('<div class="gov-foot wid pb20 pt10">\
    <div class="ftl mr20 pr20">\
        <span id="_span_jiucuo"><img onclick="Link(&#39;4414000001&#39;)" style="margin:0;border:0;cursor: pointer;" src="images/jiucuo.png"></span>\
        <a href="" target="_blank"><img src="images/red.png" class="mt20"></a>\
    </div>\
    <div class="gov-foot-desc ftl">\
        <div class="gov-foot-tools">\
            <a href="">联系我们</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; &nbsp;\
            <a href="">网站地图</a>&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp; &nbsp;\
            <a href="">关于我们</a>&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp; &nbsp;\
            <a href="">使用帮助</a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;\
            <a href="" target="_blank">政务邮箱</a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;\
            <a href="">网站建议</a>\
        </div>\
        Copyright 2006 www.meijiang.gov.cn All Rights Reserved<br>\
        主办：梅州市梅江区人民政府办公室&nbsp;&nbsp;承办：<a href="=">梅州市梅江区经济和信息化局</a> &nbsp;&nbsp;制作维护：梅州市梅江区信息中心<br>\
        (建议使用1366×768分辨率 IE9.0以上版本浏览器)\
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44140202000020" target="_blank"><img src="images/anbei.jpg"></a>\
        <span id="cnzz_stat_icon_1256542116"><a href="http://www.cnzz.com/stat/website.php?web_id=1256542116" target="_blank" title="站长统计"><img border="0" hspace="0" vspace="0" src="https://icon.cnzz.com/img/pic1.gif"></a></span>\
    </div>\
    <div class="clear"></div>\
</div>');

//回到顶部
  $(document).ready(function(){ 
        $('a.scrollToTop').click(function(){ 
            $('html, body').animate({
                scrollTop:0
            }, 'slow'); 
            return false; 
        }); 
    }) 
$(document).ready(function(){
        $("#scrollToTop").hide();
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#scrollToTop").fadeIn(500);
                }
                else
                {
                    $("#scrollToTop").fadeOut(500);
                }
            });
            $("#scrollToTop").click(function(){
                $('body,html').animate({ scrollTop:0 },100);
                return false;
            });
        });
    });
      //网站导航
 $(".threeScroll").hover(function () {
        $(this).find(".prev,.next").stop(true, true).fadeTo("show", 1)
      }, function () {
        $(this).find(".prev,.next").fadeOut()
      });
      $(".threeScroll").slide({ mainCell: ".dlList", effect: "leftLoop", vis: 4, autoPlay: true });
       $(".link").slide({ trigger: "mouseover", returnDefault: true });
       // 简繁体
       $('.jt').click(function() {
           $('.background').t2s();
           $(this).addClass("on");
           $(".ft").removeClass("on");
           return false;
     });
    $(".ft").click(function(){
         $('.background').s2t();
         $(this).addClass("on");
         $(".jt").removeClass("on");
         return false;
    });