/**
 * Created by xiongguoqing on 15/8/23.
 */
var that ={};
that.E = function(path){
    return document.querySelector(path);
}

that.EAll = function(path){
    return document.querySelectorAll(path);
}

module.exports = that;