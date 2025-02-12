//Slider hero area
const slidesContainer = document.getElementById("slider");
  const slides = document.querySelectorAll(".slider-item");
  const prevButton = document.getElementById("prevbtn");
  const nextButton = document.getElementById("nextbtn");
  
  console.log(slidesContainer.clientWidth);

  nextButton.addEventListener("click", function() {
    const slideWidth = slides[0].clientWidth; // Width of one slide
    const visibleSlidesCount = Math.floor(slidesContainer.clientWidth / slideWidth); // Number of slides visible at once
    const totalWidthToScroll = slideWidth * visibleSlidesCount; // Total width to scroll for multiple visible slides
    slidesContainer.scrollLeft += totalWidthToScroll;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slides[0].clientWidth; // Width of one slide
    const visibleSlidesCount = Math.floor(slidesContainer.clientWidth / slideWidth); // Number of slides visible at once
    const totalWidthToScroll = slideWidth * visibleSlidesCount; // Total width to scroll for multiple visible slides
    slidesContainer.scrollLeft -= totalWidthToScroll;
  });