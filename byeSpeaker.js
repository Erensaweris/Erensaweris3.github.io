(function (window) {
	var byeSpeaker={};
	var speakWord="Good Bye";
	byeSpeaker.speak=function speak(names){
		consol.log(speakWord+""+names);
	}
	// body...
	window.byeSpeaker =byeSpeaker;
})(window);