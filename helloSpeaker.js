(function (window) {
	var helloSpeaker={};
	var speakWord="hello";
	helloSpeaker.speak=function speak(names){
		consol.log(speakWord+""+names);
	}
	// body...
	window.helloSpeaker =helloSpeaker;
})(window);