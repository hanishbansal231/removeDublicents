let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let showValue = document.querySelector('.showValue');
  
  let val = showValue;
  if (showValue.innerText > 0) {
   alert("Already Added The Item");
  }else{
    showValue.innerText = parseInt(val.innerText) + 1;
  }
 
});