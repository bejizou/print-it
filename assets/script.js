const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById('banner');
const tagline = document.getElementById('tagline');
const dots = document.getElementById('dots');
const images = [];

let currentIndex = 0;
slides.forEach((slide, index) => {
	const prefix='./assets/images/slideshow/';
	const img = document.createElement('img');
	img.src = prefix.concat(slide.image) ;
	img.alt = `Slide ${index + 1}`;
	img.className="banner-img";
	
	img.style.display = index === 0 ? "block" : "none"; 
	images.push(img);
	banner.insertBefore(img, banner.querySelector('.arrow_left'));
  
  
	const dot = document.createElement('span');
	tagline.innerHTML = slides[0].tagLine;
	dot.classList.add('dot');
	if (index === 0) dot.classList.add('dot_selected');
	dot.addEventListener('click', () => {
	  showSlide(index);
	});
	dots.appendChild(dot);
  });

  const dotElements = document.querySelectorAll('.dot');
  tagline.innerHTML = slides[0].tagLine;

  function showSlide(index) {
	images[currentIndex].style.display = "none";
	dotElements[currentIndex].classList.remove('dot_selected');
  
	currentIndex = index;
  
	images[currentIndex].style.display = "block";
	dotElements[currentIndex].classList.add('dot_selected');
	tagline.innerHTML = slides[currentIndex].tagLine;
  }

document.querySelector('.arrow_left').addEventListener('click', () => {
	const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
  });

  document.querySelector('.arrow_right').addEventListener('click', () => {
	const newIndex = (currentIndex + 1) % slides.length;
	showSlide(newIndex);
  });