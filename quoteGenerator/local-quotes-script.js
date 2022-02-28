//show new quote
function newQuote() {
	// Pick a random quote from apiQuotes array
	const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
	console.log(quote);
}

newQuote();
