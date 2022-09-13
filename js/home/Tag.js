class Tag{

  static Image(selector, imgPath, className){
    //Image
    var carouselImgDiv = document.querySelector(selector);
    var carouselImg = document.createElement('img');

    carouselImg.src = imgPath;
    carouselImg.classList.add(className);
    carouselImgDiv.appendChild(carouselImg);
    return carouselImg;
  }

  static Title(selector, title, className){
    //Image title <a>
    var carouselTitleDiv = document.querySelector(selector);
    var carouselTitle = document.createElement('a');

    carouselTitle.innerText = title;
    carouselTitle.classList.add(className);
    carouselTitleDiv.appendChild(carouselTitle);

    return carouselTitle;
  }

  static Link(selector, href){
    //  link <a>
    var carouselLink = document.querySelector(selector);
    carouselLink.href = href;
    return carouselLink;
  }
}
