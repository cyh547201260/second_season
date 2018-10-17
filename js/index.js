var h=window.innerHeight;
var w=window.innerWidth;
var rightAudio=document.getElementById("rightAudio");
var wrongAudio=document.getElementById("wrongAudio");
var video = document.getElementById('Bvideo');
//适配
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isAndroid||isiOS) {
    var touchstart1="touchstart";
    var touchmove1="touchmove";
    var touchend1="touchend";
    var tap1="touchstart"
}else{
    var touchstart1="mousedown";
    var touchmove1="mousemove";
    var touchend1="mouseup";
    var tap1="click"
}

document.getElementById("rightAudio").load();
document.getElementById("wrongAudio").load();

var video2 = "";
var quesNum = 1;
//视频对象
var quesVideoData = {
	1:{
		quesVideo:'images/video/quesVideo_1_v.mp4',
		preImg:'images/video/quesVideo_1_i.jpg',
		chooseBg:'images/video/quesVideo_1_choosebg.jpg',
		ansRightVideo:'images/video/quesVideo_1_right.mp4',
		ansRightVideoImg:'images/video/quesVideo_1_right_i.jpg',
		ansErrVideo:'images/video/quesVideo_1_err.mp4',
		ansErrVideoImg:'images/video/quesVideo_1_err_i.jpg',
	},
	2:{
		quesVideo:'',
		preImg:'',
		chooseBg:'images/video/quesVideo_2_choosebg.jpg',
		ansRightVideo:'images/video/quesVideo_2_right.mp4',
		ansRightVideoImg:'images/video/quesVideo_2_right_i.jpg',
		ansErrVideo:'images/video/quesVideo_2_err.mp4',
		ansErrVideoImg:'images/video/quesVideo_2_err_i.jpg',
	}
}

//结束视频
var endData = {
	videoSrc:'images/video/end.mp4',
	preImgSrc:'images/video/end_i.jpg',
	endImgSrc:'images/video/end.jpg',
}

//问题题目/选项
var quesSubData = {
	1:{
		title:'images/img/quesSub_1_title.png',
		ansA:'images/img/quesAns_1_A.png',
		ansB:'images/img/quesAns_1_B.png',
		ansC:'images/img/quesAns_1_C.png',
		answer:'C',
		resultA:'images/img/quesAns_1_A_err.png',
		resultB:'images/img/quesAns_1_B_err.png',
		resultC:'images/img/quesAns_1_C_right.png'
	},
	2:{
		title:'images/img/quesSub_1_title.png',
		ansA:'images/img/quesAns_1_A.png',
		ansB:'images/img/quesAns_1_B.png',
		ansC:'images/img/quesAns_1_C.png',
		ansD:'images/img/quesAns_1_C.png',
		answer:'C',
		resultA:'images/img/quesAns_1_A_err.png',
		resultB:'images/img/quesAns_1_B_err.png',
		resultC:'images/img/quesAns_1_C_right.png'
//		resultD:'images/img/quesAns_1_B_err.png'
	}
}

$("#startImg_1").click(function(){
	$("#startImg_2").css('display','block');
	setTimeout(function(){
		$("#startImg_1").css('display','none');
	},100)
})
$("#startImg_2").click(function(){
	$(".stu-2").css('display','block');
	setTimeout(function(){
		$("#startImg_2").css('display','none');
	},100)
})


//$(".start").click(function(){
//	$("#startImg_2").css('display','none');
//	$(".stu-2").css('display','block');
//})

$("#startStudyBtn").click(function(){
	videoPlayFun();
	$(".video-box").css('display','block');
	$(".video-box").css('z-index','99999');
	setTimeout(function(){
		$(".stu-2").css('display','none');		
	},100)
})


