function () {
	var names=["Yaakov","Jon","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
	for (var i =0;i<names.length; i++) {
		var  firstletter=names[i].charAt(0).tolowerCase();
	if (firstletter==='j') {
		byeSpeaker.speak(names[i]);
	}
	else{
		helloSpeak.speak(names[i]);
	}
	}
	// body...
}) ();