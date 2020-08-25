const toggleBtn = document.querySelector("#dynamicTheme");
toggleBtn.addEventListener('click', e => {
  console.log("Switching theme");
  if(document.documentElement.hasAttribute('theme')){
    document.documentElement.removeAttribute('theme');
  }
  
  else{
    document.documentElement.setAttribute('theme', 'gray');
    console.log(document.documentElement.hasAttribute('theme'));
}
});