//控制视频播放
function videoPlayFun(state){
	var videoSrc = '';
	var imgSrc = '';
	var result = state ? state : false;
	if(quesNum == 1){
		videoSrc = quesVideoData[1]['quesVideo'];
		imgSrc = quesVideoData[1]['preImg'];
	}else if(quesNum == 2){
		videoSrc = result ? quesVideoData[1]['ansRightVideo'] : quesVideoData[1]['ansErrVideo'];
		imgSrc = result ? quesVideoData[1]['ansRightVideoImg'] : quesVideoData[1]['ansErrVideoImg'];
	}else if(quesNum == 3){
		videoSrc = result ? quesVideoData[2]['ansRightVideo'] : quesVideoData[2]['ansErrVideo'];
		imgSrc = result ? quesVideoData[2]['ansRightVideoImg'] : quesVideoData[2]['ansErrVideoImg'];
	}
	
	document.getElementById("videoPlay").removeEventListener("ended",function(){});
	$("#videoPlay").attr({"src":videoSrc,"poster":imgSrc});
	setTimeout(function(){
		document.getElementById("videoPlay").play();
	},150)
	document.getElementById("videoPlay").addEventListener('ended',function(){
		if(quesNum != 3){
			videoEnd();
		}else{
			quesEnd();
		}
	})
}
//答题结束 - 播放结尾视频
function quesEnd(){
	var videoSrc = endData.videoSrc;
	var imgSrc = endData.preImgSrc;
	var endImgSrc = endData.endImgSrc;
	document.getElementById("videoPlay").removeEventListener("ended",function(){});
	$("#videoPlay").attr({"src":videoSrc,"poster":imgSrc});
	setTimeout(function(){
		document.getElementById("videoPlay").play();	
	},150)
	document.getElementById("videoPlay").addEventListener('ended',function(){
		$(".end-img").css('display','block');
		setTimeout(function(){
			$(".video-box").css('display','none');
		},100)
		$("#endImg").attr('src',endImgSrc);
	})
}


//视频播放结束 - 隐藏视频 - 显示选择题
function videoEnd(){
	
	var obj = {
		'A':'1',
		'B':'2',
		'C':'3',
		'D':'4'
	}

	
	//显示选择题
	if(quesNum == 1){
		alert(1);
		document.getElementById("rightAudio").play();
		alert(2);
		$(".question img:eq(0)").attr("src",quesVideoData[quesNum]['chooseBg']);
		$(".question .ques-p4 img:eq(0)").attr("src",quesSubData[quesNum]['title']);
		$(".question .ques-p4 img:eq(1)").attr("src",quesSubData[quesNum]['ansA']);
		$(".question .ques-p4 img:eq(2)").attr("src",quesSubData[quesNum]['ansB']);
		$(".question .ques-p4 img:eq(3)").attr("src",quesSubData[quesNum]['ansC']);
	}else if(quesNum == 2){
		alert(3);
		document.getElementById("wrongAudio").play();
		alert(4);
		$(".question img:eq(0)").attr("src",quesVideoData[quesNum]['chooseBg']);
		$(".question .ques-p4 img:eq(0)").attr("src",quesSubData[quesNum]['title']);
		$(".question .ques-p4 img:eq(1)").attr("src",quesSubData[quesNum]['ansA']);
		$(".question .ques-p4 img:eq(2)").attr("src",quesSubData[quesNum]['ansB']);
		$(".question .ques-p4 img:eq(3)").attr("src",quesSubData[quesNum]['ansC']);
//		$(".question .ques-p4 img:eq(4)").attr("src",quesSubData[quesNum]['ansD']);
//		$(".question .ques-p4 img:eq(4)").css({"margin-top":"3%","display":"initial"});
		$(".ques-p4-1").css('height','110%');
	}
	$(".question").css('display','block');
	$(".question").css('z-index','99999');
	setTimeout(function(){$(".video-box").css('display','none')},100)
	
	
//	$(".question .ques-p4 img:eq(4)").attr("src",quesSubData[quesNum]['ansD']);
//	$(".question .ques-p4 img:eq(4)").css("margin-top","3%");
//	$(".ques-p4-1").css('height','120%');
	
	
	$(".question .ques-p4 .ans-img").off('click').on('click',function(e){
		
		var ansVal = $(this).attr('ans-data');
		var ansRight = quesSubData[quesNum]['answer'];
		$(this).attr('src',quesSubData[quesNum]['result'+ansVal])
//		var imgChoose = ansRight;
//			if(ansRight == "A"){
//				imgChoose = 2;
//				console.log(222)
//			}else if(ansRight == "B"){
//				imgChoose = 3;
//				console.log(333)
//			}else if(ansRight == "C"){
//				imgChoose = 4;
//				console.log(444)
//			}else if(ansRight == "D"){
//				imgChoose = 5;
//				console.log(555)
//			}
		setTimeout(function(){			
			$(".video-box").css('display','block');
			$(".video-box").css('z-index','99999');
			$(".question .ques-p4 img:eq("+obj[ansVal]+")").attr("src",quesSubData[quesNum]['ans'+ansVal]);
			setTimeout(function(){$(".question").css('display','none');},100)
				
//			$(".question .ques-p4 img:eq("+imgChoose+")").attr("src",quesSubData[quesNum]['result'+ansRight]);
			quesNum++;
			if(ansVal == ansRight){
				videoPlayFun(true);
			}else{
				videoPlayFun(false)
			}
		},3000);

	})
}







