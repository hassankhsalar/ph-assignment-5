document.getElementById('show-donation-page').addEventListener('click', function(){
showSectionById('cards')
})


document.getElementById('show-history-page').addEventListener('click',
 function(){
    showSectionById('history');
 }   
)


const button1 = document.getElementById('show-donation-page');
const button2 = document.getElementById('show-history-page');

const originalColor1 = button1.style.backgroundColor;
const originalColor2 = button2.style.backgroundColor;

button1.addEventListener('click', function() {
  button1.style.backgroundColor = 'steelblue';
  button2.style.backgroundColor = originalColor2;
});
button2.addEventListener('click', function() {
  button2.style.backgroundColor = 'steelblue';
  button1.style.backgroundColor = originalColor1;
});