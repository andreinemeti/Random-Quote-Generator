randomImage(); //get a random image when the page loads
loadQuote(); //get a random quote when the page loads


var loadQuoteBtn = document.getElementById("loadQuote")
loadQuoteBtn.addEventListener("click", loadQuote);
function randomImage() {
	var randomImage;
	var img = document.getElementById("img");
	
	var AnimalImages = ['url("img/coding/1.jpg', 'url("img/coding/2.jpg', 'url("img/coding/3.jpg', 'url("img/coding/4.jpg', 'url("img/coding/5.jpg', 'url("img/coding/6.jpg', 'url("img/coding/7.jpg','url("img/coding/8.jpg','url("img/coding/9.jpg', 'url("img/coding/10.jpg'];
	for (var x = 0; x< AnimalImages.length; x++) {
		randomImage = AnimalImages[Math.floor(Math.random() * AnimalImages.length)]
	}

		img.style.backgroundImage = randomImage //change the image each time the pages is refreshed
	}


function loadQuote() {
randomImage();
currentQuote = document.getElementById("quoteText");
currentAuthor = document.getElementById("author")

  var http = new XMLHttpRequest();
  http.open("GET", "https://api.myjson.com/bins/1aytql");
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	result = JSON.parse(http.responseText);
    	var randomQuote = result[Math.floor(Math.random()*result.length)];
     	currentQuote.innerHTML = randomQuote.quote;
     	currentAuthor.innerHTML = "-" + " " + randomQuote.author;
    }
  };


  http.onerror = function() {
     document.getElementById("quoteText").innerHTML = "Unable to load quote. Please refresh the page";
};

http.send();
}

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
