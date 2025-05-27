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
	},	
]


const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const left = document.querySelector('.arrow_left'); 
const right = document.querySelector('.arrow_right');
let dotsdiv = document.querySelector('.dots')
let i = 0;

slides.forEach((index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) dot.classList.add('dot_selected');
		dotsdiv.appendChild(dot);
})
// Pour chaque slide i changement de l'image a partir du tableau slides et ajout de la phrase avec innerHTML
function baniere() {
	const slide = slides[i];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;

	let dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === i);
	});
}

left.addEventListener('click' , () => {
	if(i > 0)
		i--;
	else
		i = slides.length - 1;
	baniere();
} )

right.addEventListener('click' , () => {
	if(i < slides.length - 1)
		i++;
	else
		i = 0;
	baniere();
} )

baniere()

