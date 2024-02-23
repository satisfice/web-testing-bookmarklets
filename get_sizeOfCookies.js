javascript:(function(){
  const totalSize=document.cookie.split(';').reduce((acc,cookie)=>acc+encodeURIComponent(cookie).length,0);
alert(`Total size of cookies: ${totalSize} bytes`);})();
