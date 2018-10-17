<?php
	require_once('inc.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title></title>
		<link rel="stylesheet" href="css/index.css" />
		<audio src="images/right.mp3" id="rightAudio" autoplay></audio>
        <audio src="images/wrong.mp3" id="wrongAudio" autoplay></audio>
		<style>
    		html,body{
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }           
    	</style>
    	<!--天润统计b-->
    		<?=$meta?>
    	<!--天润统计e-->
	</head>
	<body>
		<!--1.在开始页面放点击图片
    		2.在点击完成后 开始播放视频
    		3.视频播放完毕后显示题目与选项
    		4.点击选项后 判断选项是否正确 错误 播放错误视频 然后把题目和选项在列出来
    		                                                            正确 播放正确视频 然后下一题
   -->
   		<!--设置一开始的图像与点击按钮-->
    	<div class="start">
    		<img src="images/img/s1.png" alt="" class="first_bg" id="startImg_1"/>
    		<img src="images/img/s2.png" alt="" class="str-stu" id="startImg_2"/>
    	</div>
    	<div class="stu-2">
    		<img src="images/first.jpg" alt="" class="first-tu"/>
    		<img src="images/img/p0.1.png" alt="" class="str-stu-1" id="startStudyBtn"/>
    	</div>
    	<!--开始视频播放-->
    	<div class="section1 video-box">
    		<video id="videoPlay" poster="" width="100%" class="video" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src=""></video>
    	</div>
    	<!--答题页-->
    	<div class="question">
    		<img src="" alt="" class="ques-bg"/>
    		<div class="ques-p4">
    			<img src="" alt="" class="ques-p4-1" data=""/>
    			<img src="" alt="" class="ques-p4-2 ans-img" ans-data="A"/>
    			<img src="" alt="" class="ques-p4-3 ans-img" ans-data="B"/>
    			<img src="" alt="" class="ques-p4-4 ans-img" ans-data="C"/>
<!--    			<img src="" alt="" class="ques-p4-5 ans-img" ans-data="D"/>-->
    			<!--<img src="" alt="" class="judge-true"/>
    			<img src="" alt="" class="judge-false"/>-->
    		</div>
    	</div>
    	
    	<div class="end-img">
    		<img id="endImg" src=""/>
    	</div>
    	
	</body>
	

	<script src="js/jquery-2.1.1.min.js"></script>
	<script src="js/index.js"></script>
	<script src="js/loader.js"></script>
	<script src="js/m.js"></script>
		
	<!--微信分享-->
    <?php
        $type = $_SERVER['HTTP_USER_AGENT'];
        if (preg_match('/MicroMessenger/i', $type)) {
        	
        	
        	                                                    //------------------非上线不用加 但是上线时必须解开---------------------       	
            //require_once('../weixin/share.php');
    ?>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
        <script type="text/javascript">
            wx.config({
                debug: false,
                appId: '<?=isset($appId) ? $appId : 0?>',
                timestamp: '<?=isset($timestamp) ? $timestamp : 0?>',
                nonceStr: '<?=isset($nonceStr) ? $nonceStr : 0?>',
                signature: '<?=isset($signature) ? $signature :0?>',
                jsApiList: [
                  'checkJsApi',
                  'onMenuShareTimeline',
                  'onMenuShareAppMessage'
                 ]
            });
            wx.ready(function () {
                var shareData = {
                    title: '你的同学都在参加「勇往职前」，更有机会获得名企实习PASS卡，你还不来？',
                    desc: '带你走进全球顶尖名企，向梦想职位冲刺。',
                    link: 'http://h5.cyol.com/special/ywzq/m.php',
                    imgUrl: 'http://h5.cyol.com/special/ywzq/images/icon.png'
                };
                if (linkedin == 'step1') {
                    clock.play();
                };
				//微信分享
                wx.onMenuShareAppMessage(shareData);
                wx.onMenuShareTimeline(shareData);//朋友圈
            });
        </script>
        <?php
            }
        ?>


		<!--天润统计b-->
    	<div style="display:none">
    	    <script type="text/javascript">document.write(unescape("%3Cscript src='http://cl2.webterren.com/webdig.js?z=21' type='text/javascript'%3E%3C/script%3E"));</script>
    	    <script type="text/javascript">wd_paramtracker("_wdxid=000000000000000000000000000000000000000000")</script>
    	</div>
    	<!--天润统计e-->
</html>
