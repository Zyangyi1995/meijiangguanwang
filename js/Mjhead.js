var string="";
var html="";
$.ajax({
    url:"js/info.json",
    dataType:"json",
    success:function(data){
        $.each(data.info,function(i,item){
           string+=" <li>\
       <a href=''>\
       <span class='info-title'>"+item.title+"</span>\
       <span class='info-content'>"+item.content+" </span>\
       </a>\
       </li>";
        })
       $(".mj-info ul").html(string);
       omit($(".info-title"),8,7);
    }
})
document.write('<div class="top">\
            <div class="ftl"><a class="jt" href="javascript:;" target="_blank">简体版</a> |\ <a class="ft" href="javascript:;">繁体版</a>\     </div>\
            <div class="ftr">\
                <a href="" class="wza" title="无障碍版" target="_blank"></a> \
                <a href="" class="dy" title="RSS订阅" target="_blank"></a> \
                <a href="" class="zwyx" title="政务邮箱" target="_blank"></a> \
            </div>\
        </div>\
        <div class="line"></div>\
        <div class="flash wid">\
        </div>\
        <div class="clear"></div>\
        <ul id="nav" class="nav wid">\
            <li class="nLi index">\
                <h3><a  href="../meijiang/index.html" target="_self">网站首页</a></h3>\
            </li>\
            <li class="nLi intro">\
                <h3><a href="../meijiang/intro.html" target="_self">走进梅江</a></h3>\
            </li>\
            <li class="nLi open">\
                <h3><a  href="" target="_self">政务公开</a></h3>\
            </li>\
            <li class="nLi internet">\
                <h3><a href="" target="_self">网上办事</a></h3>\
            </li>\
            <li class="nLi service">\
                <h3><a href="" target="_self">民声服务</a></h3>\
            </li>\
            <li class="nLi discuss">\
                <h3><a href="" target="_self">互动交流</a></h3>\
            </li>\
        </ul>\
    <div class="search_container wid">\
        <div class="rili"></div>\
        <div class="search">\
            <div class="searchBox">\
                    <form target="_blank" id="f1" name="f1" method="post" action="">\
                        <input class="s_text" id="qt" name="keyword" value="搜索梅州市人民政府信息和服务" type="text" onclick="test(this)">\
                        <input class="s_btn" type="submit" value="">\
                    </form>\
                    <div class="news_drop" style="display: none;">\
                        <h1>热门搜索排行</h1>\
                        <ul class="clearfix" id="rsearch">\
                            <li class="rank01">\
                                <a href="" title="政府工作报告">政府工作报告</a>\
                            </li>\
                            <li class="rank02">\
                                <a href="">梅州名人</a>\
                            </li>\
                            <li class="rank03">\
                                <a href="">环保</a>\
                            </li>\
                            <li class="rank04">\
                                <a href="">计划生育</a>\
                            </li>\
                            <li class="rank05">\
                                <a href="">江南新区</a>\
                            </li>\
                        </ul>\
                    </div>\
                    <div class="w_box"><a href="">高级搜索</a></div>\
                </div>\
        </div>\
    </div>');
//导航栏显隐
//  $("#nav").slide({
//             type: "menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
//             titCell: ".nLi", //鼠标触发对象
//             targetCell: ".sub", //titCell里面包含的要显示/消失的对象
//             effect: "slideDown", //targetCell下拉效果
//             delayTime: 300, //效果时间
//             triggerTime: 0, //鼠标延迟触发时间（默认150）
//             returnDefault: true //鼠标移走后返回默认状态，例如默认频道是"预告片"，鼠标移走后会返回"预告片"（默认false）
// })
//搜索功能
$(document).bind("click",function(e){
    $('#qt').each(function(){
        if(e.target != this){
            $('.news_drop').hide();
        }
    });

})
$("#qt").focus(function () {
    if ($(".news_drop").is(":hidden")) {
        $(".news_drop").show();
    } else {
        $(".news_drop").hide();
    }
    var value = $(this).val();
    if (value == '搜索梅州市人民政府信息和服务') {
        $(this).val('');
    }
})
$('.rili').leoweather({city:'梅州',format:'<span class="today">今天是{年}年{月}月{日}日&nbsp;&nbsp;&nbsp;星期{周}&nbsp;梅江</span><i class="icon-{图标}">&nbsp;{天气}&nbsp;{气温}℃</i>'});
 function test(obj)
        {
            if( obj.value!="搜索梅州市人民政府信息和服务" ){
               document.getElementById("qt").value="";
               document.getElementById("qt").className="s_text1";
           }else{
               document.getElementById("qt").value="";
               document.getElementById("qt").className ="s_text1";
           }
       }

       function onBluet(obj){
           if(obj.value == ""){
              document.getElementById("qt").value="搜索梅州市人民政府信息和服务";
              document.getElementById("qt").className ="s_text";
          }else{
              document.getElementById("qt").className ="s_text";
          }
      }
        function qingchu() {
            var keyword = document.getElementById("qt").value;
            if (keyword == "搜索梅州市人民政府信息和服务") {
                document.getElementById("qt").value = "";
            }
        }
 // 梅江介绍
$.ajax({
    url:"js/info.json",
    dataType:"json",
    success:function(data){
        $.each(data.intro,function(i,item){
            html+='<div class="little mr10 ftl">\
            <h3 class="lineheight32 mb10 font-size18">'+item.title+'</h3>\
            <p class="more1 "><a target="_blank" href="">更多+</a></p>\
            <img src="images/pic7.jpg" width="327" height="155">\
            <p class="ti30 lineheight28 mb10"><span class=" lin-content">'+item.content+'</span><a href="" target="_blank" class="font-red2">【详情】</a></p>\
        </div>';
        })
        $(".introduce2").html(html);
        omit($(".lin-content"),110,110)
    }
})
$(function(){
    omit($(".discuss-title"),7,7);//首页互动交流
    omit($(".table td"),8,7);//首页办事进度
    omit($(".study li a"),18,18);//首页办事进度
})

// 省略函数
function omit(obj,maxlen,minlen){
    var title=obj;
for(var i=0;i<title.length;i++){
    var com=$(title[i]).text();
    if(com.length>maxlen){
        $(title[i]).html(com.substring(0,minlen)+"...");
    }
}
}