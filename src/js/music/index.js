var player  = require('../music/player');
var $sizzle =  require("../dom/querySelector");
var audio = player.getPlayer();
player.setMusicSrc("../static/music.mp3");
player.play();
audio.addEventListener('timeupdate',function(){
    if (!isNaN(audio.duration)) {
        //剩余时间
        var surplus = audio.duration;
        var currtime = player.getcurrentTime();
        $sizzle.E('[node="timeall"]').innerHTML = ioFunc.getTimeMinuteSecond(surplus);
        $sizzle.E('[node="currtime"]').innerHTML = ioFunc.getTimeMinuteSecond(currtime);
        $sizzle.E('[node="timeline"]').style.width =currtime/surplus*100+"%";


    };
},false);

var ioFunc = {
    "getTimeMinuteSecond" : function(time){
        time = parseInt(time);
        var strtime =time;
        if(time>60){
            var min =parseInt(time /60);
            var second = time -min*60;
            strtime = ioFunc.getShowTime(min) +":"+ioFunc.getShowTime(second);
        }else{
            strtime = "00:"+ioFunc.getShowTime(time);
        }
        return strtime;
    },
    "getShowTime" : function(num){
        return (num>=10 ? num : "0"+num);
    }

}
setTimeout(function(){
    player.setVolume(0.2)
    setTimeout(function(){
        player.pause();
        setTimeout(function(){
            player.play();
        },3000);
    },4000);
},3000);
