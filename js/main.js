var sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);

var slidesCount = sliderImage.length;

var currentSlide = 1;

var slideNumberElement = document.getElementById("slide-number");

var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

//create the main ul element
var paginationElement = document.createElement("ul");

//set ID to ul element
paginationElement.setAttribute("id", "pagination-ul");

//create list Items based on slides count
for (let i = 0; i < slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i+1);
  paginationItem.appendChild(document.createTextNode(i + 1));
  paginationElement.appendChild(paginationItem);
}

//append li items to ul
document.getElementById("indicators").appendChild(paginationElement);

var paginationCreatedUL = document.getElementById("pagination-ul");
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
        currentSlide=parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    --currentSlide;
    theChecker();
  }
}

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    ++currentSlide;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;

  removeActiveClass();
  //set Active class on current slide
  sliderImage[currentSlide - 1].classList.add("active");

  //set Active class on current pagination item
  paginationCreatedUL.children[currentSlide - 1].classList.add("active");

  //check if the current slide is the first slide
  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  //check if the current slide is the last slide
  if (currentSlide === slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeActiveClass() {
  sliderImage.forEach(function (e) {
    e.classList.remove("active");
  });

  paginationBullets.forEach(function (e) {
    e.classList.remove("active");
  });
}
