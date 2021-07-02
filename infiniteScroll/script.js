// So we're going to create first our image container and then we'll be equal to document.
const imageContainer = document.getElementById('image-container');
// And we'll also have one for our loader while we're at it, but we're not going to use our loader for a little while.
const loader = document.getElementById('loader');
// create our photos array as our global variable.
// This time we're going to use a let instead of a constant because the value within our photos array is going to change every time we make a request.
let photosArray = []; // [] = empty array

// Unsplash API
const count = 10;
const apiKey = '4icEsUo3ePmxbnvIC4rwMVOrs9zGw_OKflR1VeovyVU';
// started as https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// added photos, random, and the count.
// notice how we are passing in the values of count and apiKey using ${}
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a>, a blank anchor element, to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from Unst Flash API






// Get photos from Unsplash API

// create another async function.
async function getPhotos() {
  // try catch statement
  try {
  // create a const for our response which is going to await reponse from FETCH req
  // which is going to fetch from our API URL that we've set above.
  const response = await fetch(apiUrl);
  // And we'll set a constant data to await.
  // The response got Jason, so the response will run through the Jason method and be returned is Json
  //* const data = await response.json(); ***this turns into the following line after creating this empty array called photosArray
  // and then we will console.log that data > line 79: Is make sure we're actually running that function so on load and we're going to get photos.
  //* console.log(data); // So back in the code within our get photos method, we can remove our console log and instead we're going to call our function display photos.
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos();
    console.log('load more');
  }
});
// Is make sure we're actually running that function so on load and we're going to get photos.

// On Load
getPhotos();