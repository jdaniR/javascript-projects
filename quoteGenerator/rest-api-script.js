const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// show loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// HIde Loading
function complete() {
	if (!loader.hidden) {
		quoteContainer.hidden = false;
		loader.hidden = true;
	}
}

//Get Quote from API
async function getQuote() {
	const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/';
	const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
	try {
		const response = await fetch(proxyUrl + apiUrl);
		const data = await response.json();
		//if user is blank, add 'Unkokwn'
		if (data.quoteAuthor === '') {
			authorText.innerText = 'UnKnown';
		} else {
			authorText.innerText = data.quoteAuthor;
		}
		//reduce font size for long quotes
		if (data.quoteText.length > 120) {
			quoteText.classList.add('long-quote');
		} else {
			quoteText.classList.remove('long-quote');
		}
		quoteText.innerText = data.quoteText;
		//Stop Loader, show text
		complete();
	} catch (error) {
		getQuote();
	}
}

//Tweet Quote

function tweetQuote() {
	const quote = quoteText.innerText;
	const author = authorText.innerText;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, '_blank');
}
//Event Listners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
//On Load
getQuote();
