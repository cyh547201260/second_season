<?php
    error_reporting(NULL);
    $type = $_SERVER['HTTP_USER_AGENT'];
    if (preg_match('/iPhone/i', $type) || preg_match('/Android/i', $type)) {
        header('Location:m.php');
    }
    require_once('inc.php');
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <script charset="utf-8" async="" src="http://atanx.alicdn.com/t/tanxssp.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="description" content="">
    <!--天润统计b-->
    <?=$meta?>
    <!--天润统计e-->
    <title><?=$title?></title>
    <link rel="stylesheet" href="css/main.css">
    <script type="text/javascript" src="js/jquery.js" charset="gb2312"></script>
    <script type="text/javascript">document.domain = 'h5.cyol.com';</script>
    <!--融媒-->
    <script>
        $(function(){
            var i=0;
            var li = $(".lxfscroll li");
            var n=li.length-1;
            var speed = 300;
            li.not(":first").css({left:"300px"});
            li.eq(n).css({left:"-300px"});
            lxfNext=function (){
                if (!li.is(":animated")) {
                    if (i>=n){
                        i=0;
                        li.eq(n).animate({left:"-300px"},speed);
                        li.eq(i).animate({left:"0px"},speed);
                    }else{
                        i++;
                        li.eq(i-1).animate({left:"-300px"},speed);li.eq(i).animate({left:"0px"},speed);
                    };
                    li.not("eq(i)").css({left:"300px"});
                    $(".button span").text(i+1);
                }else{};
            };
            lxfLast=function (){
                if (!li.is(":animated")) {
                    if (i<=0){
                        i=n;
                        li.eq(0).animate({left:"300px"},speed);
                        li.eq(n).animate({left:"0px"},speed);
                    }else{
                        i--;
                        li.eq(i+1).animate({left:"300px"},speed);
                        li.eq(i).animate({left:"0px"},speed);
                    };
                    li.not("eq(i)").css({left:"-300px"});
                    $(".button span").text(i+1);
                };
            };
        });
    </script>
    <!--融媒-->
    <link rel="stylesheet" href="http://bdimg.share.baidu.com/static/api/css/share_style0_16.css?v=6aba13f0.css">
    <link rel="stylesheet" href="http://bdimg.share.baidu.com/static/api/css/imgshare.css?v=a7830602.css">
</head>

<body style="font-family:宋体">
    <div class="header">
        <script language="javascript1.1" src="http://js.cyol.com/2015042014202199.js" type="text/javascript" charset="gb2312"></script>
        <script language="javascript1.1" src="http://js.cyol.com/2015041509152778.js" type="text/javascript" charset="gb2312"></script>
    </div>
    <div class="mianbody" style="width:1000px;margin:0 auto">  
    <!--第二屏 开始-->
    <div class="secondB">
        <div class="leftB">
            <div class="lB1">
                <div class="cont_h">
                    <h3></h3>
                    <h1><?=$title?></h1>        
                </div>
                <h3></h3>
                <h6>发布时间：2017-09-12　来源：中青在线　作者：中国青年报·中青在线融媒工作室</h6>
            </div>
            <div class="lB2"><iframe name="frame" id="frame" src="m.php?t=1" style="width: 448px; height: 700px; border: none;" scrolling="no"></iframe></div>
        </div>
 
        <!--  <div class="centerB">
            <div class="rTl">
            <div class="control">
            <div class="up"></div>
            <div class="num">1</div>
            <div class="down"></div>
            <script type="text/javascript">
            $(function(){
              //var src = $(window.parent.document).find("#iframe_id").attr("src");
              //alert(src); 
              //$(".input1").val(src);
              $(".num").html(1);
              var num=$(".num").html();
              //alert(num);
              $(".down").click(function(){
                  if(num>=<?=$max?>){
                      num = 1;
                  } else {
                  num++;
                  }
                  $(".num").html(num);
                  frame.test(num-1);
              });
              $(".up").click(function(){             
                if(num==1){
                  $(".num").html(1);
                }else if(num>1){
                  num--;
                  $(".num").html(num);
                };
                frame.test(num-1);
              });
              /*$('.button1').click(function(){
                  $(".input1").val().clone();
                  alert('复制成功');
              });*/
            });
            </script>
            </div>
            </div>
            </div> -->

        <div class="rightB">
            <div class="rightTop">
                <div class="line1">扫描二维码预览并分享给朋友</div>
                <div class="line2"><img width="134" src="images/erweima.jpg"></div>
                <div class="line3">你可以复制以下链接发送给朋友</div>
                <div class="line4">
                    <input class="input1" type="text" value="<?=$url?>" readonly="readonly"/>
                </div>    
            </div>
            <div class="rightBot">
                <iframe src="http://news.cyol.com/node_55922.htm" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
            </div>
        </div>
    </div>
    </div>
    <div class="clear"></div>
    <!--第二屏 结束-->
    <!--中青在线foot 开始-->
    <div class="foot">
        <script language="JavaScript1.1" src="http://js.cyol.com/2015041314130192.js" charset="gb2312"></script>
    </div>
    <!--中青在线foot 结束-->
    <!--天润统计b-->
    <div style="display:none">
        <script language="JavaScript1.1" src="http://js.cyol.com/2015011815183252.js" charset="gb2312"></script><script id="tr_statobj" src="http://cl2.webterren.com/webdig.js?z=21" type="text/javascript"></script><script type="text/javascript"> wd_paramtracker('_wdxid=000000000000000000000000000000000000000000');</script>
    </div>
    <!--天润统计e-->
</body>
</html>