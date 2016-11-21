/**
 * Created by xiongguoqing on 15/8/16.
 */
var that ={};
var domSelect =  require("../dom/querySelector");
var playList = [];
var playnode;
var init = function(opts){
    playnode = domSelect.E("#audio");
}
init();

that.setMusicSrc = function(src){
    playnode.setAttribute("src",src);
};

that.play = function(){
    playnode && playnode.play()
};
that.pause = function(){
    playnode  && playnode.pause();
}
that.getMusicPlay = function(){
    return playnode;
}
that.setVolume = function(volume){
    playnode.volume = volume;
}
that.getVolume = function(){
    return playnode.volume;
}
that.getcurrentTime = function(){
    return playnode.currentTime;
}
that.getPlayer = function(){
    return playnode;
}
module.exports = that;