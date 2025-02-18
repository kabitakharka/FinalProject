//Slider hero area
const slidesContainer = document.getElementById("slider");//variable to store all slides
const slides = document.querySelectorAll(".slider-item");//variable to store individual slides
const prevButton = document.getElementById("prevbtn");// variable for prev button input
const nextButton = document.getElementById("nextbtn");// variable for next button input

console.log(slidesContainer.clientWidth);

nextButton.addEventListener("click", function () {
  const slideWidth = slides[0].clientWidth; // Width of one slide
  const visibleSlidesCount = Math.floor(slidesContainer.clientWidth / slideWidth); // Number of slides visible at once
  const totalWidthToScroll = slideWidth * visibleSlidesCount; // Total width to scroll for multiple visible slides
  slidesContainer.scrollLeft += totalWidthToScroll;
});

prevButton.addEventListener("click", function () {
  const slideWidth = slides[0].clientWidth; // Width of one slide
  const visibleSlidesCount = Math.floor(slidesContainer.clientWidth / slideWidth); // Number of slides visible at once
  const totalWidthToScroll = slideWidth * visibleSlidesCount; // Total width to scroll for multiple visible slides
  slidesContainer.scrollLeft -= totalWidthToScroll;
});
//Slider hero area

//form validation for login

function validatelogin() 
{
  let usernamevalidate = document.forms["myloginForm"]["username"].value;//assigning a variable to get input for first name
  let passwordvalidate = document.forms["myloginForm"]["pswd"].value;//assigning a variable to get input for last name
  

    if (usernamevalidate == "") {
      alert("username cannot be empty");//if username is empty, return alert message
      return false;
    }
    else if (passwordvalidate  == "")
    {
      alert("password cannot be empty");//if password is empty, return alert message
      return false;
    }
    else
    {
      return true;
    }  
}
//form validation for login

//form validation for sign up

function validateFormsignup() 
{
  let fnamevalidate = document.forms["myForm"]["fname"].value;//assigning a variable to get input for first name
  let lnamevalidate = document.forms["myForm"]["lname"].value;//assigning a variable to get input for last name
  let unamevalidate = document.forms["myForm"]["uname"].value;//assigning a variable to get input for user name

    if (fnamevalidate == "") {
      alert("first name must be filled out");//if firstname is empty, return alert message
      return false;
    }
    else if(lnamevalidate == "")
    {
      alert("last name must be filled out");//if lastname is empty, return alert message
      return false;
    }
    else if(unamevalidate == "")
    {
      alert("user name must be filled out");//if usernamename is empty, return alert message
      return false;
    }
    else
    {
      alert("thank you for signing up");//if all boxes are full, 
  }
}
//form validation for sign up





