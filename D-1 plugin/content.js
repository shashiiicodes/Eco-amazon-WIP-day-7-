// Find the link to the product type on the page
const productTypeLink = document.querySelector('.a-link-normal[href*="/b/"]');
const placeMent = document.querySelector("#title");
const paymentInfoSpan = document.querySelector(".a-size-mini");



// Create new paragraph element with "Product Type" and list of product types
const slogan = document.createElement("p");
const disclaimer = document.createElement("d");
const review = document.createElement("r");



// If the link is found, extract the product type and add information about products CO2e
if (productTypeLink) {
  const productType = productTypeLink.textContent.trim();
  
  disclaimer.innerHTML = `This data is an approx value only. This is just the CO2 emission created by the product just during manufacturing, this might increase during the lifetime of the product depending on its usage and disposal` ;
  review.innerHTML = `There is still chance for you to help bees live`;

  // Create an array of gif links
const gifLinks = [
  "https://media.giphy.com/media/mMl1DphmngffO/giphy.gif",
  "https://media.giphy.com/media/Jrpy4EB3uqVx8RpRKK/giphy.gif",
  "https://media.giphy.com/media/aK4wh0UE3oddS/giphy.gif",
  "https://media.giphy.com/media/fazF1fn7AUBeE/giphy.gif",
  "https://media.giphy.com/media/l8Dd3u5EupOZq/giphy.gif"
];

// Choose a random gif link from the array
const randomGifLink = gifLinks[Math.floor(Math.random() * gifLinks.length)];

// Set the imgTag with the chosen gif link
let imgTag = `<img src="${randomGifLink}" alt="Polar bear" width="498" height="278">`;

  if (productType === "Electronics") {
  slogan.innerHTML = `Climate change is real!<br>Electronics causes approx 200kgco2e per year <br>` +  imgTag;
} else if (productType === "Fashion") {
  slogan.innerHTML = `Climate change is real!<br><ul>${productType}</ul> causes 150kgco2e per year <br>` + imgTag;
} else if (productType === "Watches") {
  slogan.innerHTML = `Climate change is real!<br><ul>${productType}</ul>: causes 130kgco2e per year <br>` + imgTag;
} else if (productType === "Entertainment") {
  slogan.innerHTML = `Climate change is real!<br><ul>${productType}</ul>: causes 120kgco2e per year<br>` + imgTag;
} else {
  slogan.innerHTML = `Climate change is real!<br> CO2e information not available for this product.<br>`+ imgTag;
}


  // Add CSS styles to the element to increase text size
  slogan.style.fontSize = "28px";
  slogan.style.fontWeight = "bold";
  slogan.style.color = "red";
  slogan.style.lineHeight = "33px";
  slogan.style.font = "Poppins";
  
 disclaimer.style.fontSize = "11px";
  disclaimer.style.fontWeight = "regular";
  disclaimer.style.color = "black";
  disclaimer.style.lineHeight = "11px";
  disclaimer.style.font = "Poppins";

  // Insert new paragraph element after the product type link
  
  placeMent.parentNode.insertBefore(disclaimer, placeMent.nextSibling);
  placeMent.parentNode.insertBefore(slogan, placeMent.nextSibling);
  paymentInfoSpan.parentNode.insertBefore(review, paymentInfoSpan.nextSibling);
  




}