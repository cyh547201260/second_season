var loaderimages = {
    progress : $(".load_val"),
    init : function() {
        this.preload();
    },

    preload : function() {
        var _this = this;
        _this.preloadAssets(_this.allImages, "", function(e) { 
            var percent = Math.floor((e.completedCount / e.totalCount)*100);
            _this.setPreloaderPercent(percent)
        }, function(e) {
            _this.loaderComplete();
        });
    },

    preloadAssets : function(assets, prefix, progress, complete) {
        var imageTypes = ['jpg', 'png', 'jpeg','gif'];
        var loader = new PxLoader();
        for(var i = 0; i < assets.length; i++) {
            var extension = assets[ i ].substr( (assets[ i ].lastIndexOf('.') +1) );

            if ($.inArray(extension, imageTypes) != -1) {
                loader.add(new PxLoaderImage(assets[i] )); 
            }
        }
        loader.addProgressListener(progress);
        loader.addCompletionListener(complete);
        loader.start();
    },

    setPreloaderPercent: function( percentage ) {
        $(".percentage").html(percentage+"%");
    },

    loaderComplete : function(){
        $(".loading").hide();
    },
        
    allImages: [
        "images/img/p0.1.png",
        "images/img/quesAns_1_A_err.png",
        "images/img/quesAns_1_A.png",
        "images/img/quesAns_1_B_err.png",
        "images/img/quesAns_1_B.png",
        "images/img/quesAns_1_C_right.png",
        "images/img/quesAns_1_C.png",
        "images/img/quesSub_1_title.png",
        "images/img/right.png",
        "images/img/s1.png",
        "images/img/s2.png",
        "images/img/wrong.png",
        "images/video/end_i.jpg",
        "images/video/end.jpg",
        "images/video/end.mp4",
        "images/video/first.jpg",
        "images/video/quesVideo_1_choosebg.jpg",
        "images/video/quesVideo_1_err_i.jpg",
        "images/video/quesVideo_1_err.mp4",
        "images/video/quesVideo_1_i.jpg",
        "images/video/quesVideo_1_right_i.jpg",
        "images/video/quesVideo_1_right.mp4",
        "images/video/quesVideo_1_v.mp4",
        "images/video/quesVideo_2_choosebg.jpg",       
        "images/video/quesVideo_2_err_i.jpg",
        "images/video/quesVideo_2_err.mp4",
        "images/video/quesVideo_2_right_i.jpg",
        "images/video/quesVideo_2_right.mp4"
    ]
};

$(function(){
    loaderimages.init();
})