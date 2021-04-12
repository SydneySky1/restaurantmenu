const highlights = document.querySelectorAll('td'); 
const modal = document.querySelector('#modalCard');
const innerModal = document.querySelector('.inner-modal');
const picInnerModal = document.querySelector('.pic-inner-modal');
const pic = document.querySelector('.pic');
const title = document.querySelector('.title');
const info = document.querySelector('.info');

const tortilla = document.querySelectorAll('td')[0];
const roastedTomatoes = document.querySelectorAll('td')[2];
const gingerChicken = document.querySelectorAll('td')[4];
const shakshuka = document.querySelectorAll('td')[6];
const gingerCake = document.querySelectorAll('td')[8];
const lavaCake = document.querySelectorAll('td')[10];
const streusal = document.querySelectorAll('td')[12];
const sangria = document.querySelectorAll('td')[14];
const mimosa = document.querySelectorAll('td')[16];
const bellini = document.querySelectorAll('td')[18];
const juice = document.querySelectorAll('td')[20];

for(let highlight of highlights){
highlight.addEventListener("mouseover", function (event) {
event.target.style.color='yellow';
event.target.style.textShadow ='1px 1px 3px black';
event.target.nextElementSibling.style.color='yellow';
event.target.nextElementSibling.style.textShadow ='1px 1px 3px black';
})
  
 highlight.addEventListener("mouseout", function (event) {
 event.target.style.color='';
 event.target.style.textShadow='';
 event.target.nextElementSibling.style.color='';
 event.target.nextElementSibling.style.textShadow='';
 modal.style.display ='none';

 });
}

const displayModal = (item, source, name, menu) => {
    item.addEventListener('mouseover', (e) => {
     modal.style.display ='block';   
     title.innerText= `${name}`;   
     pic.src = `${source}`;  
     info.innerText = `${menu}`;
     
    })
}

         
// const displayModal = (item, source, name) => {
//     item.addEventListener('mouseover', (e) => {
//      modal.style.display ='block';
//      modal.innerText= `${name}`;
//      modalImg = document.createElement('img');
//      modalImg.height=100;
//      modalImg.width=100;
//      modalImg.src = `${source}`;
//      modal.append(modalImg);
//     })
// }

displayModal(tortilla, '/tortilla.jpg','Green Tortilla with Smoked Bacon', 
'Delicious organic tortilla honey smoked with bacon');

displayModal(roastedTomatoes,'/tortilla.jpg','Roasted Tomatoes and Avocado on Toast',
'Fresh grilled roasted tomatoes and avocado on toast');

displayModal(gingerChicken,'/tortilla.jpg','Ginger Chicken',
'Delicious ginger chicken stirfried with ginger and green onions');

displayModal(shakshuka,'/tortilla.jpg','Shakshuka',
'Shakshuka');

displayModal(gingerCake,'/tortilla.jpg','Jamaican Ginger and Caramel Cake',
'Delicious Jamaican moist caramel cake');

displayModal(lavaCake,'/tortilla.jpg','Chocolate Volcanic Lava',
'Melted lava cake');

displayModal(streusal,'/tortilla.jpg','Teff, Banana and Apricot Streusal',
'Glazing moist streusal');

displayModal(sangria,'/tortilla.jpg','Virgin Watermelon Sangria',
'Refreshing acohol-free watermelon sangria for that perfect summer!');

displayModal(mimosa,'/tortilla.jpg','Classic Mimosas',
'Your classic mimosa! Say no more!');

displayModal(bellini,'/tortilla.jpg','Bellini',
'Yummy bellini');

displayModal(juice,'/tortilla.jpg','Orange and Cranberry Juice',
'Freshly squeezed orange and cranberry juice');




// tortilla.addEventListener('mouseover', function(e) {
// modal.style.display ='block';
// modal.innerText='Green tortilla';
// modalImg = document.createElement('img');
// modalImg.src = '';
// modal.append(modalImg);
// });
  
// roastedTomatoes.addEventListener('mouseover', function(e) {
// modal.style.display ='block';
// modal.innerText='Roasted Tomatoes and Avocado on Toast';
// modalImg = document.createElement('img');
// modalImg.src = '';
// modal.append(modalImg);
// });
  
// gingerChicken.addEventListener('mouseover', function(e) {
// modal.style.display ='block';
// modal.innerText='Ginger Chicken Stir Fry';
// modalImg = document.createElement('img');
// modalImg.src = '';
// modal.append(modalImg);
// }); 


// setTimeout(function() {
//     event.target.style.color ='';
//     event.target.style.textShadow ='';
// }, 500);
// }, false);