//
//
//function turn1(){
//	var video2 = document.getElementsByClassName("first-video")[0];
//  video2.addEventListener('ended', function () {  
//      $(".section2").css("display","none");
//      $(".section3").css("display","none");
//  }, false);
//}
//$(".first_bg").on("click",function(){
//	$(".start").css("display","none");
//	$(".stu-1").css("display","block")
////	$(".section1").css("display","block");
////	$(".section1").attr("src":"images/video2.mp4","poster":"images/video2.jpg");
////	document.getElementById("Bvideo").play();
//})
//$(".str-stu").on("click",function(){
//	$(".stu-1").css("display","none");
//  $(".stu-2").css("display","block");
//
//})
//$(".stu-2").on("click",function(){
//	$(".stu-2").css("display","none");
//	$(".section1").css("display","block");
//	$("#Bvideo").attr({"src":"images/video2.mp4","poster":"images/video2.jpg"});
//	document.getElementById("Bvideo").play();
//	var video1 = document.getElementById("Bvideo");
//video1.addEventListener('ended', function () {
//	$(".section1").css("display","none");
//	$(".question").css("display","block");
//	$(".question img:eq(0)").attr("src","images/choose3.jpg");
//	$(".question .ques-p4 img:eq(0)").attr("src","images/p2.png");
//	$(".question .ques-p4 img:eq(1)").attr("src","images/p2.1.png");
//	$(".question .ques-p4 img:eq(2)").attr("src","images/p2.2.png");
//	$(".question .ques-p4 img:eq(3)").attr("src","images/p2.3.png");
////	$(".question").html(`<img src="images/choose3.jpg" alt="" class="ques-bg"/>
////  		<div class="ques-p4">
////  			<img src="images/p2.png" alt="" class="ques-p4-1" data=""/>
////  			<img src="images/p2.1.png" alt="" class="ques-p4-2" data="1"/>
////  			<img src="images/p2.2.png" alt="" class="ques-p4-3" data="2"/>
////  			<img src="images/p2.3.png" alt="" class="ques-p4-4" data="3"/>
////  		</div>`);
//}, false);
//})
//  $(".ques-p4 img").on("click",function(){
//		if($(this).attr("data") == ""){
//			return false;
//		}
//		$(".question").css("display","none");
//	//	$(".section2").css("display","block");
//	//	document.getElementById("right").play();
//		if($(this).attr("data") == 1){
//			$(".section2").css("display","block");
//			$("#right").attr({"src":"images/video4.mp4","poster":"images/rig-video-4.jpg"});
////			$(".section2").html('<video id="right" class="first-video" poster="images/rig-video-4.jpg" width="100%" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="images/video4.mp4"></video>');
//			turn1();
//			document.getElementById("right").play();
//		}else{
//			$(".section3").css("display","block");
//			$("#right").attr({"src":"images/video5.mp4","poster":"images/wro-video-5.jpg"});
////			$(".section3").html('<video id="wrong" class="first-video" poster="images/wro-video-5.jpg" width="100%" class="video" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="images/video5.mp4"></video>');
//			turn1();
//			document.getElementById("wrong").play();
//		}
//	})