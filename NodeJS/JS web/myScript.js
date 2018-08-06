//alert('file is atached')
//console.log(document.getElementById('idone'));
// const myElement=document.querySelectorAll('#idone');
// console.log(myElement)
document.querySelector('button').addEventListener('click',(event)=>{
//console.log(event);
event.target.textContent='i was clicked';
})