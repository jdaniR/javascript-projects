const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'lducW2D0141Ik1kgLsMAeNVAftTZzkoAxDImZFYHueU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements For Links and Photos, Add to DOM
function displayPhotos() {
	//Run function for for each object in photosArray
	photosArray.forEach((photo) => {
		// Create <a> to link to Unsplash
		const item = document.createElement('a');
		item.setAttribute('href', photos.links.html);
		item.setAttribute('target', '_blank');
		// Create <img> for Photo
		const img = document.createElement('img');
		img.setAttribute('src', photos.urls.regular);
		img.setAttribute('alt', photos.alt_description);
		img.setAttribute('title', photos.alt_description);
		//Put <img> inside <a> , then put both inside image container Element
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

// Get photos form Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		console.log(photosArray);
		displayPhotos();
	} catch (error) {
		//catch error here
	}
}

// On Load
getPhotos();
