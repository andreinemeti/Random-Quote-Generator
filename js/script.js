

var quotes = [{
  "attrib": "Steve Jobs",
  "quote": "Design is not just what it looks like and feels like. Design is how it works."
}, {
  "attrib": "Steve Jobs",
  "quote": "Innovation distinguishes between a leader and a follower."
}, {
  "attrib": "Albert Einstein",
  "quote": "Reality is merely an illusion, albeit a very persistent one."
}, {
  "attrib": "Albert Einstein",
  "quote": "If you can't explain it simply, you don't understand it well enough."
}, {
  "attrib": "Albert Einstein",
  "quote": "Strive not to be a success, but rather to be of value."
}, {
  "attrib": "Steve Jobs",
  "quote": "Your time is limited, so don’t waste it living someone else’s life."
}, {
  "attrib": "Bill Gates",
  "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
}, {
  "attrib": "Albert Einstein",
  "quote": "Science without religion is lame, religion without science is blind."
}, {
  "attrib": "Henry Ford",
  "quote": "Whether you think you can or you think you can’t, you’re right."
}];

randomImage(); //get a random image when the page loads
loadQuote(); //get a random quote when the page loads

var loadQuoteBtn = document.getElementById("loadQuote")
loadQuoteBtn.addEventListener("click", loadQuote);
function randomImage() {
	var randomImage;
	var img = document.getElementById("img");
	
	var CodingImages = ['url("img/coding/1.jpg', 'url("img/coding/2.jpg', 'url("img/coding/3.jpg', 'url("img/coding/4.jpg', 'url("img/coding/5.jpg', 'url("img/coding/6.jpg', 'url("img/coding/7.jpg','url("img/coding/8.jpg','url("img/coding/9.jpg', 'url("img/coding/10.jpg'];
	for (var x = 0; x< CodingImages.length; x++) {
		randomImage = CodingImages[Math.floor(Math.random() * CodingImages.length)]
	}

		img.style.backgroundImage = randomImage //change the image each time the pages is refreshed
	}


function loadQuote() {
randomImage();
currentQuote = document.getElementById("quoteText");
currentAuthor = document.getElementById("author")


    	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
     	currentQuote.innerHTML = randomQuote.quote;
     	currentAuthor.innerHTML = "-" + " " + randomQuote.attrib;

  };



//share 

var tweet = document.getElementById("tweet");
tweet.addEventListener("click", function() {
tweet.setAttribute("href", "https://twitter.com/intent/tweet?text=" + 
	encodeURIComponent('"' + currentQuote.innerHTML + '" ' + currentAuthor.innerHTML));
});

var googlePlus = document.getElementById("googlePlus");
googlePlus.addEventListener("click", function() {
googlePlus.setAttribute("href", "https://plus.google.com/share?text=" + 
	encodeURIComponent('"' + currentQuote.innerHTML + '" ' + currentAuthor.innerHTML));
});

var facebook = document.getElementById("facebook");
facebook.addEventListener("click", function() {
facebook.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/andreimarian/full/LeXwLQ/&text=" + 
	encodeURIComponent('"' + currentQuote.innerHTML + '" ' + currentAuthor.innerHTML));
});
