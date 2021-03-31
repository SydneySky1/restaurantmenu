const highlights = document.querySelectorAll('td'); 
const modal = document.querySelector('#modalCard');
const tortilla = document.querySelectorAll('td')[0];
const roastedTomatoes = document.querySelectorAll('td')[2];
const gingerChicken = document.querySelectorAll('td')[4];

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
                           
tortilla.addEventListener('mouseover', function(e) {
modal.style.display ='block';
modal.innerText='Green tortilla';
modalImg = document.createElement('img');
modalImg.src = '';
modal.append(modalImg);
});
  
roastedTomatoes.addEventListener('mouseover', function(e) {
modal.style.display ='block';
modal.innerText='Roasted Tomatoes and Avocado on Toast';
modalImg = document.createElement('img');
modalImg.src = '';
modal.append(modalImg);
});
  
gingerChicken.addEventListener('mouseover', function(e) {
modal.style.display ='block';
modal.innerText='Ginger Chicken Stir Fry';
modalImg = document.createElement('img');
modalImg.src = '';
modal.append(modalImg);
});



// setTimeout(function() {
//     event.target.style.color ='';
//     event.target.style.textShadow ='';
// }, 500);
// }, false);
