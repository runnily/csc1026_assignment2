var sIndex = 0; //set index
presentSlides(); //calling function

function presentSlides() {
  var i; //i to be used as counter
  var slides = document.getElementsByClassName("slides"); //to get all the elements in the class "slides"
  var indicator = document.getElementsByClassName("circle"); //to get all the elements in the class circle
  for (i = 0; i < slides.length; i++) { //this go through all elements in the class called slides
    slides[i].style.display = "none"; //and sets the display to none
  }
  sIndex++; //index is then incremented
  if (sIndex > slides.length) { //when the sIndex has reached the maximum amount of slides
    sIndex = 1 //it sets it to back to one
  }
  for (i = 0; i < indicator.length; i++) { //This goes through all the elements in the class called circle
    indicator[i].className = indicator[i].className.replace(" active", ""); //and replaces with the class name active
    //changing it allow it to change color
  }
  slides[sIndex - 1].style.display = "block"; //this slides to block
  indicator[sIndex - 1].className += " active"; //and sets indicator to actuve
  setTimeout(presentSlides, 2000); // This changes picture every 2 seconds
}
