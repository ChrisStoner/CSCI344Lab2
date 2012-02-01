function main() {
	var s = new Spotter("twitter.search",
			    {q:"bieber", period:120},
			    {buffer:true, bufferTimeout:750}
			   );	
	s.register(function(tweet) {
		var profile_image = "<img src='"+tweet.profile_image_url+"' />";
		$("#tweets").append("<p>" + profile_image + tweet.text + "</p>");
	});
	s.start();

	
    //3. Make the tweets occur so the most recent are at the top
    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)
}

main();
