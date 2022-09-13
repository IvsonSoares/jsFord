//class Carousel
class Carousel {

  static _sequence;
  static _size;
  static _interval;


  _image;
  _title;
  _link;

  constructor(imagePath, title, link){

    this._image = imagePath;
    this._title = title;
    this._link = link;
  }

  static Start(arr){
      if(arr){
          if(arr.length > 0){
              Carousel._sequence = 0;
              Carousel._size = arr.length;
              Carousel.Next(arr[Carousel._sequence]); //start
              Carousel._interval = setInterval(function(){ Carousel.Next(arr[Carousel._sequence]); },2000);
          }
      } else {
          throw "Method Start need a Array Variable.";
      }
  }

    static Next(carousel){

      //carousel effect
      Carousel._sequence++;
      if(Carousel._sequence >= Carousel._size) Carousel._sequence = 0;

      //carousel tags
      let img = Carousel.Image(carousel.getImage);
      Carousel.Title(carousel.getTitle);
      let title = Carousel.Link(carousel.getLink);

      carouselEffect(img, title);
    }

    static Image(image){
    //img
    var selector = '#carousel';
    var imagePath = image;
    var className = "caurosel-img";
    var imgTag = Tag.Image(selector, imagePath,className);

    return imgTag;

    }

    static Title(title){
      //<a> title
      var selector = '#carousel-title';
      var tagTitle = title;
      var className = "carousel-link";
      var titleTag = Tag.Title(selector, tagTitle, className);


    }

    static Link(link){
      //  link <a>
      var selector = '.carousel-link';
      var href = link;
      var titleTag = Tag.Link(selector, href);

      return titleTag;
    }

    get getImage(){
        return this._image;
      }

    get getTitle(){
        return this._title;
      }

    get getLink(){
        return this._link;
      }

};
