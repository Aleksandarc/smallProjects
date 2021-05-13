const container = document.querySelector('.container');
const call = document.querySelector('.calltoaciton');
const topnav = document.querySelector('.topnav');

document.addEventListener('scroll',e=>{
  if(document.documentElement.scrollTop>0){
    topnav.classList.add('topnav2');
  }else{
    topnav.classList.remove('topnav2');
  }
});

call.addEventListener('click',async e=>{
  var scroll=0;
  scroll=document.documentElement.scrollTop;
  if(scroll<500){
  }
  else{
    scroll=scroll;
  }
  
});
