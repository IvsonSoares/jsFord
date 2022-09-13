function carouselEffect(img, title){
  setTimeout(()=>{
    img.style.opacity = 1;
    title.style.opacity = 1;
  },50)

  setTimeout(()=>{
    img.style.opacity = 0;
    title.style.opacity = 0;
    setTimeout(()=>{
      img.remove();
      title.remove();
    }, 300)
  }, 1600)
}
