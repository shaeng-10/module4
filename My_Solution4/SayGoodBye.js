(function (window) {
	var goodbyespeaker =new Object ();
	var speakWord = "Good Bye";
	goodbyespeaker.speak = function(name){

  console.log(speakWord + " " + name);

};
window.goodbyespeaker = goodbyespeaker;
})(window);
