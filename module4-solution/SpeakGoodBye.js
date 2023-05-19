
(function(window){
  var speak={};
  speak.byeSpeaker="Good Bye ";
  speak.saybye=function(name){
    console.log(speak.byeSpeaker+name);
  } 
  window.speakG = speak;
})(window);
