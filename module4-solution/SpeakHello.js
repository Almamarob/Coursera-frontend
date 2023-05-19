
(function(window){
  var speak={};
  speak.helloSpeaker="Hello ";
  speak.sayhello=function(name){
    console.log(speak.helloSpeaker+name);
  }

   window.speakH = speak;
})(window);
