var hamburger = document.getElementById("expandDropdown");
hamburger.addEventListener("click", function(){
  console.log("Click");
  var dropDownMenu = document.getElementById("navBar");
    if (dropDownMenu.style.display === "block") {
      dropDownMenu.style.display = "none";
      } else {
        dropDownMenu.style.display = "block";
      }
});
